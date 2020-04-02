  
const routes = require('express').Router();

const PostRoute = require('./PostRoute')

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
  });

routes.use('/posts', PostRoute)

module.exports = routes
