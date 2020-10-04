import { Request, Response } from 'express';
import { ReviewRepository } from '../repository/review-repository';

export const getAllReviews = async (req: Request, res: Response) => {
  const reviews = await ReviewRepository.getAll();
  res.json(reviews);
};

export const getReviewByBookId = async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const review = await ReviewRepository.getByBookId(bookId);
  res.json(review);
};

export const getReviewByReviewId = async (req: Request, res: Response) => {
  const reviewId = req.params.reviewId;
  const review = await ReviewRepository.getByReviewId(reviewId);
  res.json(review);
};

export const addReview = async (req: Request, res: Response) => {
  const newReview = req.body;
  const bookId = req.params.bookId;
  const review = await ReviewRepository.add(newReview, bookId);
  res.json(review);
};

export const updateReview = async (req: Request, res: Response) => {
  const reviewId = req.params.reviewId;
  const newReview = req.body;
  const review = await ReviewRepository.update(newReview, reviewId);
  res.json(review);
};

export const deleteReview = async (req: Request, res: Response) => {
  const reviewId = req.params.reviewId;
  const review = await ReviewRepository.delete(reviewId);
  res.json(review);
};
