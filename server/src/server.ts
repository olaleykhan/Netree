import app from './app.js';

const PORT = process.env.PORT ?? 8000;

app.listen(PORT, () => { console.log(`running on port : ${PORT}`); });

process.on('bad auth', (err: unknown) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');

  if (err instanceof Error) {
    console.log(err.name, err.message);
  }
});
