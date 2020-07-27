/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
function getErrors(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send({
    status: true,
    message: err,
  });
}

export default getErrors;
