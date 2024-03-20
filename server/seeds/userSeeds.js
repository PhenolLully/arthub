const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const connectDB = require('../config/db'); 

const users = [
  { username: 'Brandon', email: 'brandon@mail.com', password: 'password123' },
];

const seedUsers = async () => {
  await connectDB(); 

  const hashedUsers = await Promise.all(users.map(async (user) => ({
    ...user,
    password: await bcrypt.hash(user.password, 12),
  })));

  await User.deleteMany({});
  await User.insertMany(hashedUsers);

  console.log('Users seeded successfully.');
  mongoose.disconnect();
};

seedUsers().catch(err => {
  console.error('Failed to seed users:', err);
  process.exit(1);
});
