const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    posts: [Picture]
  }

  type Picture {
    _id: ID!
    imageUrl: String!
    title: String
    description: String
    comments: [Comment]
    createdAt: String
    username: String
  }

  type Comment {
    commentId: ID
    user: String
    text: String
    createdAt: String
  }


  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user: User
    pictures: [Picture]
    picture(_id: ID!): Picture
    comments(pictureId: ID!): [Comment]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPicture(imageUrl: String!, title: String, description: String): User
    likePicture(pictureId: ID!, userId: ID!): Picture!
    addComment(text: String!): Comment!
  }
`;

module.exports = typeDefs;
