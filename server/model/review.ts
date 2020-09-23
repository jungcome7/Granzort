import pool from '../db/connection';

export const getByBookId = async (bookId) => {
  const connection = await pool.getConnection();
  const result = await connection.query(
    `SELECT * FROM review WHERE book_id=${bookId}`
  );
  connection.release();
  return result;
};
