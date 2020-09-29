import React from 'react';
import * as S from './SubHeaderStyle';
import { Button } from '../Button';
import { CategoryTab } from '../CategoryTab';

interface Props {}

const SubHeader: React.FC<Props> = ({}: Props) => {
  return (
    <S.Container>
      <Button />
      <CategoryTab />
    </S.Container>
  );
};

export default SubHeader;
