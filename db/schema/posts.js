import mongoose from 'mongoose';

const { Schema } = mongoose;

const PostSchema = new Schema(
  {
    deletedCheck: String,
    post_description: String,
  },
  { timestamps: true },
);

const Post = mongoose.model('Post', PostSchema);

export { Post };
