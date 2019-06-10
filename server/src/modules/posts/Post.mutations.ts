import { MutationResolvers } from '../../generated/types';
import { getRepository } from 'typeorm';
import Post from './Post';
import { User } from '../users';

const postMutations: MutationResolvers = {
  createPost: async (parent, { userId, title, content }, context, info) => {
    const userRepository = getRepository(User);
    const postRepository = getRepository(Post);
    const user = await userRepository.findOne(userId);
    const post = new Post();

    if (!user) {
      throw new Error('User not found');
    }

    post.title = title;
    post.content = content;
    post.user = user;

    await postRepository.save(post);

    return post;
  },
  removePost: async (parent, { id }, context, info) => {
    const postRepository = getRepository(Post);
    const post = await postRepository.findOne(id);

    if (!post) {
      throw new Error('Post not found');
    }

    postRepository.delete(post);

    return post;
  },
};

export default postMutations;
