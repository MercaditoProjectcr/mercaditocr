import { Router, response } from 'express';
import UserController from '../controllers/UserController';
const { findAll, findOne, find, create, update, remove } = UserController;
const routerUser = Router();

// /api/user
routerUser.route('/')
.get(findAll)
.post(create)

// /api/user/:id
routerUser.route('/:id')
.get(findOne)
.put(update)
.delete(remove)

export default routerUser;