import React, { useRef, useState } from 'react';
import * as S from './CategoryTabStyle';

interface Props {}

const CategoryTab: React.FC<Props> = ({}: Props) => {
  const categoryListRef = useRef<any>();

  const outsideClickHandler = () => {
    window.addEventListener('click', (e: any) => {
      if (!e.target.closest('.CategoryTab')) {
        categoryListRef.current.style.display = 'none';
      }
    });
  };

  const toggleCategoryList = () => {
    outsideClickHandler();
    categoryListRef.current.style.display === 'none'
      ? (categoryListRef.current.style.display = 'block')
      : (categoryListRef.current.style.display = 'none');
  };

  return (
    <>
      <S.Container className="CategoryTab" onClick={toggleCategoryList}>
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
