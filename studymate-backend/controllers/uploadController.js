import asyncHandler from 'express-async-handler';
import Upload from '../models/Upload.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create uploads directory if it doesn't exist
const uploadDir = path.join(process.cwd(), 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// @desc    Upload a new file
// @route   POST /api/v1/uploads
// @access  Private
export const uploadFile = asyncHandler(async (req, res) => {
  if (!req.file) {
    res.status(400);
    throw new Error('Please upload a file');
  }

  // Check if title and subject are provided
  if (!req.body.title || !req.body.subject) {
    res.status(400);
    throw new Error('Please provide a title and subject');
  }

  // Store relative path instead of absolute path
  const relativePath = path.join('uploads', req.file.filename);

  const upload = await Upload.create({
    user: req.user.id,
    title: req.body.title,
    subject: req.body.subject,
    filename: req.file.filename,
    originalName: req.file.originalname,
    mimeType: req.file.mimetype,
    size: req.file.size,
    path: relativePath
  });

  res.status(201).json({
    success: true,
    data: upload
  });
});

// @desc    Get all uploads for logged in user
// @route   GET /api/v1/uploads/me
// @access  Private
export const getMyUploads = asyncHandler(async (req, res) => {
  const uploads = await Upload.find({ user: req.user.id }).sort('-uploadDate');
  
  res.status(200).json({
    success: true,
    count: uploads.length,
    data: uploads
  });
});

// @desc    Download a file
// @route   GET /api/v1/uploads/:id/download
// @access  Private
export const downloadFile = asyncHandler(async (req, res) => {
  try {
    const upload = await Upload.findById(req.params.id);

    if (!upload) {
      return res.status(404).json({
        success: false,
        error: 'File not found'
      });
    }

    // Check if user owns the file
    if (upload.user.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        error: 'Not authorized to access this file'
      });
    }

    // Construct absolute path from stored relative path
    const filePath = path.join(process.cwd(), upload.path);

    if (!fs.existsSync(filePath)) {
      console.error('File not found at path:', filePath);
      return res.status(404).json({
        success: false,
        error: 'File not found on server'
      });
    }

    // Set headers for file download
    res.setHeader('Content-Disposition', `attachment; filename="${encodeURIComponent(upload.originalName)}"`);
    res.setHeader('Content-Type', upload.mimeType);
    res.setHeader('Content-Length', upload.size);
    
    // Stream the file
    const fileStream = fs.createReadStream(filePath);
    
    fileStream.on('error', (error) => {
      console.error('Error streaming file:', error);
      if (!res.headersSent) {
        res.status(500).json({
          success: false,
          error: 'Error downloading file'
        });
      }
    });

    fileStream.pipe(res);
  } catch (error) {
    console.error('Download error:', error);
    res.status(500).json({
      success: false,
      error: 'Server error while downloading file'
    });
  }
});

// @desc    Delete a file
// @route   DELETE /api/v1/uploads/:id
// @access  Private
export const deleteFile = asyncHandler(async (req, res) => {
  const upload = await Upload.findById(req.params.id);

  if (!upload) {
    res.status(404);
    throw new Error('File not found');
  }

  // Check if user owns the file
  if (upload.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('Not authorized to delete this file');
  }

  const filePath = path.join(process.cwd(), upload.path);

  // Delete file from filesystem
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
  }

  // Delete file record from database
  await upload.deleteOne();

  res.status(200).json({
    success: true,
    data: {}
  });
});

// @desc    Get all files (admin) or user's files
// @route   GET /api/v1/uploads
// @access  Private
export const getAllFiles = async (req, res) => {
  try {
    let files;
    
    // If admin, get all files, else get only user's files
    if (req.user.role === 'admin') {
      files = await Upload.find().populate('user', 'name email').sort('-uploadDate');
    } else {
      files = await Upload.find({ user: req.user.id }).populate('user', 'name email').sort('-uploadDate');
    }

    res.status(200).json({ 
      success: true, 
      count: files.length,
      data: files 
    });
  } catch (error) {
    res.status(500).json({ 
      success: false, 
      error: error.message || 'Error fetching files' 
    });
  }
};
