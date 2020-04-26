import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const dto = {
  name: {
    type: String,
    required: true,
  },
  SubCategories: [
    {
      name: {
        type: String,
        required: true,
      }
    }
  ]
};
class Category {
  initSchema() {
    const schema = new Schema(dto, { timestamps: true });
    schema.pre(
      "save",
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
    mongoose.model("categories", schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("categories");
  }
}
export default Category;
