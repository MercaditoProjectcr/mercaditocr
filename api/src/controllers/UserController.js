import UserService from  "./../services/UserService";

class UserController {
  constructor() {
    this.service = new UserService();
    this.findAll = this.findAll.bind(this);
    this.findOne = this.findOne.bind(this);
    this.singIn = this.singIn.bind(this);
    this.singUp = this.singUp.bind(this);
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
    console.log('req', req);
    try {
      let response = await this.service.findAll(req.params);
      return res.status(response.statusCode).send(response);
    } catch (error) {
      next(error.message);
    }
  }

  async singUp(req, res, next) {
   try {
    const data = await this.service.signUp(req.body)
    return res.status(200).send({
      message: 'success',
      data
    });
   } catch (error) {
     next(error.message)
   }
  }

  async singIn(req, res, next) {
    const { email, password } = req.body;
    const params = { email, password };
    try {
      const response = await this.service.signIn(params);
      return res.status(response.statusCode).send(response);
   } catch (error) {
     next(error.message)
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

export default new UserController;
