import { getRepository } from 'typeorm';
import User from './User';
import { MutationResolvers } from '../../generated/types';

const userMutations: MutationResolvers = {
  createUser: async (_, { email }) => {
    const userRepository = getRepository(User);
    const user = new User();

    user.email = email;

    await userRepository.save(user);

    return user;
  },
  removeUser: async (_, { id }) => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(id);

    if (!user) {
      throw new Error('ユーザが見つかりませんでした。');
    }

    userRepository.delete(user);

    return user;
  },
};

export default userMutations;
