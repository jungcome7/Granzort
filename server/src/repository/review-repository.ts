import pool from '../db/connection';

export class ReviewRepository {
  static async getAll() {
    const connection = await pool.getConnection();
    const [result, _] = await connection.query(`SELECT * FROM review`);
    connection.release();
    return result;
  }

  static async getByBookId(bookId: number) {
    const connection = await pool.getConnection();
    const [result, _] = await connection.query(`
  SELECT * FROM review WHERE book_id = ${bookId};`);
    connection.release();
    return result;
  }

  static async getByReviewId(reviewId: number) {
    const connection = await pool.getConnection();
    const [result, _] = await connection.query(`
  SELECT * FROM review WHERE id = ${reviewId};`);
    connection.release();
    return result[0];
  }

  static async add({ review, createdAt, updatedAt }, bookId: number) {
    const connection = await pool.getConnection();
    const [
      result,
      _,
    ] = await connection.query(`INSERT INTO review(review, created_at, updated_at, book_id) 
    VALUES('${review}', '${createdAt}', '${updatedAt}', ${bookId})`);
    connection.release();
    const { insertId }: any = result;
    return insertId;
  }

  static async update({ review, createdAt, updatedAt }, reviewId: number) {
    const connection = await pool.getConnection();
    const [result, _] = await connection.query(
      `UPDATE review SET review='${review}', created_at='${createdAt}', updated_at='${updatedAt}' WHERE id=${reviewId}`
    );
    connection.release();
    const { affectedRows }: any = result;
    return affectedRows;
  }

  static async delete(reviewId) {
    const connection = await pool.getConnection();
    const [result, _] = await connection.query(`
  DELETE FROM review WHERE id = ${reviewId};`);
    connection.release();
    const { affectedRows }: any = result;
    return affectedRows;
  }
}
