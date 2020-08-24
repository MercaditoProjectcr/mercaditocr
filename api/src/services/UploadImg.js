/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
class UploadImg {
  async sendAvatar(file) {
    try {
      const cdn = process.env.URL_CDN || 'http://localhost:5000'
      if (!file) throw new Error('Files are missing')
      if (Object.keys(file).length > 1)
        throw new Error('Only accept One file for avatar')
      const path = `../public/profiles/${file.avatar.name}`
      file.avatar.mv(path)
      const cleanPath = path.replace('../', '')
      return `${cdn}/${cleanPath}`
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default UploadImg
