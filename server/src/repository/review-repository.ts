import pool from '../db/connection';

export class ReviewRepository {
  static async getAll() {
    const connection = await pool.getConnection();
    const result = await connection.query(`SELECT * FROM review`);
    connection.release();
    return result[0];
  }

  static async getByBookId(bookId) {
    const connection = await pool.getConnection();
    const result = await connection.query(`
  SELECT * FROM review WHERE book_id = ${bookId};`);
    connection.release();
    return result[0];
  }

  static async getByReviewId(reviewId) {
    const connection = await pool.getConnection();
    const result = await connection.query(`
  SELECT * FROM review WHERE id = ${reviewId};`);
    connection.release();
    return result[0];
  }

  static async add({ review, createdAt, updatedAt }, bookId) {
    const connection = await pool.getConnection();
    const result = await connection.query(`INSERT INTO review(review, created_at, updated_at, book_id) 
    VALUES('${review}', '${createdAt}', '${updatedAt}', ${bookId})`);
    connection.release();
    const { insertId }: any = result[0];
    return insertId;
  }

  static async update({ review, createdAt, updatedAt }, reviewId) {
    const connection = await pool.getConnection();
    const result = await connection.query(
      `UPDATE review SET review='${review}', created_at='${createdAt}', updated_at='${updatedAt}' WHERE id=${reviewId}`
    );
    connection.release();
    const { affectedRows }: any = result[0];
    return affectedRows;
  }

  static async delete(reviewId) {
    const connection = await pool.getConnection();
    const result = await connection.query(`
  DELETE FROM review WHERE id = ${reviewId};`);
    connection.release();
    const { affectedRows }: any = result[0];
    return affectedRows;
  }
}
