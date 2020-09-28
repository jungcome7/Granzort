import { MainCategory, SubCategory, Book, Review, Quote } from '../../types/';

const API_END_POINT = 3001;

export const getMainCategories = async () => {
  const res = await fetch(
    `http://localhost:${API_END_POINT}/api/main-category`
  );
  const result = await res.json();
  return result;
};

export const getSubCategoriesByMainCategoryId = async (
  mainCategoryId: number
) => {
  const res = await fetch(
    `http://localhost:${API_END_POINT}/api/main-category/${mainCategoryId}/sub-category`
  );
  const result: SubCategory[] = await res.json();
  return result;
};

export const getBooksByMainCategoryId = async (mainCategoryId: number) => {
  const res = await fetch(
    `http://localhost:${API_END_POINT}/api/book/main/${mainCategoryId}`
  );
  const result: Book[] = await res.json();
  return result;
};

export const getBooksBySubCategoryId = async (subCategoryId: number) => {
  const res = await fetch(
    `http://localhost:${API_END_POINT}/api/book/sub/${subCategoryId}`
  );
  const result: Book[] = await res.json();
  return result;
};

export const getReviewByBookId = async (bookId: number) => {
  const res = await fetch(
    `http://localhost:${API_END_POINT}/api/review/${bookId}`
  );
  const result: Review = await res.json();
  return result;
};

export const getQuotesByBookId = async (bookId: number) => {
  const res = await fetch(
    `http://localhost:${API_END_POINT}/api/quote/${bookId}`
  );
  const result: Quote[] = await res.json();
  return result;
};
