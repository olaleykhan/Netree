import express, { type Express, type Response, type Request, type NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import helmet from "helmet";
import passport, {Profile } from 'passport';
// import by extracting GoogleStrategy from passport-google-oauth20
import {Strategy as GoogleStrategy, VerifyCallback } from 'passport-google-oauth20'
import router from './routes/router';
import path from 'path';


const app: Express = express();
app.use(cors());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(helmet());


app.use(express.json());

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
const AUTH_OPTIONS = {
  clientID: GOOGLE_CLIENT_ID,
  clientSecret: GOOGLE_CLIENT_SECRET,
  callbackURL: "/auth/google/callback"
}

function verifyCallback(accessToken: string, refreshToken: string, profile: Profile, done: VerifyCallback) {
  console.log(profile, "profile from google");
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
  //   return cb(err, user);
  // });
  return done(null, profile);
}
passport.use(new GoogleStrategy(AUTH_OPTIONS, verifyCallback));
// Save the session to the cookie
passport.serializeUser((user:Express.User, done) => {
  done(null, user );
});

// Read the session from the cookie
passport.deserializeUser((id, done) => {
  // User.findById(id).then(user => {
  //   done(null, user);
  // });
  done(null, id);
});


app.use((req, res, next) => {
  req.params.reqTime = new Date().toISOString();
  next();
});

const getAll = (req: Request, res: Response): void => {
  res.status(200).json({ message: 'Hello World! from Olalekan Abdulfatah' });
};
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api/v1/', router);
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
