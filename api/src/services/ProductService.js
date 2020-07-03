/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarr�a
 * Github: @josechavarriacr
 */
import Service from './Service';
import mongoose from 'mongoose';

const { mongo } = mongoose;
const { ObjectId } = mongo;


class ProductService extends Service {
  constructor(model) {
    super(model);
  }
  async findOne(id) {
    try {
      const _id = new ObjectId(id)
      const item = await this.model.findOne({_id})
      .populate('owner', ['-password', '-Roles'])
      .populate('subcategories', ['id', 'name'])
    return {
      status: true,
      statusCode: 200,
      item
    };
    } catch (error) {
      throw new Error(error);
    }
  }
};

export default ProductService;