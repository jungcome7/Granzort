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
      {thumbnail ? (
        <S.BookImg src={thumbnail} />
      ) : (
        <S.EmptyBookImg>
          <S.MenuBookIcon style={{ fontSize: '30px' }} />
        </S.EmptyBookImg>
      )}
      <S.BookInfo>
        <S.Title>{title}</S.Title>
        <S.Authors>{authors.join(', ')}</S.Authors>
        {translators && <S.Translators>{translators.join(', ')}</S.Translators>}
        <S.Publisher>{publisher}</S.Publisher>
        <S.PublishedDate>{datetime.split('T')[0]}</S.PublishedDate>
      </S.BookInfo>
    </S.Container>
  );
};

export default SearchedContent;
