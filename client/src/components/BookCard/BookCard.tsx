import React, { useEffect } from 'react';
import * as S from './BookCardStyle';
import { getBooks } from '../../../apis/search';

interface Props {}

const BookCard: React.FC = () => {
  const gg = async () => {
    const a = await getBooks();
    console.log(a.documents);
    return a;
  };

  useEffect(() => {
    gg();
  });

  return (
    <S.Container>
      <S.Img />
    </S.Container>
  );
};

export default BookCard;
