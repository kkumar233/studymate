import Feedback from '../models/Feedback.js';
import ErrorResponse from '../utils/errorResponse.js';
import asyncHandler from '../middleware/async.js';

// @desc    Get all feedback
// @route   GET /api/v1/feedback
// @access  Public
export const getFeedbacks = asyncHandler(async (req, res, next) => {
  const page = parseInt(req.query.page, 10) || 1;
  const limit = parseInt(req.query.limit, 10) || 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const total = await Feedback.countDocuments();

  const feedbacks = await Feedback.find()
    .sort('-createdAt')
    .skip(startIndex)
    .limit(limit);

  // Pagination result
  const pagination = {};

  if (endIndex < total) {
    pagination.next = {
      page: page + 1,
      limit
    };
  }

  if (startIndex > 0) {
    pagination.prev = {
      page: page - 1,
      limit
    };
  }

  res.status(200).json({
    success: true,
    count: feedbacks.length,
    pagination,
    data: feedbacks
  });
});

// @desc    Get single feedback
// @route   GET /api/v1/feedback/:id
// @access  Public
export const getFeedback = asyncHandler(async (req, res, next) => {
  const feedback = await Feedback.findById(req.params.id);

  if (!feedback) {
    return next(new ErrorResponse(`Feedback not found with id of ${req.params.id}`, 404));
  }

  res.status(200).json({
    success: true,
    data: feedback
  });
});

// @desc    Create new feedback
// @route   POST /api/v1/feedback
// @access  Public
export const createFeedback = asyncHandler(async (req, res, next) => {
  const feedback = await Feedback.create(req.body);

  res.status(201).json({
    success: true,
    data: feedback
  });
});

// @desc    Update feedback
// @route   PUT /api/v1/feedback/:id
// @access  Public
export const updateFeedback = asyncHandler(async (req, res, next) => {
  let feedback = await Feedback.findById(req.params.id);

  if (!feedback) {
    return next(new ErrorResponse(`Feedback not found with id of ${req.params.id}`, 404));
  }

  feedback = await Feedback.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true
  });

  res.status(200).json({
    success: true,
    data: feedback
  });
});

// @desc    Delete feedback
// @route   DELETE /api/v1/feedback/:id
// @access  Public
export const deleteFeedback = asyncHandler(async (req, res, next) => {
  const feedback = await Feedback.findById(req.params.id);

  if (!feedback) {
    return next(new ErrorResponse(`Feedback not found with id of ${req.params.id}`, 404));
  }

  await feedback.deleteOne();

  res.status(200).json({
    success: true,
    data: {}
  });
}); 