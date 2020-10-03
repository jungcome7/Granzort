import React from 'react';
import * as S from './ReviewAndQuoteNavBarStyle';

interface Props {}

const ReviewAndQuoteNavBar: React.FC<Props> = ({}: Props) => {
  return (
    <S.Container>
      <S.ReviewBar>
        <S.BorderColorIcon />
      </S.ReviewBar>
      <S.QuoteBar>
        <S.FormatListNumberedIcon />
      </S.QuoteBar>
    </S.Container>
  );
};

export default ReviewAndQuoteNavBar;
