import { gql } from '@apollo/client';

export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      username
      email
      pictures {
        id
        imageUrl
        title
      }
    }
  }
`;

export const GET_USER = gql`
  query GetUser($userId: ID!) {
    user(id: $userId) {
      id
      username
      email
      pictures {
        id
        imageUrl
        title
      }
    }
  }
`;

export const GET_PICTURES = gql`
query pictures {
  pictures {
    _id
    createdAt
    description
    imageUrl
    title
    username
  }
}
`;

export const GET_PICTURE = gql`
query Picture($id: ID!) {
  picture(_id: $id) {
    _id
    createdAt
    description
    imageUrl
    title
    username
  }
}
`;

export const GET_COMMENTS = gql`
  query GetComments($pictureId: ID!) {
    comments(pictureId: $pictureId) {
      id
      text
      user {
        id
        username
      }
      createdAt
    }
  }
`;
