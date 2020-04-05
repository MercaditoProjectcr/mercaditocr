import { Router } from "express";
import PostController from "../controllers/PostController";
const { findAll, findOne, create, update, remove } = PostController;
const routerPost = Router();

// /api/post
routerPost.route('/')
.get(findAll)
.post(create)

// api/post:id
routerPost.route('/:id')
.get(findOne)
.put(update)
.delete(remove)

export default routerPost;