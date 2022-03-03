import { Post } from '../db/schema/posts.js';

export const getActivePostsWithActiveComments = async () => {
  const dbPosts = await Post.aggregate([
    {
      $match: {
        deletedCheck: false,
      },
    },
    {
      $lookup: {
        from: 'comments',
        as: 'all_comments',
        let: { post_id: '$_id', postDeletedCheck: '$deletedCheck' },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ['$$post_id', '$postID'] },
                  { $eq: ['$deletedCheck', false] },
                ],
              },
            },
          },
        ],
      },
    },
  ]);

  return dbPosts || [];
};
