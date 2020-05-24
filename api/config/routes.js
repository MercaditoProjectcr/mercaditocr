import { Router } from 'express';
import routerPost from '../src/routes/posts.route';
import routerUser from '../src/routes/users.route';
import routerPublic from '../src/routes/public.route';
import ErrorHandle from '../src/middlewares/error-handle';

const { getErrors } = new ErrorHandle();
const router = Router();

// api
router.get('/', (req, res) => {
  res.status(200).send({
    message: 'conected!',
  });
});

// api/posts
router.use('/posts', routerPost);

// api/users
router.use('/users', routerUser);

// api/public
router.use('/public', routerPublic)

// 404 not found
router.all('*', (req, res) => {
  res.status(404).send('The route does not exists');
});

// 505 error
router.use(getErrors);

export default router;
