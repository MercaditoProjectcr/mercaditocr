/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import { Router } from 'express'
import routerPost from '../src/routes/posts.route'
import routerUser from '../src/routes/users.route'
import routerPublic from '../src/routes/public.route'
import getErrors from '../src/middlewares/error-handle'
import verifyToken from '../src/middlewares/verify-token'
import routerCategory from '../src/routes/categories.route'
import routerProduct from '../src/routes/products.route'
import notFound from '../src/middlewares/not-found'
import routerConnection from '../src/routes/connection'

const { isToken } = verifyToken
const router = Router()

// api
router.use('/', routerConnection)

// api/posts
router.use('/posts', isToken, routerPost)

// api/users
router.use('/users', isToken, routerUser)

// api/categories
router.use('/categories', isToken, routerCategory)

// api/products
router.use('/products', isToken, routerProduct)

// api/public
router.use('/public', routerPublic)

// 404 not found
router.all('*', notFound)

// 505 error
router.use(getErrors)

export default router
