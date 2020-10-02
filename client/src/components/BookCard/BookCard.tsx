import React, { useEffect } from 'react';
import * as S from './BookCardStyle';

interface BookCardProps {
  thumbnail: string;
}

const BookCard: React.FC<BookCardProps> = ({ thumbnail }: BookCardProps) => {
  return (
    <S.Container>
      <S.Img src={thumbnail}/>
    </S.Container>
  );
};

export default BookCard;
