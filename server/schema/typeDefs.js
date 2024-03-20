const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    pictures: [Picture!]!
  }

  type Picture {
    id: ID!
    user: User!
    imageUrl: String!
    title: String
    description: String
    likes: [User!]!
    comments: [Comment!]!
    createdAt: String!
  }

  type Comment {
    id: ID!
    picture: Picture!
    user: User!
    text: String!
    createdAt: String!
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    pictures: [Picture!]!
    picture(id: ID!): Picture
    comments(pictureId: ID!): [Comment!]!
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): User!
    login(email: String!, password: String!): AuthPayload!
    addPicture(userId: ID!, imageUrl: String!, title: String, description: String): Picture!
    likePicture(pictureId: ID!, userId: ID!): Picture!
    addComment(pictureId: ID!, userId: ID!, text: String!): Comment!
  }
`;

module.exports = typeDefs;
