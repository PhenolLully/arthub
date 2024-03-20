const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const Picture = require('../models/Picture');
const Comment = require('../models/Comment');

const createToken = (user, secret, expiresIn) => {
  const { id, email, username } = user;
  return jwt.sign({ id, email, username }, secret, { expiresIn });
};

const resolvers = {
  Query: {
    users: async () => await User.find({}),
    user: async (_, { id }) => await User.findById(id),
    pictures: async () => await Picture.find({}).populate('user').populate('comments'),
    picture: async (_, { id }) => await Picture.findById(id).populate('user').populate('comments'),
  },
  Mutation: {
    addUser: async (_, { username, email, password }) => {
      const user = await User.findOne({ email });
      if (user) {
        throw new Error('User already exists');
      }
      const hashedPassword = await bcrypt.hash(password, 12);
      const newUser = new User({ username, email, password: hashedPassword });
      await newUser.save();
      return newUser;
    },
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error('User not found');
      }
      const isValidPassword = await bcrypt.compare(password, user.password);
      if (!isValidPassword) {
        throw new Error('Invalid password');
      }
      const token = createToken(user, process.env.JWT_SECRET, '1h');
      return { token, user };
    },
    addPicture: async (_, { userId, imageUrl, title, description }) => {
      const newPicture = new Picture({ user: userId, imageUrl, title, description });
      await newPicture.save();
      return newPicture.populate('user'); 
    },
    likePicture: async (_, { pictureId, userId }) => {
      const picture = await Picture.findById(pictureId);
      if (!picture.likes.includes(userId)) {
        picture.likes.push(userId);
        await picture.save();
      }
      return picture.populate('user').populate('comments');
    },
    addComment: async (_, { pictureId, userId, text }) => {
      const newComment = new Comment({ picture: pictureId, user: userId, text });
      await newComment.save();
      return newComment.populate('user').populate('picture');
    },
  },
};

module.exports = resolvers;
