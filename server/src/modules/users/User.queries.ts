import { getRepository } from 'typeorm';
import User from './User';
import { QueryResolvers } from '../../generated/types';

const userQueries: QueryResolvers = {
  user: async (parent, { id }, context, info) => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(id);
    
    if (!user) {
      throw new Error('User not found');
    }

    return user;
  },
  users: async (parent, args, context, info) => {
    const userRepository = getRepository(User);
    const users = await userRepository.find();

    return users;
  },
};

export default userQueries;
