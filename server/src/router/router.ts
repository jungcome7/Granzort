import { Router } from 'express';
import bookRouter from './book-router';
import reviewRouter from './review-router';
import quoteRouter from './quote-router';

const router = Router();

router.get('/books', getAllBooks);
router.get('/book/:bookId', getBookById);
router.post('/book', addBook);
router.put('/book/:bookId', updateBook);
router.delete('/book/:bookId', deleteBook);

router.get('/reviews', getAllReviews);
router.get('/book/:bookId/review', getReviewByBookId);
router.get('/book/:bookId/review/:reviewId', getReviewByReviewId);
router.post('/book/:bookId/review', addReview);
router.put('/book/:bookId/review/:reviewId', updateReview);
router.delete('/book/:bookId/review/:reviewId', deleteReview);

router.get('/quotes', getAllQuotes);
router.get('/book/:bookId/quotes', getQuotesByBookId);
router.get('/book/:bookId/quote/:quoteId', getQuoteByQuoteId);
router.post('/book/:bookId/quote', addQuote);
router.put('/book/:bookId/quote/:quoteId', updateQuote);
router.delete('/book/:bookId/quote/:quoteId', deleteQuote);

export default router;