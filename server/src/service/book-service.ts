import { Request, Response } from 'express';
import { BookRepository } from '../repository/book-repository';

export const getAllBooks = async (req: Request, res: Response) => {
  const books = await BookRepository.getAll();
  res.json(books);
};
