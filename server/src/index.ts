import { ApolloServer, gql } from 'apollo-server';
import { createDatabaseConnection } from './modules/database';
import { userSchema, userQueries, userMutations } from './modules/users';
import { Resolvers } from './generated/types';
import { postSchema, postQueries, postMutations } from './modules/posts';

const initialSchema = gql`
  type Query {
    "空のタイプをextendできないため"
    _empty: String
  }

  type Mutation {
    "空のタイプをextendできないため"
    _empty: String
  }
`;

const typeDefs = [initialSchema, userSchema, postSchema];

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
  resolvers,
});

const start = async () => {
  await createDatabaseConnection();
  const { url } = await server.listen();

  console.log(`🚀 Server ready at ${url}`);
};

start();
