/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import jwt from 'jsonwebtoken'
import config from '../../config/env'

function getNew(user) {
    return jwt.sign({ id: user.id }, config.secrets.jwt, {
        expiresIn: config.secrets.jwtExp
    })
}
function verify(token) {
    new Promise((resolve, reject) => {
        jwt.verify(token, config.secrets.jwt, (err, payload) => {
            if (err) return reject(err)
            resolve(payload)
        })
    })
}

const Token = { getNew, verify }
export default Token