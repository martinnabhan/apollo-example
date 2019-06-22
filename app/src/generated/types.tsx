export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  /** 空のタイプをextendできないため */
  _empty?: Maybe<Scalars['String']>;
  /** 投稿の作成。 */
  createPost?: Maybe<Post>;
  /** 投稿の削除。 */
  removePost?: Maybe<Post>;
  /** ユーザの作成。 */
  createUser?: Maybe<User>;
  /** ユーザの削除。 */
  removeUser?: Maybe<User>;
};

export type MutationCreatePostArgs = {
  userId: Scalars['ID'];
  title: Scalars['String'];
  content: Scalars['String'];
};

export type MutationRemovePostArgs = {
  id: Scalars['ID'];
};

export type MutationCreateUserArgs = {
  email: Scalars['String'];
};

export type MutationRemoveUserArgs = {
  id: Scalars['ID'];
};

export type Post = {
  /** 投稿のID。 */
  id: Scalars['ID'];
  /** 投稿のタイトル。 */
  title: Scalars['String'];
  /** 投稿のコンテンツ。 */
  content: Scalars['String'];
  /** 投稿のユーザ。 */
  user: User;
};

export type Query = {
  /** 空のタイプをextendできないため */
  _empty?: Maybe<Scalars['String']>;
  /** 投稿をIDで取得。 */
  post: Post;
  /** 全ての投稿を取得。 */
  posts: Array<Post>;
  /** ユーザをIDで取得。 */
  user: User;
  /** 全てのユーザを取得。 */
  users: Array<User>;
};

export type QueryPostArgs = {
  id: Scalars['ID'];
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type User = {
  /** ユーザのID。 */
  id: Scalars['ID'];
  /** ユーザのメール。 */
  email: Scalars['String'];
  /** ユーザの投稿。 */
  posts?: Maybe<Array<Maybe<Post>>>;
};
export type UsersQueryVariables = {};

export type UsersQuery = { __typename?: 'Query' } & {
  users: Array<{ __typename?: 'User' } & Pick<User, 'id' | 'email'>>;
};

export type UserQueryVariables = {
  id: Scalars['ID'];
};

export type UserQuery = { __typename?: 'Query' } & {
  user: { __typename?: 'User' } & Pick<User, 'id' | 'email'>;
};

import gql from 'graphql-tag';
import * as ReactApollo from 'react-apollo';
import * as ReactApolloHooks from 'react-apollo-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export const UsersDocument = gql`
  query Users {
    users {
      id
      email
    }
  }
`;

export function useUsersQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<UsersQueryVariables>,
) {
  return ReactApolloHooks.useQuery<UsersQuery, UsersQueryVariables>(
    UsersDocument,
    baseOptions,
  );
}
export const UserDocument = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      email
    }
  }
`;

export function useUserQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<UserQueryVariables>,
) {
  return ReactApolloHooks.useQuery<UserQuery, UserQueryVariables>(
    UserDocument,
    baseOptions,
  );
}
