const express = require('express');
const connectDB = require('./config/db');
const { ApolloServer } = require('apollo-server-express');
const cloudinary = require('cloudinary').v2;
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');

require('dotenv').config();

// cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET
});

// For Cloudinairy:
app.get("/", (request, response) => {
  response.json({ message: "Hey! This is your server response!" });
});

// Handle file upload
app.post('/upload', upload.single('file'), (req, res) => {
  // Upload the file to Cloudinary
  cloudinary.uploader.upload_stream(
    { resource_type: 'auto' },
    (error, result) => {
      if (error) {
        return res.status(500).json({ error: 'Error uploading file to Cloudinary' });
      }
      // The result object contains information about the uploaded file
      const imageUrl = result.secure_url;
      res.json({ imageUrl });
    }
  ).end(req.file.buffer);
});

// image upload API
app.post("/image-upload", (request, response) => {
  // collected image from a user
  const data = {
    image: request.body.image,
  }

  // upload image here
  cloudinary.uploader.upload(data.image)
  .then((result) => {
    response.status(200).send({
      message: "success",
      result,
    });
  }).catch((error) => {
    response.status(500).send({
      message: "failure",
      error,
    });
  });
});

connectDB();

const startApolloServer = async () => {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 3001;
  await new Promise(resolve => app.listen({ port: PORT }, resolve));
  console.log(`Server ready at http://localhost:${PORT}${server.graphqlPath}`);
  return { server, app };
};

startApolloServer();
