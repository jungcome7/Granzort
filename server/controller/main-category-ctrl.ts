import { getAll } from '../model/main-category';
import { Request, Response } from 'express';

export const getAllMainCategories = async (req: Request, res: Response) => {
  const result = await getAll();
  res.status(200).json(result[0]);
};
