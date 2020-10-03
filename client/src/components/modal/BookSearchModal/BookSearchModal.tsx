import React, { useState } from 'react';
import * as S from './BookSearchModalStyle';
import { SearchBar } from '../../component/SearchBar';
import { SearchedContent } from '../../component/SearchedContent';

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
            fetchedSearchData={fetchedSearchData}
            setFetchedSearchData={setFetchedSearchData}
          />
        </S.SearchBarContainer>
        <S.SearchedContentContainer>
          {fetchedSearchData &&
            fetchedSearchData.map((data: any) => (
              <SearchedContent
                key={data.isbn + Math.random()}
                {...data}
                bookWidth="120px"
                bookHeight="173.99px"
                titleFontSize="20px"
                contentFontSize="16px"
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
