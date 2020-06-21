/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */

import '../config/database';
import app from '../config/server';
import config from '../config/env';
import supertest from 'supertest';
const request = supertest(app)

describe('Test #1', () => {
    test('endpoint /api', async done => {
        const response = await request.get('/api')
      
        expect(response.status).toBe(200)
        expect(response.body.status).toBe(true)
        done()
      })
})