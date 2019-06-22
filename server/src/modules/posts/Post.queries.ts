import { getRepository } from 'typeorm';
import { QueryResolvers } from '../../generated/types';
import Post from './Post';

const postQueries: QueryResolvers = {
  post: async (_, { id }) => {
    const postRepository = getRepository(Post);
    const post = await postRepository.findOne(id, { relations: ['user'] });

    if (!post) {
      throw new Error('投稿が見つかりませんでした。');
    }

    return post;
  },
  posts: async () => {
    const postRepository = getRepository(Post);
    const posts = await postRepository.find({ relations: ['user'] });

    return posts;
  },
};

export default postQueries;
