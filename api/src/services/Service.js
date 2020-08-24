/* eslint-disable no-underscore-dangle */
/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import mongoose from 'mongoose'
import fs from 'fs'

const { mongo } = mongoose
const { ObjectId } = mongo

class Service {
  constructor(model) {
    this.model = model
    this.findAll = this.findAll.bind(this)
    this.create = this.create.bind(this)
    this.update = this.update.bind(this)
    this.remove = this.remove.bind(this)
    this.findOne = this.findOne.bind(this)
  }

  async findAll(query) {
    try {
      let { skip, limit } = query

      skip = skip ? Number(skip) : 0
      limit = limit ? Number(limit) : 10

      delete query.skip
      delete query.limit

      if (query._id) {
        query._id = new ObjectId(query._id)
      }

      const items = await this.model
        .find(query)
        .select('-password')
        .skip(skip)
        .limit(limit)
      const total = await this.model.countDocuments()

      return {
        status: true,
        statusCode: 200,
        data: items,
        total,
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  async findOne(id) {
    try {
      const _id = new ObjectId(id)
      const item = await this.model.findOne({ _id }).select('-password')
      return {
        status: true,
        statusCode: 200,
        item,
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  async create(data) {
    try {
      const item = await this.model.create(data)
      return {
        status: true,
        statusCode: 201,
        item,
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  async update(id, data) {
    try {
      const item = await this.model.findByIdAndUpdate(id, data, { new: true })
      return {
        status: true,
        statusCode: 202,
        item,
      }
    } catch (error) {
      throw new Error(error)
    }
  }

  async remove(id) {
    try {
      const item = await this.model.findByIdAndDelete(id)
      if (!item)
        return {
          status: false,
          statusCode: 404,
          message: 'item not found',
        }

      if (item.path) {
        // eslint-disable-next-line func-names
        fs.unlink(item.path, (err) => {
          if (err) {
            throw err
          }
        })
      }

      return {
        status: true,
        deleted: true,
        statusCode: 202,
        item,
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default Service
