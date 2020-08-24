/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import UserService from '../services/UserService'
import Controller from './Controller'
import User from '../models/User'

const userService = new UserService(new User().getInstance())
class UserController extends Controller {
  constructor(service) {
    super(service)
  }
}

export default new UserController(userService)
