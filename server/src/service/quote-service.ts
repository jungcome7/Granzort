import { Request, Response } from 'express';
import { QuoteRepository } from '../repository/review-repository';

export const getAllQuotes = async (req: Request, res: Response) => {
  const books = await QuoteRepository.getAll();
  res.json(books);
};


export const getBookByBookId = async (req: Request, res: Response) => {
  const bookId = req.params.bookId
  const book = await QuoteRepository.getById(bookId);
  res.json(book);
};

export const addBook = async (req: Request, res: Response) => {
  const newBook = req.body;
  const book = await QuoteRepository.add(newBook);
  res.json(book);
};

export const updateBook = async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const newBook = req.body;
  const book = await QuoteRepository.update(newBook, bookId);
  res.json(book);
};

export const deleteBook = async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const book = await QuoteRepository.delete(bookId);
  res.json(book);
};