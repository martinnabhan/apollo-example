import { gql } from 'apollo-server';

const schema = gql`
  type Post {
    "投稿のID。"
    id: ID!

    "投稿のタイトル。"
    title: String!

    "投稿のコンテンツ。"
    content: String!

    "投稿のユーザ。"
    user: User!
  }

  extend type Query {
    "投稿をIDで取得。"
    post(id: ID!): Post!

    "全ての投稿を取得。"
    posts: [Post!]!
  }

  extend type Mutation {
    "投稿の作成。"
    createPost(userId: ID!, title: String!, content: String!): Post

    "投稿の削除。"
    removePost(id: ID!): Post
  }
`;

export default schema;
