import React from 'react';
import * as S from './BookInfoStyle';

interface Props {}

const title = '아침놀';
const authors = '프리드리히 니체';
const translator = '박찬국';
const publisher = '책세상';
const publishedDate = '2020-05-08';
const price = 20000;
const salesPrice = 18000;

const BookInfo: React.FC<Props> = ({}: Props) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      <S.Authors>{authors}</S.Authors>
      <S.Translator>{translator}</S.Translator>
      <S.Publisher>{publisher}</S.Publisher>
      <S.PublishedDate>{publishedDate}</S.PublishedDate>
      <S.Price>{price}</S.Price>
      <S.SalesPrice>{salesPrice}</S.SalesPrice>
    </S.Container>
  );
};

export default BookInfo;
