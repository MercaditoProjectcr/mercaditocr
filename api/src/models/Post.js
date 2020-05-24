/*
 * Created on Sun May 24 2020
 *
 * Author: Jose Chavarría
 * Github: @josechavarriacr
 */
import mongoose, { Schema } from "mongoose";
import uniqueValidator from "mongoose-unique-validator";
import slugify from 'slugify';

const dto = {
  title: {
    type: String,
    required: true,
  },
  slug: String,
  subtitle: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: true,
  },
  contacts: {
    name: {
      type: String,
    required: false
    },
    num: {
      type: Number,
      required: false
    }
  }
}
class Post {

  initSchema() {
    const schema = new Schema(dto, { timestamps: true });
    schema.pre(
      "save",
      function(next) {
        let post = this;
        if (!post.isModified("title")) {
          return next();
        }
        post.slug = slugify(post.title, "_");
        console.log('set slug', post.slug);
        return next();
      },
      function(err) {
        next(err);
      }
    );
    schema.plugin(uniqueValidator);
    mongoose.model("posts", schema);
  }

  getInstance() {
    this.initSchema();
    return mongoose.model("posts");
  }
}

export default Post;
