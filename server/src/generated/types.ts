
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

import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>



export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;


export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: {},
  String: Scalars['String'],
  ID: Scalars['ID'],
  User: User,
  Post: Post,
  Mutation: {},
  Boolean: Scalars['Boolean'],
  CacheControlScope: CacheControlScope,
  Upload: Scalars['Upload'],
  Int: Scalars['Int'],
};

export type CacheControlDirectiveResolver<Result, Parent, ContextType = any, Args = {   maxAge?: Maybe<Maybe<Scalars['Int']>>,
  scope?: Maybe<Maybe<CacheControlScope>> }> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type MutationResolvers<ContextType = any, ParentType = ResolversTypes['Mutation']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  createUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, MutationCreateUserArgs>,
  removeUser?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, MutationRemoveUserArgs>,
  createPost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, MutationCreatePostArgs>,
  removePost?: Resolver<Maybe<ResolversTypes['Post']>, ParentType, ContextType, MutationRemovePostArgs>,
};

export type PostResolvers<ContextType = any, ParentType = ResolversTypes['Post']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>,
};

export type QueryResolvers<ContextType = any, ParentType = ResolversTypes['Query']> = {
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>,
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType, QueryUserArgs>,
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>,
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType, QueryPostArgs>,
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>,
};

export interface UploadScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Upload'], any> {
  name: 'Upload'
}

export type UserResolvers<ContextType = any, ParentType = ResolversTypes['User']> = {
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>,
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>,
  posts?: Resolver<Maybe<Array<Maybe<ResolversTypes['Post']>>>, ParentType, ContextType>,
};

export type Resolvers<ContextType = any> = {
  Mutation?: MutationResolvers<ContextType>,
  Post?: PostResolvers<ContextType>,
  Query?: QueryResolvers<ContextType>,
  Upload?: GraphQLScalarType,
  User?: UserResolvers<ContextType>,
};


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
*/
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = any> = {
  cacheControl?: CacheControlDirectiveResolver<any, any, ContextType>,
};


/**
* @deprecated
* Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
*/
export type IDirectiveResolvers<ContextType = any> = DirectiveResolvers<ContextType>;