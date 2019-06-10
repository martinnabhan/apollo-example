import { gql } from 'apollo-server';

const schema = gql`
  type User {
    "The user's id."
    id: ID!

    "The user's email."
    email: String!

    "The user's posts."
    posts: [Post]
  }

  extend type Query {
    "Get a user by ID."
    user(id: ID!): User!

    "Get all users."
    users: [User!]!
  }

  extend type Mutation {
    "Create a user."
    createUser(email: String!): User

    "Remove a user."
    removeUser(id: ID!): User
  }
`;

export default schema;
