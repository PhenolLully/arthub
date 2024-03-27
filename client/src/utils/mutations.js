import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
  addUser(username: $username, email: $email, password: $password) {
    token
    user {
      id
      email
      username
    }
  }
}
`;

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      id
      email
      username
    }
  }
}
`;

export const ADD_PICTURE = gql`
  mutation AddPicture($userId: ID!, $imageUrl: String!, $title: String, $description: String) {
    addPicture(userId: $userId, imageUrl: $imageUrl, title: $title, description: $description) {
      id
      imageUrl
      title
      description
    }
  }
`;

export const LIKE_PICTURE = gql`
  mutation LikePicture($pictureId: ID!, $userId: ID!) {
    likePicture(pictureId: $pictureId, userId: $userId) {
      id
      imageUrl
      likes {
        id
        username
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation AddComment($pictureId: ID!, $userId: ID!, $text: String!) {
    addComment(pictureId: $pictureId, userId: $userId, text: $text) {
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
