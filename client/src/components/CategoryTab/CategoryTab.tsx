import React from 'react';
import * as S from './CategoryTabStyle';

interface Props {}

const CategoryTab: React.FC<Props> = ({}: Props) => {
  return (
    <>
      <S.Container>
        <S.SelectedCategoryContainer>
          <S.SelectedCategory>this is selected</S.SelectedCategory>
          <S.ExpandMoreIcon />
        </S.SelectedCategoryContainer>
        <S.CategoryList>
          <S.CategoryItem>1</S.CategoryItem>
          <S.CategoryItem>2</S.CategoryItem>
          <S.CategoryItem>3</S.CategoryItem>
          <S.CategoryItem>3</S.CategoryItem>
          <S.CategoryItem>3</S.CategoryItem>
          <S.CategoryItem>3</S.CategoryItem>
        </S.CategoryList>
      </S.Container>
    </>
  );
};

export default CategoryTab;
