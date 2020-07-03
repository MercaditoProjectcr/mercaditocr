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
  description: {
    type: String,
    required: true,
  },
  options: {
    express: {
      type: Boolean,
      required: false
    },
    paymentTerminal: {
      type: Boolean,
      required: false
    },
    paymentOnline: {
        type: Boolean,
        required: false
    }
  },
  images: [
    {
        url: {
            type: String,
            required: false
        }
    }
  ],
  contacts: {
      facebook: {
        type: String,
        required: false
      },
      instagram: {
          type: String,
          required: false
      },
      twitter: {
          type: String,
          required: false
      },
      linkedin: {
          type: String,
          required: false
      },
      whatapp: {
          type: Number,
          required: false
      },
      website: {
          type: String,
          required: false
      }
  },
  owner: { 
      type: Schema.Types.ObjectId, 
      ref: 'users' 
    },
    subcategories: [
      {
        type: Schema.Types.ObjectId, 
        ref: 'subcategories' 
      }
    ]
};

class Product {
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
    mongoose.model('products', schema);
  }

  getInstance() {
    if (!mongoose.connection.models['products']) {
      this.initSchema();
    }
    return mongoose.model('products');
  }
}
export default Product;
