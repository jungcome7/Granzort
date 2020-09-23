import { Router } from 'express';
import { getAllMainCategories } from '../controller/main-category-ctrl';
import {
  getAllSubCategories,
  getSubCategoriesByMainCategoryId,
} from '../controller/sub-category-ctrl';
import {
  getAllBooks,
  getBooksByMainCategoryId,
  getBooksBySubCategoryId,
} from '../controller/book-ctrl';
import { getReviewByBookId } from '../controller/review-ctrl';
import { getQuotesByBookId } from '../controller/quote-ctrl';

const router = Router();

router.get('/main-category', getAllMainCategories);

router.get('/sub-category', getAllSubCategories);
router.get(
  '/main-category/:mainCategoryId/sub-category',
  getSubCategoriesByMainCategoryId
);

router.get('/book', getAllBooks);
router.get('/book/main/:mainCategoryId', getBooksByMainCategoryId);
router.get('/book/sub/:subCategoryId', getBooksBySubCategoryId);


router.get('/review/:bookId', getReviewByBookId);

router.get('/quote/:bookId', getQuotesByBookId);

export default router;
