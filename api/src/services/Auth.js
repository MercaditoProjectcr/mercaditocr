/* eslint-disable no-underscore-dangle */
/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import bcrypt from 'bcryptjs'
import User from '../models/User'
import Token from './Token'

class AuthService {
  constructor() {
    this.model = new User().getInstance()
  }

  isEmptyEmailAndPassword(params) {
    const { email, password } = params
    if (!email) throw new Error('email is missing')
    if (!password) throw new Error('passwords is missing')
  }

  async signUp(params) {
    try {
      this.isEmptyEmailAndPassword(params)
      const { Roles } = params
      if (!Roles) {
        params.Roles = {
          type: 'user', // user, owner, client
        }
      }
      const Preferences = {
        img: '/home/img',
        location: 'Yor currect location',
      }
      params.username = params.email
      const newUser = {
        ...params,
        Preferences,
      }
      const user = await this.model.create(newUser)
      const token = Token.getNew(user)
      user.password = undefined
      return {
        status: true,
        statusCode: 201,
        user,
        token,
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  async signIn(params) {
    try {
      this.isEmptyEmailAndPassword(params)
      const { email, password } = params
      const user = await this.model.findOne({ email })
      if (!user) {
        return {
          status: false,
          statusCode: 404,
          message: 'User not found',
        }
      }
      const match = await bcrypt.compare(password, user.password)

      if (!match) {
        return {
          status: false,
          statusCode: 401,
          message: 'Invalid email and passdword combination',
        }
      }

      const token = Token.getNew(user)
      user.password = undefined
      return {
        status: true,
        statusCode: 200,
        user,
        token,
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default AuthService
