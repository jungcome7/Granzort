import React, { useRef } from 'react';
import * as S from './SearchBarStyle';
import { fetchBooks } from '../../apis/search';

interface SearchBarProps {
  width: string;
  height: string;
  autoFocus?: boolean;
  setFetchedSearchData: (fetchedData: any) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  width,
  height,
  autoFocus,
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

  return (
    <>
      <S.Container onClick={ActivateInputForm} width={width} height={height}>
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
          autoFocus={autoFocus}
        ></S.Input>
        <S.ClearIcon ref={clearIconRef} onClick={clearInputValue} />
      </S.Container>
    </>
  );
};

export default SearchBar;
