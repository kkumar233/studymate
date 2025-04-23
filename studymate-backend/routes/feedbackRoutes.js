import express from 'express';
import {
  getFeedbacks,
  getFeedback,
  createFeedback,
  updateFeedback,
  deleteFeedback
} from '../controllers/feedbackController.js';

const router = express.Router();

router
  .route('/')
  .get(getFeedbacks)
  .post(createFeedback);

router
  .route('/:id')
  .get(getFeedback)
  .put(updateFeedback)
  .delete(deleteFeedback);

export default router; 