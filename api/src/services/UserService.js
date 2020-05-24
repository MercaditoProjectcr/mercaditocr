/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import mongoose from 'mongoose';
import User from '../models/User';
import UploadImg from './UploadImg';
import Token from './Token';
import bcrypt from 'bcryptjs';
const { mongo } = mongoose;
const { ObjectId } = mongo;

class UserService {
  constructor() {
    this.model = new User().getInstance();
    this.img = new UploadImg();
  }

  async findAll(query) {
    let { skip, limit } = query;

    skip = skip ? Number(skip) : 0;
    limit = limit ? Number(limit) : 10;

    delete query.skip;
    delete query.limit;

    if (query._id) {
      try {
        query._id = new ObjectId(query._id);
      } catch (error) {
        console.log('not able to generate mongoose id with content', query._id);
      }
    }

    try {
      const items = await this.model
        .find(query)
        .select('-password')
        .skip(skip)
        .limit(limit);
      const total = await this.model.countDocuments();

      return {
        status: false,
        statusCode: 200,
        data: items,
        total,
      };
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id) {
    try {
      const _id = new ObjectId(id);
      const item = await this.model.findOne({ _id }).select('-password');
      return {
        status: false,
        statusCode: 200,
        item,
      };
    } catch (error) {
      throw new Error(error);
    }
  }

  async create(data) {
    try {
      const item = await this.model.create(data);
      if (item)
        return {
          status: true,
          statusCode: 201,
          item,
          token,
        };
    } catch (error) {
      throw new Error(error);
    }
  }

  isEmptyEmailAndPassword(params) {
    const { email, password } = params;
    if (!email) throw new Error('email is missing');
    if (!password) throw new Error('passwords is missing');
  }

  async signUp(data) {
    try {
      this.isEmptyEmailAndPassword(data);
      const { Roles } = data;
      if (!Roles) {
        data.Roles = {
          type: 'user', // user, owner, client
        };
      }
      const Preferences = {
        img: '/home/img',
        location: 'Yor currect location',
      };
      data.username = data.email;
      const newUser = {
        ...data,
        Preferences,
      };
      const user = await this.model.create(newUser);
      const token = Token.getNew(user);
      if (user) {
        user.password = undefined;
        return {
          status: true,
          statusCode: 201,
          user,
          token,
        };
      }
    } catch (error) {
      throw new Error(error);
    }
  }

  async signIn(params) {
    try {
      this.isEmptyEmailAndPassword(params);
      const { email, password } = params;
      const user = await this.model.findOne({ email });
      if (!user) {
        return {
          status: false,
          statusCode: 404,
          message: 'User not found',
        };
      }
      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        return {
          status: false,
          statusCode: 401,
          message: 'Invalid email and passdword combination',
        };
      }

      const token = Token.getNew(user);
      return {
        status: true,
        statusCode: 200,
        token,
      };
    } catch (error) {
      throw new Error(error);
    }
  }
  async update(id, req) {
    try {
      const data = req.body;
      const img = await this.img.sendAvatar(req.files);
      const Preferences = { img };
      data.Preferences = Preferences;
      const opt = {
        new: true,
        upsert: true,
      };
      const user = await this.model.findByIdAndUpdate(id, data, opt);
      console.log('user', data);

      return {
        status: true,
        statusCode: 202,
        data: user,
      };
    } catch (error) {
      throw new Error(error);
    }
  }

  async remove(id) {
    try {
      let item = await this.model.findByIdAndDelete(id);
      if (!item)
        return {
          status: false,
          statusCode: 404,
          message: 'item not found',
        };

      console.log('removed item', item);

      if (item.path) {
        console.log('unlink item', item.path);
        fs.unlink(item.path, function (err) {
          if (err) {
            console.log('error deleting file');
            throw err;
          }
          console.log('File deleted!');
        });
      }

      return {
        status: true,
        deleted: true,
        statusCode: 202,
        item,
      };
    } catch (error) {
      throw new Error(errors);
    }
  }
}

export default UserService;
