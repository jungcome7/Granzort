import { getByBookId } from '../model/quote';
import { Request, Response } from 'express';

export const getQuotesByBookId = async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const result = await getByBookId(bookId);
  res.status(200).json(result[0]);
};
