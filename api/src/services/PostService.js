/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import Service from './Service';

class PostService extends Service {
  constructor(model) {
    super(model);
  }

  async getData() {
    // logic
    return {
      name: 'asd',
      lastNmae: 'ksbkjds'
    }
  }
};

export default PostService;
