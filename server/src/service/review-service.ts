import { Request, Response } from 'express';
import { ReviewRepository } from '../repository/review-repository';

export const getAllReviews = async (req: Request, res: Response) => {
  const books = await ReviewRepository.getAll();
  res.json(books);
};
