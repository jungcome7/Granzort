import { getByBookId } from '../model/review';
import { Request, Response } from 'express';

export const getReviewByBookId = async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const result = await getByBookId(bookId);
  res.status(200).json(result[0]);
};
