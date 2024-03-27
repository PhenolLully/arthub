const User = require('../models/User');
const Picture = require('../models/Picture');
const Comment = require('../models/Comment');
const { signToken, AuthenticationError } = require('../utils/auth');


const resolvers = {
  Query: {
    users: async () => await User.find({}),
    user: async (_, args, context) => {
      if (context.user){
        const userData = await User.findOne(
          { _id: context.user._id}
        )
        return userData
      }
    },
    pictures: async () => await Picture.find({}).populate('user').populate('comments'),
    picture: async (_, { id }) => await Picture.findById(id).populate('user').populate('comments'),
  },
  Mutation: {
    addUser: async (_, args) => {
      const user = await User.create(args)
      const token =signToken(user)
      return {token, user}

    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
          throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
          throw AuthenticationError;
      }

      const token = signToken(user);

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
