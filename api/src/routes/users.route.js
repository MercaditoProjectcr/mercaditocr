/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import { Router } from 'express'
import UserController from '../controllers/UserController'

const { findAll, findOne, update, remove } = UserController

const routerUser = Router()

routerUser.route('/').get(findAll)

routerUser.route('/:id').get(findOne).put(update).delete(remove)

export default routerUser
