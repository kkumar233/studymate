import mongoose from 'mongoose';

const UploadSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  filename: {
    type: String,
    required: true
  },
  originalName: {
    type: String,
    required: true
  },
  mimeType: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  uploadDate: {
    type: Date,
    default: Date.now
  }
});

// Create indexes for better query performance
UploadSchema.index({ user: 1 });
UploadSchema.index({ uploadDate: -1 });
UploadSchema.index({ subject: 1 });

export default mongoose.model('Upload', UploadSchema);
