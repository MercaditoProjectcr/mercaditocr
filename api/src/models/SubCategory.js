/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarr�a
 * Github: @josechavarriacr
 */
import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';

const dto = {
  name: {
    type: String,
    required: true,
  },
};
class SubCategory {
  initSchema() {
    const schema = new Schema(dto, { timestamps: true });
    schema.pre(
      'save',
      function (next) {
        console.log(next); 
        return next();
      },
      function (err) {
        console.log(err); 
        next(err);
      }
    );
    schema.plugin(uniqueValidator);
    mongoose.model('subcategories', schema);
  }

  getInstance() {
    if (!mongoose.connection.models['subcategories']) {
      this.initSchema();
    }
    return mongoose.model('subcategories');
  }
}
export default SubCategory;
