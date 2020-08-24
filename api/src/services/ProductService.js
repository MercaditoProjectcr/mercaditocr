/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import mongoose from 'mongoose'
import Service from './Service'

const { mongo } = mongoose
const { ObjectId } = mongo

class ProductService extends Service {
  constructor(model) {
    super(model)
  }

  async findOne(id) {
    try {
      // eslint-disable-next-line no-underscore-dangle
      const _id = new ObjectId(id)
      const item = await this.model
        .findOne({ _id })
        .populate('owner', ['-password', '-Roles'])
        .populate('subcategories', ['id', 'name'])

      return {
        status: true,
        statusCode: 200,
        item,
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default ProductService
