/* eslint-disable no-console */
/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import mongoose, { Schema } from 'mongoose'
import uniqueValidator from 'mongoose-unique-validator'

const dto = {
  name: {
    type: String,
    required: true,
  },
  SubCategories: [
    {
      type: Schema.Types.ObjectId,
      ref: 'categories',
    },
  ],
}
class Category {
  initSchema() {
    const schema = new Schema(dto, { timestamps: true })
    schema.pre(
      'save',
      (next) => {
        console.log(next)
        return next()
      },
      (err) => {
        console.log(err)
      }
    )
    schema.plugin(uniqueValidator)
    mongoose.model('categories', schema)
  }

  getInstance() {
    if (!mongoose.connection.models.categories) {
      this.initSchema()
    }
    return mongoose.model('categories')
  }
}
export default Category
