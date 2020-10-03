import React, { useState } from 'react';
import { Review } from '../../component/Review';
import { Quote } from '../../component/Quote';
import { ReviewAndQuoteNavBar } from '../../component/ReviewAndQuoteNavBar';
import * as S from './ReviewAndQuoteContainerStyle';

interface ReviewAndQuoteContainerProps {}

const ReviewAndQuoteContainer: React.FC<ReviewAndQuoteContainerProps> = ({}: ReviewAndQuoteContainerProps) => {
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
      {reviewPage && <Review />}
      {quotePage && <Quote />}
    </S.Container>
  );
};

export default ReviewAndQuoteContainer;
