import React from 'react';
import * as S from './BookCardContainerStyle';
import { BookCard } from '../BookCard';

interface Props {

}

const BookCardContainer: React.FC<Props> = ({data}: Props) => {
  return (
    <S.Container>
        {data.map((dat:any) =>(<BookCard data={dat}/>))}
    </S.Container>
  );
};

export default BookCardContainer;
