/*
 * Created on Sun Aug 23 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */

import AuthService from '../services/Auth'
import User from '../models/User'

const userService = new AuthService(new User().getInstance())

class AuthController {
  constructor(service) {
    this.service = service
    this.singIn = this.singIn.bind(this)
    this.singUp = this.singUp.bind(this)
    this.verifyEmail = this.verifyEmail.bind(this)
  }

  async singUp(req, res, next) {
    try {
      const response = await this.service.signUp(req.body)
      return res.status(response.statusCode).send(response)
    } catch (error) {
      next(error.message)
      return false
    }
  }

  async singIn(req, res, next) {
    try {
      const response = await this.service.signIn(req.body)
      return res.status(response.statusCode).send(response)
    } catch (error) {
      next(error.message)
      return false
    }
  }

  async verifyEmail(req, res, next) {
    try {
      const response = await this.service.verifyEmail(req.body)
      return res.status(response.statusCode).send(response)
    } catch (error) {
      next(error.message)
      return false
    }
  }
}

export default new AuthController(userService)
