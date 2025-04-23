import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/User.js';

// Load env vars
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected...'))
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  });

const updateAdmin = async () => {
  try {
    // First try to find existing admin
    let admin = await User.findOne({ role: 'admin' });

    if (admin) {
      // Update existing admin
      admin.email = 'admin@studymate.com';
      admin.password = 'admin123';
      admin.fullName = 'Admin User';
      admin.username = 'admin';
      
      await admin.save();
      console.log('Admin user updated successfully');
    } else {
      // Create new admin if none exists
      admin = await User.create({
        email: 'admin@studymate.com',
        password: 'admin123',
        role: 'admin',
        fullName: 'Admin User',
        username: 'admin'
      });
      console.log('Admin user created successfully');
    }

    console.log('Admin credentials:');
    console.log('Email:', admin.email);
    console.log('Password: admin123');
    console.log('Role:', admin.role);

    process.exit(0);
  } catch (error) {
    console.error('Error updating admin user:', error);
    process.exit(1);
  }
};

updateAdmin(); 