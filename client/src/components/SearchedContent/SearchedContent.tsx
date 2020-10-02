import React from 'react';
import * as S from './SearchedContentStyle';

interface SearchedContentProps {
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
  setDisplaySearchModal: (displaySearchModal: boolean) => void;
  setSelectedBook: (a: any) => void;
}

const SearchedContent: React.FC<SearchedContentProps> = ({
  setDisplaySearchModal,
  setSelectedBook,
  ...data
}: SearchedContentProps) => {
  const selectBook = () => {
    setDisplaySearchModal(false);
    setSelectedBook(data);
  };

  const { thumbnail, title, authors, translators, publisher, datetime } = data;

  return (
    <S.Container onClick={selectBook}>
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
