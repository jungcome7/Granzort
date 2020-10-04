import { Request, Response } from 'express';
import { BookRepository } from '../repository/book-repository';

export const getAllBooks = async (req: Request, res: Response) => {
  const books = await BookRepository.getAll();
  res.json(books);
};

export const getBookByBookId = async (req: Request, res: Response) => {
  const bookId = req.params.bookId
  const book = await BookRepository.getById(bookId);
  res.json(book);
};

export const addBook = async (req: Request, res: Response) => {
  const newBook = req.body;
  const book = await BookRepository.add(newBook);
  res.json(book);
};

export const updateBook = async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const newBook = req.body;
  const book = await BookRepository.update(newBook, bookId);
  res.json(book);
};

export const deleteBook = async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const book = await BookRepository.delete(bookId);
  res.json(book);
};