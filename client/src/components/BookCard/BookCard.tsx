import React from 'react';
import * as S from './BookCardStyle';

interface Props {}

const BookCard: React.FC<Props> = ({}: Props) => {
  return (
    <S.Container>
      <S.Img src="http://image.kyobobook.co.kr/images/book/xlarge/345/x9788970134345.jpg" />
    </S.Container>
  );
};

export default BookCard;
