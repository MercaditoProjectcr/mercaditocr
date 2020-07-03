/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarr�a
 * Github: @josechavarriacr
 */
import Service from './Service';
import mongoose from 'mongoose';

// import Category from '../models/Category';
const { mongo } = mongoose;
const { ObjectId } = mongo;


class ProductService extends Service {
  constructor(model) {
    super(model);
    // this.category = new Category().getInstance();
  }
  async findOne(id) {
    try {
      const _id = new ObjectId(id)
      const item = await this.model.findOne({_id})
      // let categories
      // // .populate('owner')
      // if(item.tags.length) {
      //   categories = await this.category.find()
      //   const aux = categories.SubCategories.map(value => {
      //   })
      //   // .where('_id').in(item.tags)
      // }
    return {
      status: true,
      statusCode: 200,
      item,
      categories
    };
    } catch (error) {
      throw new Error(error);
    }
  }
};

export default ProductService;