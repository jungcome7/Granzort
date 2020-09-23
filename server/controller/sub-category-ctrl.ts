import { getAll, getByMainCategoryId } from '../model/sub-category';

export const getAllSubCategories = async (req, res, next) => {
  const result = await getAll();
  res.status(200).json(result[0]);
};

export const getSubCategoriesByMainCategoryId = async (req, res, next) => {
  const mainCategoryId = req.params.mainCategoryId;
  const result = await getByMainCategoryId(mainCategoryId);
  res.status(200).json(result[0]);
};
