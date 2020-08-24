import AuthService from '../services/Auth'

/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */

class AuthController {
  constructor() {
    this.service = new AuthService()
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

export default new AuthController()
