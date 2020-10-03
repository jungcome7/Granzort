import React, { useRef, useState } from 'react';
import * as S from './CategoryTabStyle';

interface CategoryTabProps {}

const CategoryTab: React.FC<CategoryTabProps> = ({}: CategoryTabProps) => {
  const categoryListRef = useRef<any>();

  const toggleCategoryList = () => {
    categoryListRef.current.style.display === 'none' ||
    categoryListRef.current.style.display === ''
      ? (categoryListRef.current.style.display = 'block')
      : (categoryListRef.current.style.display = 'none');
  };

  return (
    <>
      <S.Container className="category-tab" onClick={toggleCategoryList}>
        <S.SelectedCategoryContainer>
          <S.SelectedCategory>initial</S.SelectedCategory>
          <S.ExpandMoreIcon />
        </S.SelectedCategoryContainer>
        <S.CategoryList ref={categoryListRef}>
          <S.CategoryItem>1adfasdf</S.CategoryItem>
          <S.CategoryItem>2asdfadsfa</S.CategoryItem>
          <S.CategoryItem>3sadf</S.CategoryItem>
          <S.CategoryItem>3asdfasdf</S.CategoryItem>
          <S.CategoryItem>sadf3</S.CategoryItem>
          <S.CategoryItem>asdf3</S.CategoryItem>
        </S.CategoryList>
      </S.Container>
    </>
  );
};

export default CategoryTab;
