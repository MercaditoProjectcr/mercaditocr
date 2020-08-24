/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import { Router } from 'express'
import AuthController from '../controllers/AuthController'

const { singUp, singIn, findByEmail } = AuthController

const routerUser = Router()

routerUser.route('/signup').post(singUp)

routerUser.route('/signin').post(singIn)

routerUser.route('/verifyEmail').post(findByEmail)

export default routerUser
