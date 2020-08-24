/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import Controller from './Controller'
import CategoryService from '../services/CategoryService'
import Category from '../models/Category'

const categoryService = new CategoryService(new Category().getInstance())

class CategoryController extends Controller {
  constructor(service) {
    super(service)
  }
}

export default new CategoryController(categoryService)
