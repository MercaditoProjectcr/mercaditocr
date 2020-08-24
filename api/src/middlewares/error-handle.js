/* eslint-disable no-console */
/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
const getErrors = (err, req, res, next) => {
  console.error(err)
  res.status(500).send({
    status: false,
    message: err,
  })
}

export default getErrors
