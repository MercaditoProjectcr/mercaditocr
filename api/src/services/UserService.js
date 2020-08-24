/* eslint-disable no-underscore-dangle */
/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import UploadImg from './UploadImg'
import Service from './Service'

class UserService extends Service {
  constructor(model) {
    super(model)
    this.model = model
    this.img = new UploadImg()
  }

  async update(id, req) {
    try {
      const data = req.body
      const img = await this.img.sendAvatar(req.files)
      const Preferences = { img }
      data.Preferences = Preferences
      const opt = {
        new: true,
        upsert: true,
      }
      const user = await this.model.findByIdAndUpdate(id, data, opt)
      return {
        status: true,
        statusCode: 202,
        data: user,
      }
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default UserService
