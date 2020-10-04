import pool from '../db/connection';

// export const getAll = async () => {
//   const connection = await pool.getConnection();
//   const result = await connection.query('SELECT * FROM book');
//   connection.release();
//   return result;
// };

export class BookRepository {
  static async getAll() {
    const connection = await pool.getConnection();
    const getAllQuery = `SELECT * FROM book`;
    const result = await connection.query(getAllQuery);
    connection.release()
    return result[0];
  }
}

// export const getByMainCategoryId = async (mainCategoryId) => {
//   const connection = await pool.getConnection();
//   const result = await connection.query(`
//   SELECT book.* FROM book JOIN sub_category ON book.sub_category_id = sub_category.id WHERE sub_category.main_category_id = ${mainCategoryId};`);
//   connection.release();
//   return result;
// };

// export const getBySubCategoryId = async (subCategoryId) => {
//   const connection = await pool.getConnection();
//   const result = await connection.query(`
//   SELECT * FROM book WHERE sub_category_id=${subCategoryId}`);
//   connection.release();
//   return result;
// };
