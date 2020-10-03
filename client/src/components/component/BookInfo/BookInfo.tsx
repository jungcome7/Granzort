import React from 'react';
import * as S from './BookInfoStyle';
import { putCommas } from '../../../utils/parsers';
import { Book } from '../../../../../types/book';

interface BookInfoProps extends Book {}

const BookInfo: React.FC<BookInfoProps> = ({
  title,
  authors,
  translators,
  publisher,
  datetime,
  price,
  sale_price,
  contents,
}: BookInfoProps) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Authors>{authors.join(', ')}</S.Authors>
      <S.Translator>{translators.join(', ')}</S.Translator>
      <S.Publisher>{publisher}</S.Publisher>
      <S.PublishedDate>{datetime.split('T')[0]}</S.PublishedDate>
      <S.Price>{putCommas(price)}원</S.Price>
      {sale_price > 0 && <S.SalesPrice>{putCommas(sale_price)}원</S.SalesPrice>}
      <S.Contents>{contents}</S.Contents>
    </S.Container>
  );
};

export default BookInfo;
