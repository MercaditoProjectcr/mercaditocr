/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import { Router } from 'express'
import ProductController from '../controllers/ProductController'

const { findAll, findOne, create, update, remove } = ProductController
const routerProduct = Router()

// /api/products
routerProduct.route('/').get(findAll).post(create)

// api/products:id
routerProduct.route('/:id').get(findOne).put(update).delete(remove)

export default routerProduct
