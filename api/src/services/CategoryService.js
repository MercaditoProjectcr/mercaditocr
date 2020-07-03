/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarr�a
 * Github: @josechavarriacr
 */
import Service from './Service';
import SubCategory from '../models/SubCategory';

class CategoryService extends Service {
  constructor(model) {
    super(model);
    this.subCategory = new SubCategory().getInstance();
  }
  async create(data) {
    try {
      const objData = {}
      objData.name = data.name
      const { SubCategories } = data
      if (SubCategories) {
        const aux = await this.subCategory.create(SubCategories)
        objData.SubCategories = aux.map(value => {
          return value._id
        })
      }
      const item = await this.model.create(objData);
      if (item)
        return {
          status: true,
          statusCode: 201,
          item
        };
    } catch (error) {
      throw new Error(error);
    }
  }
};

export default CategoryService;