import express, { type Express, type Response, type Request, type NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from "helmet";
import passport, {Profile } from 'passport';
// import by extracting GoogleStrategy from passport-google-oauth20
import {Strategy as GoogleStrategy, VerifyCallback } from 'passport-google-oauth20'
import cookieSession from 'cookie-session';
import router from './routes/router';
import path from 'path';


declare global {
  namespace Express {
      interface User {
          id?: number | string;
      }
  }
}

// google auth options
// TODO: move this to a config file
const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;

const CONFIG = {
  COOKIE_KEY_1: process.env.COOKIE_KEY_1,
  COOKIE_KEY_2: process.env.COOKIE_KEY_2,
 GOOGLE_CLIENT_ID : process.env.GOOGLE_CLIENT_ID,
 GOOGLE_CLIENT_SECRET : process.env.GOOGLE_CLIENT_SECRET,

}
const AUTH_OPTIONS = {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
}

// callback after user has signed in with google auth. let us do and undo here
function verifyCallback(accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) {
  console.log(profile, "profile from google");
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
  //   return cb(err, user);
  // });
  return done(null, profile);
}
// google auth strategy here
passport.use(new GoogleStrategy(AUTH_OPTIONS, verifyCallback));
// Save the session to the cookie

// Save the session to the cookie
passport.serializeUser((user , done) => {
  done(null, user.id);
});

// Read the session from the cookie
passport.deserializeUser((id, done) => {
  // User.findById(id).then(user => {
  //   done(null, user);
  // });
  done(null, id);
});

const app: Express = express();
app.use(cors());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(helmet());


app.use(express.json());


app.use(cookieSession({
  name: 'session',
  maxAge: 24 * 60 * 60 * 1000,
  keys: [CONFIG.COOKIE_KEY_1, CONFIG.COOKIE_KEY_2],
}));

app.use((req, res, next) => {
  // Stub out missing regenerate and save functions.
  // These don't make sense for client side sessions.
  if (req.session && !req.session.regenerate) {
    req.session.regenerate = (cb:VerifyCallback) => {
      cb();
    };
  }
  if (req.session && !req.session.save) {
    req.session.save = (cb:VerifyCallback) => {
      cb();
    };
  }
  next();
});


app.use(passport.initialize());
app.use(passport.session());

function checkLoggedIn(req: Request, res: Response, next: NextFunction) {
  console.log('Current user is:', req.user);
  const isLoggedIn = req.isAuthenticated() && req.user;
  if (!isLoggedIn) {
    return res.status(401).json({
      error: 'You must log in!',
    });
  }
  next();
}


app.use((req, res, next) => {
  req.params.reqTime = new Date().toISOString();
  next();
});

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google',
 { failureRedirect: '/login-failed',successRedirect: '/preview', session: true},
),
(req, res) => {
  console.log( "user from google", res);
//  return  res.send(200).json({ message: 'login via google successful' });
return res.redirect('/preview');
}
);
// logout
app.get('/logout', (req, res,next) => {
    //Removes req.user and clears any logged in session
    req.logout((err) => {
      if (err) {
        return next(err);
      }
      res.redirect('/');
    });
});
app.get('/login-failed', (req, res) => {
  res.status(401).json({ error: 'Login failed' });
});

app.use('/api/v1/',checkLoggedIn , router);
// app.all('*', (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
// });

app.use((err: Error & { statusCode: number }, req: Request, res: Response, next: NextFunction): void => {
  err.statusCode = err.statusCode ?? 500;
  err.message = err.message ?? 'Internal Server Error';
  // console.log(err.stack);
  res.status(err.statusCode).json({ error: err.message });
  next();
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

export default app;
