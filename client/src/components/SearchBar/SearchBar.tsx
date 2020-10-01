import React, { useRef } from 'react';
import * as S from './SearchBarStyle';
import { fetchBooks } from '../../../apis/search';

interface SearchBarProps {
  width: string;
  height: string;
  autoFocus?: boolean;
  setFetchedData:(fetchedData:any) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  width,
  height,
  autoFocus,
  setFetchedData
}: SearchBarProps) => {
  const inputRef = useRef<any>();
  const clearIconRef = useRef<any>();

  const fetchBooksByInputValue = async (inputValue: any) => {
    const data = await fetchBooks(inputValue);
    setFetchedData(data.documents)
    console.log(data.documents)
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
  };

  return (
    <>
      <S.Container onClick={ActivateInputForm} width={width} height={height}>
        <S.SearchIcon />
        <S.Input
          placeholder="Search"
          ref={inputRef}
          onChange={(e:any) => {
            toggleClearButton();
            // setFetchedData(e.target.value)
            fetchBooksByInputValue(e.target.value);
          }}
          autoFocus={autoFocus}
        ></S.Input>
        <S.ClearIcon ref={clearIconRef} onClick={clearInputValue} />
      </S.Container>
    </>
  );
};

export default SearchBar;
