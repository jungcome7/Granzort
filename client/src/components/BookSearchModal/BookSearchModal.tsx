import React, { useState } from 'react';
import * as S from './BookSearchModalStyle';
import { SearchBar } from '../SearchBar';
import { SearchedContent } from '../SearchedContent';
import { SearchedContentProps } from '../SearchedContent/SearchedContent';

interface BookSearchModalProps {
  setDisplaySearchModal: (display: boolean) => void;
}

const BookSearchModal: React.FC<BookSearchModalProps> = ({
  setDisplaySearchModal,
}: BookSearchModalProps) => {
  const [fetchedSearchData, setFetchedSearchData] = useState<
    SearchedContentProps[]
  >([]);
  const outsideClickHandler = (e: any) => {
    if (!e.target.closest('.modal-content')) {
      setDisplaySearchModal(false);
    }
  };

  return (
    <S.Container onMouseDown={outsideClickHandler}>
      <S.ModalContent className="modal-content">
        <S.SearchBarContainer>
          <SearchBar
            width="600px"
            height="34px"
            autoFocus={true}
            setFetchedSearchData={setFetchedSearchData}
          />
        </S.SearchBarContainer>
        <S.SearchedContentContainer>
          {fetchedSearchData &&
            fetchedSearchData.map((data) => (
              <SearchedContent key={data.isbn + Math.random()} {...data} />
            ))}
        </S.SearchedContentContainer>
      </S.ModalContent>
    </S.Container>
  );
};

export default BookSearchModal;
