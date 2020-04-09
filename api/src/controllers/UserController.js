import Controller from  './Controller';
import UserService from  "./../services/UserService";
import User from  "./../models/User";

const userService = new UserService(
  new User().getInstance()
);

class UserController extends Controller {

  constructor(service) {
    super(service);
  }

  async test(req, res, next) {
   try {
    const data = await postService.getData();
    return res.status(200).send({
      message: 'success',
      data
    });
   } catch (error) {
     next(error)
   }
  }
  
}

export default new UserController(userService);
