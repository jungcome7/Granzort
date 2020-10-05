export interface Book {
  thumbnail: string;
  title: string;
  authors: string[];
  translators: string[];
  publisher: string;
  datetime: string;
  contents: string;
  isbn: string;
  price: number;
  sale_price: number;
}

export interface AddBookBody {
  thumbnail: string;
  title: string;
  authors: string;
  translators: string;
  publisher: string;
  publishedDate: string;
  contents: string;
  isbn: string;
  price: number;
  salePrice: number;
  createdAt: string;
}

export interface BookTable {
  id:number;
  thumbnail: string;
  title: string;
  authors: string;
  translators: string;
  publisher: string;
  published_date: string;
  contents: string;
  isbn: string;
  price: number;
  sale_price: number;
  created_at: string;
}
