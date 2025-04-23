const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Create uploads directory if it doesn't exist
const createUploadsDirectory = () => {
  const uploadsDir = path.join(__dirname, '../uploads');
  if (!fs.existsSync(uploadsDir)) {
    fs.mkdirSync(uploadsDir, { recursive: true });
  }
  return uploadsDir;
};

// Generate a unique filename
const generateUniqueFilename = (originalFilename) => {
  const timestamp = Date.now();
  const randomString = crypto.randomBytes(8).toString('hex');
  const extension = path.extname(originalFilename);
  return `${timestamp}-${randomString}${extension}`;
};

// Get file extension
const getFileExtension = (filename) => {
  return path.extname(filename).toLowerCase();
};

// Check if file type is allowed
const isAllowedFileType = (fileType) => {
  const allowedTypes = [
    '.pdf', '.doc', '.docx', '.txt', '.ppt', '.pptx', 
    '.xls', '.xlsx', '.jpg', '.jpeg', '.png', '.gif',
    '.zip', '.rar', '.mp3', '.mp4', '.avi', '.mov'
  ];
  return allowedTypes.includes(fileType);
};

// Get file size in MB
const getFileSizeInMB = (fileSize) => {
  return fileSize / (1024 * 1024);
};

// Check if file size is within limit (default 10MB)
const isFileSizeAllowed = (fileSize, maxSizeMB = 10) => {
  const fileSizeMB = getFileSizeInMB(fileSize);
  return fileSizeMB <= maxSizeMB;
};

// Delete file from server
const deleteFile = (filePath) => {
  if (fs.existsSync(filePath)) {
    fs.unlinkSync(filePath);
    return true;
  }
  return false;
};

module.exports = {
  createUploadsDirectory,
  generateUniqueFilename,
  getFileExtension,
  isAllowedFileType,
  getFileSizeInMB,
  isFileSizeAllowed,
  deleteFile
}; 