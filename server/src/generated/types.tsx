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
  _empty?: Maybe<Scalars["String"]>;
  /** Create a post. */
  createPost?: Maybe<Post>;
  /** Remove a post. */
  removePost?: Maybe<Post>;
  /** Create a user. */
  createUser?: Maybe<User>;
  /** Remove a user. */
  removeUser?: Maybe<User>;
};

export type MutationCreatePostArgs = {
  userId: Scalars["ID"];
  title: Scalars["String"];
  content: Scalars["String"];
};

export type MutationRemovePostArgs = {
  id: Scalars["ID"];
};

export type MutationCreateUserArgs = {
  email: Scalars["String"];
};

export type MutationRemoveUserArgs = {
  id: Scalars["ID"];
};

export type Post = {
  /** 投稿のID。 */
  id: Scalars["ID"];
  /** 投稿のタイトル。 */
  title: Scalars["String"];
  /** 投稿のコンテンツ。 */
  content: Scalars["String"];
  /** The posts' user. */
  user: User;
};

export type Query = {
  /** 空のタイプをextendできないため */
  _empty?: Maybe<Scalars["String"]>;
  /** Get a post by ID. */
  post: Post;
  /** Get all posts. */
  posts: Array<Post>;
  /** Get a user by ID. */
  user: User;
  /** Get all users. */
  users: Array<User>;
};

export type QueryPostArgs = {
  id: Scalars["ID"];
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type User = {
  /** The user's id. */
  id: Scalars["ID"];
  /** The user's email. */
  email: Scalars["String"];
  /** The user's posts. */
  posts?: Maybe<Array<Maybe<Post>>>;
};
