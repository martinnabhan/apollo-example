import { QueryResolvers } from '../../generated/types';
import { getRepository } from 'typeorm';
import Post from './Post';

const postQueries: QueryResolvers = {
  post: async (parent, { id }, context, info) => {
    const postRepository = getRepository(Post);
    const post = await postRepository.findOne(id, { relations: ['user'] });

    if (!post) {
      throw new Error('Post not found');
    }

    return post;
  },
  posts: async (parent, args, context, info) => {
    const postRepository = getRepository(Post);
    const posts = await postRepository.find({ relations: ['user'] });

    return posts;
  },
};

export default postQueries;
