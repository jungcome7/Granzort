import React from 'react';
import * as S from './BookCardContainerStyle';
import { BookCard } from '../BookCard';

interface Props {}

const BookCardContainer: React.FC<Props> = ({}: Props) => {
  return (
    <S.Container>
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </S.Container>
  );
};

export default BookCardContainer;
