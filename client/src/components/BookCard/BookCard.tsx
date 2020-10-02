import React, { useRef } from 'react';
import * as S from './BookCardStyle';

interface BookCardProps {
  thumbnail: string;
  openSearchModal: () => void;
}

const BookCard: React.FC<BookCardProps> = ({
  thumbnail,
  openSearchModal,
}: BookCardProps) => {
  const MenuBookIconRef = useRef<any>();
  const FindReplaceIconRef = useRef<any>();

  const mouseEnterHandler = () => {
    FindReplaceIconRef.current.style.opacity = 1;
    if (!thumbnail) MenuBookIconRef.current.style.visibility = 'hidden';
  };

  const mouseLeaveHandler = () => {
    FindReplaceIconRef.current.style.opacity = 0;
    if (!thumbnail) MenuBookIconRef.current.style.visibility = 'visible';
  };

  return (
    <S.Container
      onClick={openSearchModal}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      {thumbnail ? (
        <S.Img src={thumbnail} />
      ) : (
        <S.MenuBookIcon ref={MenuBookIconRef} style={{ fontSize: '30px' }} />
      )}
      <S.FindReplaceIcon
        ref={FindReplaceIconRef}
        style={{ fontSize: '30px' }}
      />
    </S.Container>
  );
};

export default BookCard;
