/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import { Router } from 'express';
import routerPost from '../src/routes/posts.route';
import routerUser from '../src/routes/users.route';
import routerPublic from '../src/routes/public.route';
import getErrors from '../src/middlewares/error-handle';
import verifyToken from '../src/middlewares/verify-token';
const { isToken } = verifyToken;
const router = Router();

// api
router.get('/', (req, res) => {
  res.status(200).send({
    message: 'conected!',
    req
  });
});

// api/test
router.use('/test', isToken, (req, res, next) => {
  res.status(200).send({
    status: true,
    message: 'helloooo',
  })
})

// api/posts
router.use('/posts', routerPost);

// api/users
router.use('/users', isToken, routerUser);

// api/public
router.use('/public', routerPublic)

// 404 not found
router.all('*', (req, res) => {
  res.status(404).send('The route does not exists');
});

// 505 error
router.use(getErrors);

export default router;
