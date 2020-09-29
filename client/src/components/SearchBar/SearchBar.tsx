import React, { useRef } from 'react';
import * as S from './SearchBarStyle';

const SearchBar = () => {
  const inputRef = useRef<any>();
  const clearIconRef = useRef<any>();

  const ActivateInputForm = () => {
    inputRef.current.focus();
  };

  const toggleClearButton = () => {
    inputRef.current.value
      ? (clearIconRef.current.style.visibility = 'visible')
      : (clearIconRef.current.style.visibility = 'hidden');
  };

  const clearInputValue = () => {
    inputRef.current.value = '';
    clearIconRef.current.style.visibility = 'hidden';
  };

  return (
    <>
      <S.Container onClick={ActivateInputForm}>
        <S.SearchIcon />
        <S.Input
          placeholder="Search"
          ref={inputRef}
          onChange={toggleClearButton}
        ></S.Input>
        <S.ClearIcon ref={clearIconRef} onClick={clearInputValue} />
      </S.Container>
    </>
  );
};

export default SearchBar;
