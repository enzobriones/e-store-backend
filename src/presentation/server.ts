import express from 'express';

import router from './routes';

const app = express();

//* Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//* Routes
app.use('/api', router);

export default app;