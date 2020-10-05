import React, { useState, useContext } from 'react';
import * as S from './BookSearchModalStyle';
import { SearchBar } from '../../component/SearchBar';
import { SearchedContent } from '../../component/SearchedContent';
import { Book } from '../../../../../types/book';
import {
  useFetchedSearchDataState,
  useFetchedSearchDataDispatch,
} from '../../../contexts/MyContext';

interface BookSearchModalProps {
  setDisplaySearchModal: (displaySearchedModal: boolean) => void;
  setSelectedBook: (book: Book) => void;
}

const BookSearchModal: React.FC<BookSearchModalProps> = ({
  setDisplaySearchModal,
  setSelectedBook,
}: BookSearchModalProps) => {
  // const [fetchedSearchData, setFetchedSearchData] = useState<Book[]>([]);
  // const { fetchedSearchData, setFetchedSearchData } = useContext(GlobalContext);
  const fetchedSearchData = useFetchedSearchDataState();
  const setData = useFetchedSearchDataDispatch();

  const outsideClickHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    if (!(e.target as HTMLElement).closest('.modal-content')) {
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
            setFetchedSearchData={setData}
          />
        </S.SearchBarContainer>
        <S.SearchedContentContainer>
          {fetchedSearchData &&
            fetchedSearchData.map((data: Book) => (
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
