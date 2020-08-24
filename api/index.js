/* eslint-disable no-console */
/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import './config/database'
import config from './config/env'
import { app } from './config/server'

app.listen(config.port, () => {
  console.log(`app running on port ${config.port}`)
})
