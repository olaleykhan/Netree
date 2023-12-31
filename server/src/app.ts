import express, { type Express, type Response, type Request, type NextFunction } from 'express';
import morgan from 'morgan';
import cors from 'cors';
import router from './routes/router';


const app: Express = express();
app.use(cors());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
app.use(express.json());
app.use((req, res, next) => {
  req.params.reqTime = new Date().toISOString();
  next();
});

const getAll = (req: Request, res: Response): void => {
  res.status(200).json({ message: 'Hello World! from Olalekan Abdulfatah' });
};

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

export default app;
