import React, { useRef } from 'react';
import * as S from './ReviewAndQuoteNavBarStyle';
import { $GRAY_001, $WHITE } from '../../../styles/color-variables';

interface ReviewAndQuoteNavBarProps {
  reviewPage: boolean;
  setQuotePage: (quotePage: boolean) => void;
  quotePage: boolean;
  setReviewPage: (reviewPage: boolean) => void;
}

const ReviewAndQuoteNavBar: React.FC<ReviewAndQuoteNavBarProps> = ({
  reviewPage,
  setQuotePage,
  quotePage,
  setReviewPage,
}: ReviewAndQuoteNavBarProps) => {
  const reviewBarRef = useRef<any>();
  const quoteBarRef = useRef<any>();
  const displayReviewPage = (e: any) => {
    setQuotePage(false);
    setReviewPage(true);
    reviewBarRef.current.style.backgroundColor = $GRAY_001;
    quoteBarRef.current.style.backgroundColor = $WHITE;
  };

  const displayQuotePage = (e: any) => {
    setReviewPage(false);
    setQuotePage(true);
    reviewBarRef.current.style.backgroundColor = $WHITE;
    quoteBarRef.current.style.backgroundColor = $GRAY_001;
  };

  return (
    <S.Container>
      <S.ReviewBar
      className="navbar"
        onClick={(e) => {
          quotePage && displayReviewPage(e);
        }}
        ref={reviewBarRef}
      >
        <S.BorderColorIcon />
      </S.ReviewBar>
      <S.QuoteBar
        onClick={(e) => {
          reviewPage && displayQuotePage(e);
        }}
        ref={quoteBarRef}
      >
        <S.FormatListNumberedIcon />
      </S.QuoteBar>
    </S.Container>
  );
};

export default ReviewAndQuoteNavBar;
