import React, { useEffect } from 'react';
import * as S from './EmptyBookCardStyle';
import { getBooks } from '../../../apis/search';

interface EmptyBookCardProps {
  openSearchModal: () => void;
}

const EmptyBookCard: React.FC<EmptyBookCardProps> = ({
  openSearchModal,
}: EmptyBookCardProps) => {
  const gg = async () => {
    const a = await getBooks();
    console.log(a.documents);
    return a;
  };

  useEffect(() => {
    gg();
  });

  return (
    <S.Container onClick={openSearchModal}>
      <S.AddCircleOutlineIcon style={{ fontSize: '30px' }} />
    </S.Container>
  );
};

export default EmptyBookCard;
