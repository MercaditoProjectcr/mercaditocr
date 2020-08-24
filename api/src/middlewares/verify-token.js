/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */

/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import Token from '../services/Token'
import UserService from '../services/UserService'

class VerifyToken {
  constructor() {
    this.service = new UserService()
    this.isToken = this.isToken.bind(this)
  }

  async isToken(req, res, next) {
    try {
      const bearer = req.headers.authorization
      if (!bearer || !bearer.startsWith('Bearer ')) {
        return res.status(401).send({
          status: false,
          message: 'Bearer is missing',
        })
      }
      const token = bearer.split('Bearer ')[1].trim()
      const payload = await Token.verify(token)
      const user = await this.service.findOne(payload.id)
      const { data } = user
      req.user = data
      next()
      return req
    } catch (error) {
      next(error)
      return false
    }
  }
}

export default new VerifyToken()
