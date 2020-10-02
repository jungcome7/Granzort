import React, { useEffect } from 'react';
import * as S from './BookCardStyle';

interface BookCardProps {
  thumbnail: string;
  openSearchModal: () => void;
}

const BookCard: React.FC<BookCardProps> = ({
  thumbnail,
  openSearchModal,
}: BookCardProps) => {
  return (
    <S.Container onClick={openSearchModal}>
      {thumbnail ? (
        <S.Img src={thumbnail} />
      ) : (
        <S.MenuBookIcon style={{ fontSize: '30px' }} />
      )}
      <S.FindReplaceIcon style={{ fontSize: '30px' }} />
    </S.Container>
  );
};

export default BookCard;
