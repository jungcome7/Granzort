import React from 'react';
import * as S from './QuoteStyle';

interface QuoteProps {}

const Quote: React.FC<QuoteProps> = ({}: QuoteProps) => {
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

export default Quote;
