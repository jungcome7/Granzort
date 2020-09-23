import pool from '../db/connection';

export const getAll = async () => {
  const connection = await pool.getConnection();
  const result = await connection.query('SELECT * FROM sub_category');
  connection.release();
  return result;
};

export const getByMainCategoryId = async (mainCategoryId) => {
  const connection = await pool.getConnection();
  const result = await connection.query(
    `SELECT * FROM sub_category WHERE main_category_id=${mainCategoryId}`
  );
  connection.release();
  return result;
};
