import React, { useState } from 'react';
import { BookInfo } from '../../component/BookInfo';
import { BookCard } from '../../component/BookCard';
import { EmptyBookCard } from '../../component/EmptyBookCard';
import * as S from './BookInfoContainerStyle';

interface BookInfoContainerProps {
  openSearchModal: () => void;
  selectedBook?: {
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
  };
}

const BookInfoContainer: React.FC<BookInfoContainerProps> = ({
  openSearchModal,
  selectedBook,
}: BookInfoContainerProps) => {
  
  return (
    <S.Container>
      {selectedBook ? (
        <>
          <BookCard thumbnail={selectedBook.thumbnail} openSearchModal={openSearchModal}/>
          <BookInfo {...selectedBook} />
        </>
      ) : (
        <EmptyBookCard openSearchModal={openSearchModal} />
      )}
    </S.Container>
  );
};

export default BookInfoContainer;
