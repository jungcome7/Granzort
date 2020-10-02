import React from 'react';
import * as S from './BookInfoStyle';

interface Props {
  thumbnail: string;
  title: string;
  authors: string[];
  translators?: string[];
  publisher: string;
  datetime: string;
  contents: string;
  isbn: string;
  price: number;
  sales_price: number;
}

const BookInfo: React.FC<Props> = ({
  title,
  authors,
  translators,
  publisher,
  datetime,
  price,
  sales_price,
}: Props) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Authors>{authors.join(', ')}</S.Authors>
      {translators && <S.Translator>{translators.join(', ')}</S.Translator>}
      <S.Publisher>{publisher}</S.Publisher>
      <S.PublishedDate>{datetime.split('T')[0]}</S.PublishedDate>
      <S.Price>{price}</S.Price>
      <S.SalesPrice>{sales_price}</S.SalesPrice>
    </S.Container>
  );
};

export default BookInfo;
