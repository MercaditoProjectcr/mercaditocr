/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import jwt from 'jsonwebtoken'
import config from '../../config/env'

const getNew = (user) => {
  try {
    return jwt.sign({ id: user.id }, config.secrets.jwt, {
      expiresIn: config.secrets.jwtExp,
    })
  } catch (error) {
    throw new Error(error)
  }
}

const verify = async (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, config.secrets.jwt, (error, payload) => {
      if (error) return reject(error)
      return resolve(payload)
    })
  })
}

const Token = { getNew, verify }
export default Token
