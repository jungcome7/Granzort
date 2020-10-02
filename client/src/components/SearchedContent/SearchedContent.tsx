import React from 'react';
import * as S from './SearchedContentStyle';

export interface SearchedContentProps {
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
  status: string;
  url: string;
}

const SearchedContent: React.FC<SearchedContentProps> = ({
  thumbnail,
  title,
  authors,
  translators,
  publisher,
  datetime,
}: SearchedContentProps) => {
  return (
    <S.Container>
      <S.Img src={thumbnail}>
      </S.Img>
      <S.Title>{title}</S.Title>
      <S.Authors>{authors.join(', ')}</S.Authors>
      {translators && <S.Translators>{translators.join(', ')}</S.Translators>}
      <S.Publisher>{publisher}</S.Publisher>
      <S.PublishedDate>{datetime.split('T')[0]}</S.PublishedDate>
    </S.Container>
  );
};

export default SearchedContent;
