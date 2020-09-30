import Link from 'next/link';
import * as S from './HeaderStyle';
import { SearchBar } from '../SearchBar';

const Header = () => {
  return (
    <S.MainContainer>
      <S.Container>
        <S.Logo>지식의계보</S.Logo>
        <SearchBar />
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
