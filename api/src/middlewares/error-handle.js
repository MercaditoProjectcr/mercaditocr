/* eslint-disable no-console */
/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
const getErrors = (err, res) => {
  console.error(err.stack)
  res.status(500).send({
    status: true,
    message: err,
  })
}

export default getErrors
