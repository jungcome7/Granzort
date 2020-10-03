import React, { useRef, useEffect } from 'react';
import * as S from './MainSearchedContentContainerStyle';
import { SearchedContent } from '../../component/SearchedContent';
import { Book } from '../../../../../types/book';

interface MainSearchedContentContainerProps {
  setFetchedSearchData: (fetchedSearchData: Book[]) => void;
  fetchedSearchData: Book[];
}

const MainSearchedContentContainer: React.FC<MainSearchedContentContainerProps> = ({
  setFetchedSearchData,
  fetchedSearchData,
}: MainSearchedContentContainerProps) => {

  return (
    <S.Container className="main-searched-content-container">
      {fetchedSearchData &&
        fetchedSearchData.map((data: Book) => (
          <SearchedContent
            key={data.isbn + Math.random()}
            {...data}
            bookWidth="60px"
            bookHeight="87px"
            titleFontSize="13px"
            contentFontSize="10px"
          />
        ))}
    </S.Container>
  );
};

export default MainSearchedContentContainer;
