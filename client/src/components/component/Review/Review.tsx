import React from 'react';
import * as S from './ReviewStyle';

interface Props {}

const Review: React.FC<Props> = ({}: Props) => {
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
