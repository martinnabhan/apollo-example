import { getRepository } from 'typeorm';
import User from './User';
import { MutationResolvers } from '../../generated/types';

const userMutations: MutationResolvers = {
  createUser: async (parent, { email }, context, info) => {
    const userRepository = getRepository(User);
    const user = new User();

    user.email = email;

    await userRepository.save(user);

    return user;
  },
  removeUser: async (parent, { id }, context, info) => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(id);

    if (!user) {
      throw new Error('User not found');
    }

    userRepository.delete(user);

    return user;
  },
};

export default userMutations;
