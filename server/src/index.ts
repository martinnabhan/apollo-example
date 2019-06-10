import { ApolloServer, gql } from 'apollo-server';
import { createDatabaseConnection } from './modules/database';
import { userSchema, userQueries, userMutations } from './modules/users';
import { Resolvers } from './generated/types';
import { postSchema, postQueries, postMutations } from './modules/posts';

const initialTypeDefs = gql`
  type Query {
    _empty: String
  }

  type Mutation {
    _empty: String
  }
`;

const typeDefs = [initialTypeDefs, userSchema, postSchema];

const resolvers: Resolvers = {
  Query: {
    ...userQueries,
    ...postQueries,
  },
  Mutation: {
    ...userMutations,
    ...postMutations,
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers: resolvers as any,
});


const start = async () => {
  await createDatabaseConnection();
  const { url } = await server.listen();

  console.log(`🚀 Server ready at ${url}`)
};

start();
