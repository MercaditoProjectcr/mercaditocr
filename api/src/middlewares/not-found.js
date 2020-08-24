/*
 * Created on Sun Aug 23 2020
 *
 * Author: Jose Chavarría
 * Alias: Rafa
 * Github: @josechavarriacr
 */

const notFound = (req, res) => {
  res.status(404).send({
    status: false,
    message: 'The route does not exists',
  })
}

export default notFound
