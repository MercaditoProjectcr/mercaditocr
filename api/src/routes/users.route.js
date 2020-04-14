import { Router, response } from 'express';
import UserController from '../controllers/UserController';
const { findAll, findOne, singUp, singIn, update, remove } = UserController;

const routerUser = Router();

// api/user
routerUser.route('/')
.get(findAll)

// api/user/:id
routerUser.route('/:id')
.get(findOne)
.put(update)
.delete(remove)

// /api/user/signup
routerUser.route('/signup')
.post(singUp)

// /api/user/signin
routerUser.route('/signin')
.post(singIn)

export default routerUser;