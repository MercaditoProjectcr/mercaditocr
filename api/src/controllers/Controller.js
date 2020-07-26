/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
class Controller {
  constructor(service) {
    this.service = service;
    this.findAll = this.findAll.bind(this);
    this.findOne = this.findOne.bind(this);
    this.create = this.create.bind(this);
    this.update = this.update.bind(this);
    this.remove = this.remove.bind(this);
  }

  async findOne(req, res, next) {
    try {
      const { id } = req.params;
      const response = await this.service.findOne(id);
      return res.status(response.statusCode).send(response);
    } catch (error) {
      next(error.message);
    }
  }

  async findAll(req, res, next) {
    try {
      let response = await this.service.findAll(req.params);
      return res.status(response.statusCode).send(response);
    } catch (error) {
      next(error.message);
    }
  }

  async create(req, res, next) {
    try {
      const response = await this.service.create(req.body);
      return res.status(response.statusCode).send(response);
    } catch (error) {
      next(error.message);
    }
  }

  async update(req, res, next) {
    try {
      const { id } = req.params;
      const response = await this.service.update(id, req.body);
      return res.status(response.statusCode).send(response);
    } catch (error) {
      next(error.message);
    }
  }

  async remove(req, res, next) {
    try {
      const { id } = req.params;
      const response = await this.service.remove(id);
      return res.status(response.statusCode).send(response);
    } catch (error) {
      next(error.message);
    }
  }
}

export default Controller;
