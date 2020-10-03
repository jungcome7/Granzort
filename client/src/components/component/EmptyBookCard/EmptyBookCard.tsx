import React, { useEffect } from 'react';
import * as S from './EmptyBookCardStyle';

interface EmptyBookCardProps {
  openSearchModal: () => void;
}

const EmptyBookCard: React.FC<EmptyBookCardProps> = ({
  openSearchModal,
}: EmptyBookCardProps) => {

  return (
    <S.Container onClick={openSearchModal}>
      <S.AddCircleOutlineIcon style={{ fontSize: '30px' }} />
    </S.Container>
  );
};

export default EmptyBookCard;
