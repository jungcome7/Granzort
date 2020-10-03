import React from 'react';
import Link from 'next/link';
import * as S from './SubHeaderStyle';
import { Button } from '../../component/Button';
import { CategoryTab } from '../../component/CategoryTab';

interface SubHeaderProps {}

const SubHeader: React.FC<SubHeaderProps> = ({}: SubHeaderProps) => {
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
