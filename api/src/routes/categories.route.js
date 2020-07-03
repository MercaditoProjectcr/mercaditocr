/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarr�a
 * Github: @josechavarriacr
 */
import { Router } from "express";
import CategoryController from "../controllers/CategoryController";
const { findAll, findOne, create, update, remove } = CategoryController;
const routerCategory = Router();

// /api/categories
routerCategory.route('/')
.get(findAll)
.post(create)

// api/categories:id
routerCategory.route('/:id')
.get(findOne)
.put(update)
.delete(remove)

export default routerCategory;