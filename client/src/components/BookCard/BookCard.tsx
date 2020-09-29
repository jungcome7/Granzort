import React from 'react';
import * as S from './BookCardStyle';

interface Props {}

const BookCard: React.FC<Props> = ({data}: Props) => {
  return (
    <S.Container>
      <S.Img src={data.imgSrc} />
    </S.Container>
  );
};

export default BookCard;
