import { getAll, getByMainCategoryId } from '../repository/sub-category';
import { Request, Response } from 'express';

export const getAllSubCategories = async (req: Request, res: Response) => {
  const result = await getAll();
  res.status(200).json(result[0]);
};

export const getSubCategoriesByMainCategoryId = async (
  req: Request,
  res: Response
) => {
  const mainCategoryId = req.params.mainCategoryId;
  const result = await getByMainCategoryId(mainCategoryId);
  res.status(200).json(result[0]);
};
