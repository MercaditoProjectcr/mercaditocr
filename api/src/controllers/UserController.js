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
    this.service = service
  }

  async update(req, res, next) {
    try {
      const { id } = req.params
      const response = await this.service.update(id, req)
      return res.status(response.statusCode).send(response)
    } catch (error) {
      next(error.message)
      return false
    }
  }
}

export default new UserController(userService)
