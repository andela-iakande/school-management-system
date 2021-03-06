import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';

const app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the school management.',
}));
export default app;
