import { getAll, getByMainCategoryId, getBySubCategoryId } from '../model/book';

export const getAllBooks = async (req, res, next) => {
  const result = await getAll();
  res.status(200).json(result[0]);
};

export const getBooksByMainCategoryId = async (req, res, next) => {
  const mainCategoryId = req.params.mainCategoryId;
  const result = await getByMainCategoryId(mainCategoryId);
  res.status(200).json(result[0]);
};

export const getBooksBySubCategoryId = async (req, res, next) => {
  const subCategoryId = req.params.subCategoryId;
  const result = await getBySubCategoryId(subCategoryId);
  res.status(200).json(result[0]);
};
