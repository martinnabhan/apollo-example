import { gql } from 'apollo-server';

const schema = gql`
  type User {
    "ユーザのID。"
    id: ID!

    "ユーザのメール。"
    email: String!

    "ユーザの投稿。"
    posts: [Post]
  }

  extend type Query {
    "ユーザをIDで取得。"
    user(id: ID!): User!

    "全てのユーザを取得。"
    users: [User!]!
  }

  extend type Mutation {
    "ユーザの作成。"
    createUser(email: String!): User

    "ユーザの削除。"
    removeUser(id: ID!): User
  }
`;

export default schema;
