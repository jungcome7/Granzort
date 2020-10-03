import React from 'react';
import { ReviewAndQuoteNavBar } from '../ReviewAndQuoteNavBar';
import * as S from './ReviewAndQuoteContainerStyle';

interface Props {}

const ReviewAndQuoteContainer: React.FC<Props> = ({}: Props) => {
  return (
    <S.Container>
      <ReviewAndQuoteNavBar />
    </S.Container>
  );
};

export default ReviewAndQuoteContainer;
