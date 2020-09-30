import React, { useEffect } from 'react';
import * as S from './EmptyBookCardStyle';
import { getBooks } from '../../../apis/search';

interface Props {}

const EmptyBookCard: React.FC = () => {
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
      <S.AddCircleOutlineIcon/>
    </S.Container>
  );
};

export default EmptyBookCard;
