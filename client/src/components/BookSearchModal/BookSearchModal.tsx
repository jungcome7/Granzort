import React, { useState } from 'react';
import * as S from './BookSearchModalStyle';
import { SearchBar } from '../SearchBar';
import { SearchedContent } from '../SearchedContent';

interface BookSearchModalProps {
  setDisplaySearchModal: (display: boolean) => void;
  setSelectedBook: (book: any) => any;
}

const BookSearchModal: React.FC<BookSearchModalProps> = ({
  setDisplaySearchModal,
  setSelectedBook,
}: BookSearchModalProps) => {
  const [fetchedSearchData, setFetchedSearchData] = useState<any>([]);

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
            fetchedSearchData.map((data: any) => (
              <SearchedContent
                key={data.isbn + Math.random()}
                {...data}
                setDisplaySearchModal={setDisplaySearchModal}
                setSelectedBook={setSelectedBook}
              />
            ))}
        </S.SearchedContentContainer>
      </S.ModalContent>
    </S.Container>
  );
};

export default BookSearchModal;
