import { Request, Response } from 'express';
import { QuoteRepository } from '../repository/quote-repository';

export const getAllQuotes = async (req: Request, res: Response) => {
  const books = await QuoteRepository.getAll();
  res.json(books);
};
