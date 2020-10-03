import React from 'react';
import * as S from './ReviewStyle';

interface ReviewProps {}

const Review: React.FC<ReviewProps> = ({}: ReviewProps) => {
  return (
    <S.Container>
      <S.Review>
        Review
        <br />
        sdfkjhkashfldk sdlkfjls <br />
        sdfkjhkashfldk sdlkfjls <br />
        sdfkjhkashfldk sdlkfjls <br />
        sdfkjhkashfldk sdlkfjls <br />
      </S.Review>
    </S.Container>
  );
};

export default Review;
