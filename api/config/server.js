import express from 'express';
import bodyParser, { urlencoded } from 'body-parser';
import cors from 'cors';
import setRoutes from './routes';
import morgan from 'morgan';
import fileUpload from 'express-fileupload'
export const app = express();

// enable files upload
app.use(fileUpload({
    createParentPath: true
}));
app.use('/public',express.static('../public'));

app.disable('x-powered-by');
app.use(bodyParser.json());
app.use(cors());
app.use(urlencoded({ extended: true }));
// setRoutes(app);
app.use('/api', setRoutes);
app.use(morgan('dev'));

export default app;
