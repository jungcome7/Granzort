import { getAll } from '../model/main-category';

export const getAllMainCategories = async (req, res, next) => {
  const result = await getAll();
  res.status(200).json(result[0]);
};
