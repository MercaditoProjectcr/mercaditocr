import mongoose, { Schema } from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import bcrypt from 'bcryptjs';

const dto = {
  name: {
    type: String,
    required: false,
  },
  lastName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true, // TODO change to true
    unique: true, // TODO change to true
  },
  username: {
    type: String,
    required: true, // TODO change to true
    unique: true, // TODO change to true
  },
  password: {
    type: String,
    required: true,
  },
  enable: {
    type: Boolean,
    required: false,
  },
  token: {
    type: String,
    required: false,
  },
  Roles: {
    type: {
      type: String, // admin, owner and client
      required: false,
    },
  },
  Preferences: {
    img: {
      type: String,
      required: false,
    },
    location: {
      type: String,
      required: false,
    },
  },
};


class User {
  initSchema() {
    const schema = new Schema(dto, { timestamps: true });
    schema.pre('save', function (next) {
      if (!this.isModified('password')) {
        return next();
      }
      bcrypt.hash(this.password, 8, (err, hash) => {
        if (err) {
          return next(err);
        }
        this.password = hash;
        next();
      });
    });
    schema.plugin(uniqueValidator);
    mongoose.model('users', schema);
  }

  getInstance() {
    if (!mongoose.connection.models['users']) {
      this.initSchema();
    }
    return mongoose.model('users');
  }
}

export default User;
