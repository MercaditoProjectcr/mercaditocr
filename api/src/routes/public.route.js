/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import { Router, response } from 'express';
import UserController from '../controllers/UserController';
const { singUp, findByEmail, singIn } = UserController;

const routerPublic = Router();

routerPublic.route('/signup')
.post(singUp)

routerPublic.route('/signin')
.post(singIn)

routerPublic.route('/verifyEmail')
.post(findByEmail)

export default routerPublic;