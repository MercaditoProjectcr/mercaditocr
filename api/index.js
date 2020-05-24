/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import './config/database';
import app from './config/server';
import config from './config/env';

app.listen(config.port, () => {
  console.log(`app running on port ${config.port}`);
});