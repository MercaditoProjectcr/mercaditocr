import { Router, response } from 'express';
import UserController from '../controllers/UserController';
const { singUp, findByEmail, singIn } = UserController;

const routerPublic = Router();

routerPublic.route('/signup')
.post(singUp)
// .post((req, res, next) => {
//     res.status(200).send('hello')
// })

routerPublic.route('/signin')
.post(singIn)

routerPublic.route('/verifyEmail')
.post(findByEmail)

export default routerPublic;