import React, { useRef, useState } from 'react';
import * as S from './SearchBarStyle';
import { fetchBooks } from '../../apis/search';

interface SearchBarProps {
  width: string;
  height: string;
  autoFocus?: boolean;
  fetchedSearchData: any;
  setFetchedSearchData: (fetchedData: any) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  width,
  height,
  autoFocus,
  fetchedSearchData,
  setFetchedSearchData,
}: SearchBarProps) => {
  const inputRef = useRef<any>();
  const clearIconRef = useRef<any>();

  const fetchBooksByInputValue = async (inputValue: any) => {
    const data = await fetchBooks(inputValue);
    setFetchedSearchData(data.documents);
    console.log(data.documents);
  };

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
    setFetchedSearchData([]);
  };

  const outsideClickHandler = () => {
    window.addEventListener('click', function clicked(e: any) {
      if (
        !e.target.closest('.search-bar') &&
        !e.target.closest('.main-searched-content-container')
      ) {
        setFetchedSearchData([]);
        window.removeEventListener('click', clicked);
      }
    });
  };

  const reOpenSearchedContent = () => {
    inputRef.current.value && fetchBooksByInputValue(inputRef.current.value);
  };

  return (
    <>
      <S.Container
        className="search-bar"
        onClick={() => {
          ActivateInputForm();
          outsideClickHandler();
          reOpenSearchedContent();
        }}
        width={width}
        height={height}
      >
        <S.SearchIcon />
        <S.Input
          placeholder="Search"
          ref={inputRef}
          onChange={(e: any) => {
            toggleClearButton();
            e.target.value
              ? fetchBooksByInputValue(e.target.value)
              : setFetchedSearchData([]);
          }}
          // onFocus={reOpenSearchedContent}
          autoFocus={autoFocus}
        ></S.Input>
        <S.ClearIcon ref={clearIconRef} onClick={clearInputValue} />
      </S.Container>
    </>
  );
};

export default SearchBar;
