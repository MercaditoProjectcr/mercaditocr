/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import Controller from './Controller';
import PostService from '../services/PostService';
import Post from '../models/Post';

const postService = new PostService(new Post().getInstance());

class PostController extends Controller {
  constructor(service) {
    super(service);
  }

  async test(req, res, next) {
    try {
      const data = await postService.getData();
      return res.status(200).send({
        message: 'success',
        data,
      });
    } catch (error) {
      next(error.message);
    }
  }
}

export default new PostController(postService);
