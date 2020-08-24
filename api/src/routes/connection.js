/*
 * Created on Sun Aug 23 2020
 *
 * Author: Jose Chavarría
 * Alias: Rafa
 * Github: @josechavarriacr
 */

import { Router } from 'express'

const routerConnection = Router()

routerConnection.route('/').get((req, res, next) => {
  return res.status(200).send({ status: true, message: 'conected!' })
})

export default routerConnection
