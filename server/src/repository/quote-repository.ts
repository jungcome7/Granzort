import pool from '../db/connection';

export class QuoteRepository {
  static async getAll() {
    const connection = await pool.getConnection();
    const result = await connection.query(`SELECT * FROM quote`);
    connection.release();
    return result[0];
  }

  static async getByBookId(bookId) {
    const connection = await pool.getConnection();
    const result = await connection.query(`
  SELECT * FROM quote WHERE book_id = ${bookId};`);
    connection.release();
    return result[0];
  }

  static async getByQuoteId(quoteId) {
    const connection = await pool.getConnection();
    const result = await connection.query(`
  SELECT * FROM quote WHERE id = ${quoteId};`);
    connection.release();
    return result[0];
  }

  static async add({ quote, createdAt, updatedAt }, bookId) {
    const connection = await pool.getConnection();
    const result = await connection.query(`INSERT INTO quote(quote, created_at, updated_at, book_id) 
    VALUES('${quote}', '${createdAt}', '${updatedAt}', ${bookId})`);
    connection.release();
    const { insertId }: any = result[0];
    return insertId;
  }

  static async update({ quote, createdAt, updatedAt }, quoteId) {
    const connection = await pool.getConnection();
    const result = await connection.query(
      `UPDATE quote SET quote='${quote}', created_at='${createdAt}', updated_at='${updatedAt}' WHERE id=${quoteId}`
    );
    connection.release();
    const { affectedRows }: any = result[0];
    return affectedRows;
  }

  static async delete(quoteId) {
    const connection = await pool.getConnection();
    const result = await connection.query(`
  DELETE FROM quote WHERE id = ${quoteId};`);
    connection.release();
    const { affectedRows }: any = result[0];
    return affectedRows;
  }
}
