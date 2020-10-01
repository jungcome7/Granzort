import React from 'react';
import { BookInfo } from '../BookInfo';
import { EmptyBookCard } from '../EmptyBookCard';
import * as S from './BookInfoContainerStyle';

interface Props {
  openSearchModal: () => void;
}

const BookInfoContainer: React.FC<Props> = ({ openSearchModal }: Props) => {
  return (
    <S.Container>
      <EmptyBookCard openSearchModal={openSearchModal}/>
      <BookInfo />
    </S.Container>
  );
};

export default BookInfoContainer;
