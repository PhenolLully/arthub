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
  query GetPictures {
    pictures {
      id
      imageUrl
      title
      description
      likes {
        id
        username
      }
      comments {
        id
        text
      }
      createdAt
    }
  }
`;

export const GET_PICTURE = gql`
  query GetPicture($pictureId: ID!) {
    picture(id: $pictureId) {
      id
      imageUrl
      title
      description
      likes {
        id
        username
      }
      comments {
        id
        text
        user {
          id
          username
        }
        createdAt
      }
      createdAt
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
