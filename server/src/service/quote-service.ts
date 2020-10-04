import { Request, Response } from 'express';
import { QuoteRepository } from '../repository/quote-repository';

export const getAllQuotes = async (req: Request, res: Response) => {
  const quotes = await QuoteRepository.getAll();
  res.json(quotes);
};

export const getQuotesByBookId = async (req: Request, res: Response) => {
  const bookId = req.params.bookId;
  const quote = await QuoteRepository.getByBookId(bookId);
  res.json(quote);
};

export const getQuoteByQuoteId = async (req: Request, res: Response) => {
  const quoteId = req.params.QuoteId;
  const quote = await QuoteRepository.getByQuoteId(quoteId);
  res.json(quote);
};

export const addQuote = async (req: Request, res: Response) => {
  const newQuote = req.body;
  const bookId = req.params.bookId;
  const quote = await QuoteRepository.add(newQuote, bookId);
  res.json(quote);
};

export const updateQuote = async (req: Request, res: Response) => {
  const quoteId = req.params.quoteId;
  const newQuote = req.body;
  const quote = await QuoteRepository.update(newQuote, quoteId);
  res.json(quote);
};

export const deleteQuote = async (req: Request, res: Response) => {
  const quoteId = req.params.quoteId;
  const quote = await QuoteRepository.delete(quoteId);
  res.json(quote);
};
