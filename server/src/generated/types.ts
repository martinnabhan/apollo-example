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

import { GraphQLResolveInfo } from 'graphql';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
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
  info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
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
  info: GraphQLResolveInfo,
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: {};
  String: Scalars['String'];
  ID: Scalars['ID'];
  Post: Post;
  User: User;
  Mutation: {};
  Boolean: Scalars['Boolean'];
}>;

export type MutationResolvers<
  ContextType = any,
  ParentType = ResolversTypes['Mutation']
> = ResolversObject<{
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createPost?: Resolver<
    Maybe<ResolversTypes['Post']>,
    ParentType,
    ContextType,
    MutationCreatePostArgs
  >;
  removePost?: Resolver<
    Maybe<ResolversTypes['Post']>,
    ParentType,
    ContextType,
    MutationRemovePostArgs
  >;
  createUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    MutationCreateUserArgs
  >;
  removeUser?: Resolver<
    Maybe<ResolversTypes['User']>,
    ParentType,
    ContextType,
    MutationRemoveUserArgs
  >;
}>;

export type PostResolvers<
  ContextType = any,
  ParentType = ResolversTypes['Post']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  content?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
}>;

export type QueryResolvers<
  ContextType = any,
  ParentType = ResolversTypes['Query']
> = ResolversObject<{
  _empty?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  post?: Resolver<ResolversTypes['Post'], ParentType, ContextType, QueryPostArgs>;
  posts?: Resolver<Array<ResolversTypes['Post']>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes['User'], ParentType, ContextType, QueryUserArgs>;
  users?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
}>;

export type UserResolvers<
  ContextType = any,
  ParentType = ResolversTypes['User']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  posts?: Resolver<
    Maybe<Array<Maybe<ResolversTypes['Post']>>>,
    ParentType,
    ContextType
  >;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Mutation?: MutationResolvers<ContextType>;
  Post?: PostResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;
