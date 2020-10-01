import React from 'react';
import { BookInfo } from '../BookInfo';
import { EmptyBookCard } from '../EmptyBookCard';
import * as S from './BookInfoContainerStyle';

interface Props {}

const BookInfoContainer: React.FC<Props> = ({}: Props) => {
  return (
    <S.Container>
      <EmptyBookCard />
      <BookInfo />
    </S.Container>
  );
};

export default BookInfoContainer;
