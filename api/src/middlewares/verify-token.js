/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */

import Token from "../services/Token";
import UserController from "../controllers/UserController";
const { findOne } = UserController;

 async function protect(req, res, next) {
    const bearer = req.headers.authorization
  
    if (!bearer || !bearer.startsWith('Bearer ')) {
      return res.status(401).end()
    }
  
    const token = bearer.split('Bearer ')[1].trim()
    let payload
    try {
      payload = await Token.verify(token)
    } catch (e) {
      return res.status(401).end()
    }
  
    const user = await findOne(payload.id)
      .select('-password')
      .lean()
      .exec()
  
    if (!user) {
      return res.status(401).end()
    }
  
    req.user = user
    next()
  }