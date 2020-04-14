import mongoose from 'mongoose';
import User from '../models/User';
const { mongo } = mongoose;
const { ObjectId } = mongo;

class UserService {
  constructor() {
    this.model = new User().getInstance();
    this.findAll = this.findAll.bind(this);
    this.signUp = this.signUp.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
    this.findOne = this.findOne.bind(this);
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
        .skip(skip)
        .limit(limit);
      const total = await this.model.count();

      return {
        error: false,
        statusCode: 200,
        data: items,
        total
      };
    } catch (error) {
      throw new Error(error);
    }
  }

  async findOne(id) {
    try {
      const _id = new ObjectId(id)
      const item = await this.model.findOne({_id});
      return {
        error: false,
        statusCode: 200,
        item
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
          error: false,
          statusCode: 201,
          item
        };
    } catch (error) {
      throw new Error(error);
    }
  }

  async signUp(data) {
    try {
      const { Roles } = data;
      const Preferences = {
        img: '/home/img',
        location: 'Yor currect location'
      }
      if(!Roles) {
        data.Roles = {
          type: "user" // user, owner, client
        }
      }
      const newUser = {
        ...data, Preferences
      }
      const user = await this.model.create(newUser);
      if (user)
        return {
          error: false,
          statusCode: 201,
          user
        };
    } catch (error) {
      throw new Error(error);
    }
  }

  async signIn(params) {
    try {
     const user = await this.findAll(params);
     const { data } = user;
     if(data.length > 0) {
      return {
        error: false,
        statusCode: 200,
        user: data[0]
      };
     } else {
      return {
        error: true,
        statusCode: 404,
        message: 'User not found'
      };
     }
    } catch (error) {
      throw new Error(error);
    }
  }
  async update(id, data) {
    try {
      const user = await this.model.findByIdAndUpdate(id, data, { new: true });
      return {
        error: false,
        statusCode: 202,
        user
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
          error: true,
          statusCode: 404,
          message: "item not found"
        };

      console.log("removed item", item);

      if (item.path) {
        console.log("unlink item", item.path);
        fs.unlink(item.path, function(err) {
          if (err) {
            console.log("error deleting file");
            throw err;
          }
          console.log("File deleted!");
        });
      }

      return {
        error: false,
        deleted: true,
        statusCode: 202,
        item
      };
    } catch (error) {
      throw new Error(errors);
    }
  }
}

export default UserService;
