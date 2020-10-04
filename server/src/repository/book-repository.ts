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
    connection.release();
    return result[0];
  }

  static async getById(bookId) {
    const connection = await pool.getConnection();
    const result = await connection.query(`
  SELECT * FROM book WHERE id = ${bookId};`);
    connection.release();
    return result[0];
  }

  static async add({
    thumbnail,
    title,
    authors,
    translators,
    publisher,
    publishedDate,
    contents,
    isbn,
    price,
    salePrice,
    createdAt,
  }) {
    const connection = await pool.getConnection();
    const result = await connection.query(`INSERT INTO book(thumbnail, title, authors, translators, publisher, published_date, contents, isbn, price, sale_price, created_at) 
    VALUES('${thumbnail}', '${title}', '${authors}', '${translators}', '${publisher}', '${publishedDate}', '${contents}', ${isbn}, ${price}, ${salePrice}, '${createdAt}')`);
    connection.release();
    const { insertId }: any = result[0];
    return insertId;
  }

  static async update(
    {
      thumbnail,
      title,
      authors,
      translators,
      publisher,
      publishedDate,
      contents,
      isbn,
      price,
      salePrice,
      createdAt,
    },
    bookId
  ) {
    const connection = await pool.getConnection();
    const result = await connection.query(
      `UPDATE book SET thumbnail='${thumbnail}', title='${title}', 
      authors='${authors}', translators='${translators}', publisher='${publisher}', published_date='${publishedDate}',
      contents='${contents}', isbn=${isbn}, price=${price}, sale_price=${salePrice}, created_at='${createdAt}' WHERE id=${bookId}`
    );
    connection.release();
    const { affectedRows }: any = result[0];
    return affectedRows;
  }

  static async delete(bookId) {
    const connection = await pool.getConnection();
    const result = await connection.query(`
  DELETE FROM book WHERE id = ${bookId};`);
    connection.release();
    const { affectedRows }: any = result[0];
    return affectedRows;
  }
}
