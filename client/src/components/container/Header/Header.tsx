import React, { useState } from 'react';
import Link from 'next/link';
import * as S from './HeaderStyle';
import { SearchBar } from '../../component/SearchBar';
import { MainSearchedContentContainer } from '../MainSearchedContentContainer';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}: HeaderProps) => {
  const [fetchedSearchData, setFetchedSearchData] = useState<any>([]);

  return (
    <S.MainContainer>
      <S.Container>
        <Link href="/">
          <S.Logo>지식의계보</S.Logo>
        </Link>
        <S.SearchBarContainer>
          <SearchBar
            width="300px"
            height="34px"
            fetchedSearchData={fetchedSearchData}
            setFetchedSearchData={setFetchedSearchData}
          />
          {fetchedSearchData && (
            <MainSearchedContentContainer
              fetchedSearchData={fetchedSearchData}
              setFetchedSearchData={setFetchedSearchData}
            />
          )}
        </S.SearchBarContainer>
        <S.IconContainer>
          <Link href="/feed">
            <S.SignalWifi4BarIcon />
          </Link>
          <Link href="/statistics">
            <S.BarChartIcon />
          </Link>
          <Link href="/">
            <S.PersonIcon />
          </Link>
        </S.IconContainer>
      </S.Container>
    </S.MainContainer>
  );
};

export default Header;
