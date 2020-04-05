import PostController from './../src/controllers/PostController';
import UserController from '../src/controllers/UserController';

export default (app) => {

  // POST ROUTES
  const posts = '/api/posts';
  app.get(posts, PostController.getAll);
  app.get(`${posts}/:params`, PostController.get);
  app.post(posts, PostController.insert)
  app.put(`${posts}/:id`, PostController.update);
  app.delete(`${posts}/:id`, PostController.delete);

  // test
  app.get('/test', PostController.test)

  // Users routes
  const users = '/api/users';
  app.get(users, UserController.getAll);
  app.get(`${users}/:params`, UserController.getAll);
  app.post(users, UserController.insert)
  app.put(`${users}/:id`, UserController.update)
  app.delete(`${users}/:id`, UserController.delete)
}