import Link from 'next/link';
import * as S from './SearchBarStyle';

const SearchBar = () => {
  return (
    <>
      <S.Container>
        <S.SearchIcon/>
        <S.Text>Search</S.Text>
      </S.Container>
    </>
  );
};

export default SearchBar;
