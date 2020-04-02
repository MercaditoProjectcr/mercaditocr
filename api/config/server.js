import express from 'express';
import bodyParser from 'body-parser';
const server = express();
import setRoutes from '../src/routes';

// setRoutes(server);
server.use('/api', setRoutes);

// default when the route does not exist
server.all('*', (req, res) => {
    res.status(404).send("you're lost?")
  })

server.use(bodyParser.json());

export default server;