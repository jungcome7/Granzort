import React, { useRef } from 'react';
import * as S from './BookSearchModalStyle';
import { SearchBar } from '../SearchBar';

interface BookSearchModalProps {
  setDisplaySearchModal: (display: boolean) => void;
}

const BookSearchModal: React.FC<BookSearchModalProps> = ({
  setDisplaySearchModal,
}: BookSearchModalProps) => {
  const outsideClickHandler = (e: any) => {
    if (!e.target.closest('.modal-content')) {
      setDisplaySearchModal(false);
    }
  };

  return (
    <S.Container onClick={outsideClickHandler}>
      <S.ModalContent className="modal-content">
        <SearchBar width="600px" height="34px" />
      </S.ModalContent>
    </S.Container>
  );
};

export default BookSearchModal;
