import React from 'react';
import * as S from './QuoteContainerStyle';

interface Props {}

const QuoteContainer: React.FC<Props> = ({}: Props) => {
  return (
    <S.Container>
      <S.Quote>
        Quote <br />
        sdfkjhkashfldk sdlkfjls <br />
        sdfkjhkashfldk sdlkfjls <br />
        sdfkjhkashfldk sdlkfjls <br />
        sdfkjhkashfldk sdlkfjls <br />
      </S.Quote>
    </S.Container>
  );
};

export default QuoteContainer;
