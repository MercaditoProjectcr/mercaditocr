import { Router } from 'express';
import routerPost from '../src/routes/posts.route';
import routerUser from '../src/routes/users.route';
import ErrorHandle from '../src/middlewares/error-handle';
const getErrors = new ErrorHandle().getErrors;
const router = Router();

// api
router.get('/', (req, res, next) => {
  res.status(200).send({
   message: 'conected!'
  })
})

// api/posts
router.use('/posts', routerPost)

// api/users
router.use('/users', routerUser)

// 404 not found
router.all('*', (req, res) => {
  res.status(404).send('The route does not exists');
})

// 505 error
router.use(getErrors)

export default router;