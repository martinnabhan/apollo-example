import { gql } from 'apollo-server';

const schema = gql`
  type Post {
    "The posts' id."
    id: ID!

    "The posts' title."
    title: String!

    "The posts' content."
    content: String!

    "The posts' user."
    user: User!
  }

  extend type Query {
    "Get a post by ID."
    post(id: ID!): Post!

    "Get all posts."
    posts: [Post!]!
  }

  extend type Mutation {
    "Create a post."
    createPost(userId: ID!, title: String!, content: String!): Post

    "Remove a post."
    removePost(id: ID!): Post
  }
`;

export default schema;
