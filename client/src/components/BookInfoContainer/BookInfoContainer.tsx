import React, { useState } from 'react';
import { BookInfo } from '../BookInfo';
import { BookCard } from '../BookCard';
import { EmptyBookCard } from '../EmptyBookCard';
import * as S from './BookInfoContainerStyle';

interface BookInfoContainerProps {
  openSearchModal: () => void;
  selectedBook:any;
}

const BookInfoContainer: React.FC<BookInfoContainerProps> = ({
  openSearchModal,
  selectedBook
}: BookInfoContainerProps) => {
  return (
    <S.Container>
      {selectedBook ? (
        <BookCard thumbnail={selectedBook.thumbnail}/>
      ) : (
        <EmptyBookCard openSearchModal={openSearchModal} />
      )}
      <BookInfo />
    </S.Container>
  );
};

export default BookInfoContainer;
