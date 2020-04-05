import PostController from './../src/controllers/PostController';

export default (app) => {

  // POST ROUTES
  app.get('/api/posts', PostController.getAll);
  app.get('/api/posts/:params', PostController.get);
  app.post('/api/posts', PostController.insert)
  app.put('/api/posts/:id', PostController.update);
  app.delete('/api/posts/:id', PostController.delete);

}