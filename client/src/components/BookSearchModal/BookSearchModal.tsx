import React, { useState } from 'react';
import * as S from './BookSearchModalStyle';
import { SearchBar } from '../SearchBar';
import { fetchBooks } from '../../../apis/search';

interface BookSearchModalProps {
  setDisplaySearchModal: (display: boolean) => void;
}

const BookSearchModal: React.FC<BookSearchModalProps> = ({
  setDisplaySearchModal,
}: BookSearchModalProps) => {
  const [fetchedData, setFetchedData] = useState([]);

  const outsideClickHandler = (e: any) => {
    if (!e.target.closest('.modal-content')) {
      setDisplaySearchModal(false);
    }
  };

  return (
    <S.Container onClick={outsideClickHandler}>
      <S.ModalContent className="modal-content">
        <S.SearchBarContainer>
          <SearchBar
            width="600px"
            height="34px"
            autoFocus={true}
            //   fetchBooksByInputValue={fetchBooksByInputValue}
            setFetchedData={setFetchedData}
          />
        </S.SearchBarContainer>
        {fetchedData.map((v) => (
          <S.Test>{v.title}</S.Test>
        ))}
      </S.ModalContent>
    </S.Container>
  );
};

export default BookSearchModal;
