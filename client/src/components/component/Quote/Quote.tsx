import React from 'react';
import * as S from './QuoteStyle';

interface Props {}

const Quote: React.FC<Props> = ({}: Props) => {
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
