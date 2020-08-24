/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import { Router } from 'express'
import AuthController from '../controllers/AuthController'

const { singUp, verifyEmail, singIn } = AuthController

const routerPublic = Router()

routerPublic.route('/signup').post(singUp)

routerPublic.route('/signin').post(singIn)

routerPublic.route('/verifyEmail').post(verifyEmail)

export default routerPublic
