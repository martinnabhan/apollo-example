
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
  /** The `Upload` scalar type represents a file upload. */
  Upload: any,
};


export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Mutation = {
  _empty?: Maybe<Scalars['String']>,
  /** Create a user. */
  createUser?: Maybe<User>,
  /** Remove a user. */
  removeUser?: Maybe<User>,
  /** Create a post. */
  createPost?: Maybe<Post>,
  /** Remove a post. */
  removePost?: Maybe<Post>,
};


export type MutationCreateUserArgs = {
  email: Scalars['String']
};


export type MutationRemoveUserArgs = {
  id: Scalars['ID']
};


export type MutationCreatePostArgs = {
  userId: Scalars['ID'],
  title: Scalars['String'],
  content: Scalars['String']
};


export type MutationRemovePostArgs = {
  id: Scalars['ID']
};

export type Post = {
  /** The posts' id. */
  id: Scalars['ID'],
  /** The posts' title. */
  title: Scalars['String'],
  /** The posts' content. */
  content: Scalars['String'],
  /** The posts' user. */
  user: User,
};

export type Query = {
  _empty?: Maybe<Scalars['String']>,
  /** Get a user by ID. */
  user: User,
  /** Get all users. */
  users: Array<User>,
  /** Get a post by ID. */
  post: Post,
  /** Get all posts. */
  posts: Array<Post>,
};


export type QueryUserArgs = {
  id: Scalars['ID']
};


export type QueryPostArgs = {
  id: Scalars['ID']
};


export type User = {
  /** The user's id. */
  id: Scalars['ID'],
  /** The user's email. */
  email: Scalars['String'],
  /** The user's posts. */
  posts?: Maybe<Array<Maybe<Post>>>,
};
export type UsersQueryVariables = {};


export type UsersQuery = ({ __typename?: 'Query' } & { users: Array<({ __typename?: 'User' } & Pick<User, 'id' | 'email'>)> });

export type UserQueryVariables = {
  id: Scalars['ID']
};


export type UserQuery = ({ __typename?: 'Query' } & { user: ({ __typename?: 'User' } & Pick<User, 'id' | 'email'>) });

import gql from 'graphql-tag';
import * as ReactApollo from 'react-apollo';
import * as ReactApolloHooks from 'react-apollo-hooks';
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>

export const UsersDocument = gql`
    query Users {
  users {
    id
    email
  }
}
    `;

export function useUsersQuery(baseOptions?: ReactApolloHooks.QueryHookOptions<UsersQueryVariables>) {
  return ReactApolloHooks.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, baseOptions);
};
export const UserDocument = gql`
    query User($id: ID!) {
  user(id: $id) {
    id
    email
  }
}
    `;

export function useUserQuery(baseOptions?: ReactApolloHooks.QueryHookOptions<UserQueryVariables>) {
  return ReactApolloHooks.useQuery<UserQuery, UserQueryVariables>(UserDocument, baseOptions);
};