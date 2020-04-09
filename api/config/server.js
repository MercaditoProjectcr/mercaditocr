import express from 'express';
import bodyParser, { urlencoded } from 'body-parser';
import cors from 'cors';
export const app = express();
import setRoutes from './routes';

app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(cors());
app.use(urlencoded({ extended: true}) )

// setRoutes(app);
app.use('/api', setRoutes)

export default app;