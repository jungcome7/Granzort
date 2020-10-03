import React, { useState } from 'react';
import { BookInfo } from '../../component/BookInfo';
import { BookCard } from '../../component/BookCard';
import { EmptyBookCard } from '../../component/EmptyBookCard';
import * as S from './BookInfoContainerStyle';
import { Book } from '../../../../../types/book';

interface BookInfoContainerProps {
  openSearchModal: () => void;
  selectedBook?: Book
}

const BookInfoContainer: React.FC<BookInfoContainerProps> = ({
  openSearchModal,
  selectedBook,
}: BookInfoContainerProps) => {
  return (
    <S.Container>
      {selectedBook ? (
        <>
          <BookCard
            thumbnail={selectedBook.thumbnail}
            openSearchModal={openSearchModal}
          />
          <BookInfo {...selectedBook} />
        </>
      ) : (
        <EmptyBookCard openSearchModal={openSearchModal} />
      )}
    </S.Container>
  );
};

export default BookInfoContainer;
