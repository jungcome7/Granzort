import { getByBookId } from '../model/quote';

export const getQuotesByBookId = async (req, res, next) => {
  const bookId = req.params.bookId;
  const result = await getByBookId(bookId);
  res.status(200).json(result[0]);
};
