/*
 * Created on Wed Jun 03 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import express from 'express'
// eslint-disable-next-line import/no-unresolved
import bodyParser, { urlencoded } from 'body-parser'
import cors from 'cors'
import morgan from 'morgan'
import fileUpload from 'express-fileupload'
import fs from 'fs'
import path from 'path'
import setRoutes from './routes'

export const app = express()

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(
  path.resolve(__dirname, '../access.log'),
  { flags: 'a' }
)
// setup the logger
app.use(morgan('combined', { stream: accessLogStream }))
app.use(morgan('dev'))

// enable files upload
app.use(
  fileUpload({
    createParentPath: true,
  })
)
app.use('/public', express.static('../public'))

app.disable('x-powered-by')
app.use(bodyParser.json())
app.use(cors())
app.use(urlencoded({ extended: true }))
app.use('/api', setRoutes)

export default app
