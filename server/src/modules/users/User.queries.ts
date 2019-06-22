import { getRepository } from 'typeorm';
import User from './User';
import { QueryResolvers } from '../../generated/types';

const userQueries: QueryResolvers = {
  user: async (_, { id }) => {
    const userRepository = getRepository(User);
    const user = await userRepository.findOne(id);

    if (!user) {
      throw new Error('ユーザが見つかりませんでした。');
    }

    return user;
  },
  users: async () => {
    const userRepository = getRepository(User);
    const users = await userRepository.find();

    return users;
  },
};

export default userQueries;
