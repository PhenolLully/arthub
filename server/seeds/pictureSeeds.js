const mongoose = require('mongoose');
const User = require('../models/User');
const Picture = require('../models/Picture');
const connectDB = require('../config/db');

const picturesData = [
  {
    username: 'Brandon', 
    imageUrl: 'https://img.freepik.com/free-photo/sunset-time-tropical-beach-sea-with-coconut-palm-tree_74190-1075.jpg?w=1380&t=st=1710971826~exp=1710972426~hmac=b4fb45257fa33503e95cccefe025053ea878356cc7107e35cb7195bd050a12a1',
    title: 'Sunset',
    description: 'Beautiful sunset at the beach',
  },
];

const seedPictures = async () => {
  await connectDB();

  const picturesWithUserIds = await Promise.all(picturesData.map(async (picture) => {
    const user = await User.findOne({ username: picture.username });
    if (!user) {
      console.error(`User ${picture.username} not found.`);
      return null;
    }
    return {
      user: user._id,
      imageUrl: picture.imageUrl,
      title: picture.title,
      description: picture.description,
      
    };
  }).filter(Boolean)); 

  await Picture.deleteMany({});
  await Picture.insertMany(picturesWithUserIds);

  console.log('Pictures seeded successfully.');
  mongoose.disconnect();
};

seedPictures().catch(err => {
  console.error('Failed to seed pictures:', err);
  process.exit(1);
});
