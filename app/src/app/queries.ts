import gql from 'graphql-tag';

export const USERS = gql`
  query Users {
    users {
      id
      email
    }
  }
`;

export const USER = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      email
    }
  }
`;
