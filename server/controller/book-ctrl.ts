import { getAll, getByMainCategoryId, getBySubCategoryId } from '../model/book';
import { Request, Response } from 'express';

export const getAllBooks = async (req: Request, res: Response) => {
  const result = await getAll();
  res.status(200).json(result[0]);
};

export const getBooksByMainCategoryId = async (req: Request, res: Response) => {
  const mainCategoryId = req.params.mainCategoryId;
  const result = await getByMainCategoryId(mainCategoryId);
  res.status(200).json(result[0]);
};

export const getBooksBySubCategoryId = async (req: Request, res: Response) => {
  const subCategoryId = req.params.subCategoryId;
  const result = await getBySubCategoryId(subCategoryId);
  res.status(200).json(result[0]);
};
