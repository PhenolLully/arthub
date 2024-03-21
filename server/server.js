const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');
const connectDB = require('./config/db');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const bodyParser = require('body-parser'); 

require('dotenv').config();

cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.API_KEY, 
  api_secret: process.env.API_SECRET 
});

connectDB();

const upload = multer({ dest: 'uploads/' });

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded; 
    } catch (error) {
      console.error('Token verification error:', error);
    }
  }
  next();
});

const startApolloServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers, context: ({ req }) => ({ user: req.user }) });
  await server.start();
  server.applyMiddleware({ app });

  app.post('/api/images', upload.single('image'), async (req, res) => {
    if (!req.user) return res.status(401).json({ message: 'Unauthorized' });

    try {
      const result = await cloudinary.uploader.upload(req.file.path);
      const imageUrl = result.secure_url;

      console.log(`User ${req.user.id} uploaded image: ${imageUrl}`);

      res.json({ message: 'Image uploaded successfully', imageUrl });
    } catch (error) {
      console.error('Image upload error:', error);
      res.status(500).json({ message: 'Failed to upload image' });
    }
  });

  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`));
};

startApolloServer();
