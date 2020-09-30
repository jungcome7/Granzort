import React, { useEffect } from 'react';
import * as S from './BookCardStyle';
import { getBooks } from '../../../apis/search';

interface Props {}

const BookCard: React.FC<Props> = ({ data }: Props) => {
  const gg = async () => {
    const a = await getBooks();
    console.log(a.documents[0].authors[0]);
    return a;
  };

  useEffect(() => {
    gg();
  });

  return (
    <S.Container>
      <S.Img src={data.imgSrc} />
    </S.Container>
  );
};

export default BookCard;
