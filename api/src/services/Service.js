/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import mongoose from "mongoose";
const { mongo } = mongoose;
const { ObjectId } = mongo;

class Service {
  constructor(model) {
    this.model = model;
    this.findAll = this.findAll.bind(this);
    this.create = this.create.bind(this);
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
        console.log("not able to generate mongoose id with content", query._id);
      }
    }

    try {
      const items = await this.model
        .find(query)
        .skip(skip)
        .limit(limit);
      const total = await this.model.count();

      return {
        status: true,
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
      let item = await this.model.findOne({_id});
      return {
        status: true,
        statusCode: 200,
        item
      };
    } catch (error) {
      throw new Error(error);
    }
  }
  async create(data) {
    try {
      let item = await this.model.create(data);
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

  async update(id, data) {
    try {
      let item = await this.model.findByIdAndUpdate(id, data, { new: true });
      return {
        status: true,
        statusCode: 202,
        item
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
        status: true,
        deleted: true,
        statusCode: 202,
        item
      };
    } catch (error) {
      throw new Error(errors);
    }
  }
}

export default Service;
