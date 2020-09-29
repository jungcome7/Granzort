import React, { useRef } from 'react';
import * as S from './SearchBarStyle';

const SearchBar = () => {
  const inputRef = useRef<any>();

  const ActivateInputForm = () => {
    inputRef.current.focus();
  };

  return (
    <>
      <S.Container onClick={ActivateInputForm}>
        <S.SearchIcon />
        <S.Input placeholder="Search" ref={inputRef}></S.Input>
      </S.Container>
    </>
  );
};

export default SearchBar;
