/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import Controller from './Controller'
import Product from '../models/Product'
import ProductService from '../services/ProductService'

const productService = new ProductService(new Product().getInstance())

class ProductController extends Controller {
  constructor(service) {
    super(service)
  }
}

export default new ProductController(productService)
