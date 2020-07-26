/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import { Router } from 'express';
import UserController from '../controllers/UserController';
const { findAll, findOne, singUp, findByEmail, singIn, update, remove } = UserController;

const routerUser = Router();

routerUser.route('/')
.get(findAll)

routerUser.route('/:id')
.get(findOne)
.put(update)
.delete(remove)

routerUser.route('/signup')
.post(singUp)

routerUser.route('/signin')
.post(singIn)

routerUser.route('/verifyEmail')
.post(findByEmail)

export default routerUser;