import mongoose from 'mongoose';

const { Schema } = mongoose;

const CommentSchema = new Schema(
  {
    deletedCheck: String,
    comment_description: String,
    post_id: {
      type: Schema.Types.ObjectId,
      ref: 'Post',
    },
  },
  { timestamps: true },
);

const Comment = mongoose.model('Comment', CommentSchema);

export { Comment };
