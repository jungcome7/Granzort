import React, { useState } from 'react';
import { ReviewContainer } from '../ReviewContainer';
import { QuoteContainer } from '../QuoteContainer';
import { ReviewAndQuoteNavBar } from '../ReviewAndQuoteNavBar';
import * as S from './ReviewAndQuoteContainerStyle';

interface Props {}

const ReviewAndQuoteContainer: React.FC<Props> = ({}: Props) => {
  const [quotePage, setQuotePage] = useState(false);
  const [reviewPage, setReviewPage] = useState(true);

  return (
    <S.Container>
      <ReviewAndQuoteNavBar
        reviewPage={reviewPage}
        setReviewPage={setReviewPage}
        quotePage={quotePage}
        setQuotePage={setQuotePage}
      />
      {reviewPage && <ReviewContainer />}
      {quotePage && <QuoteContainer />}
    </S.Container>
  );
};

export default ReviewAndQuoteContainer;
