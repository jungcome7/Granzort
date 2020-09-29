import React, { useRef } from 'react';
import Link from 'next/link';
import * as S from './SearchBarStyle';

const SearchBar = () => {
  const inputRef = useRef<any>();

  const ActivateInputForm = (e: any) => {
    inputRef.current.focus();
  };

  return (
    <>
      <S.Container onClick={(e) => ActivateInputForm(e)}>
        <S.SearchIcon />
        <S.Input placeholder="Search" ref={inputRef}></S.Input>
      </S.Container>
    </>
  );
};

export default SearchBar;
