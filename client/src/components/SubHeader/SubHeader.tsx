import React from 'react';
import Link from 'next/link';
import * as S from './SubHeaderStyle';
import { Button } from '../Button';
import { CategoryTab } from '../CategoryTab';

interface Props {}

const SubHeader: React.FC<Props> = ({}: Props) => {
  return (
    <S.Container>
      <Link href="/create">
        <a>
          <Button label="추가하기" />
        </a>
      </Link>
      <CategoryTab />
    </S.Container>
  );
};

export default SubHeader;
