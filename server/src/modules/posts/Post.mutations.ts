import { getRepository } from 'typeorm';
import { MutationResolvers } from '../../generated/types';
import Post from './Post';
import { User } from '../users';

const postMutations: MutationResolvers = {
  createPost: async (_, { userId, title, content }) => {
    const userRepository = getRepository(User);
    const postRepository = getRepository(Post);
    const user = await userRepository.findOne(userId);
    const post = new Post();

    if (!user) {
      throw new Error('ユーザが見つかりませんでした。');
    }

    post.title = title;
    post.content = content;
    post.user = user;

    await postRepository.save(post);

    return post;
  },
  removePost: async (_, { id }) => {
    const postRepository = getRepository(Post);
    const post = await postRepository.findOne(id);

    if (!post) {
      throw new Error('投稿が見つかりませんでした。');
    }

    postRepository.delete(post);

    return post;
  },
};

export default postMutations;
