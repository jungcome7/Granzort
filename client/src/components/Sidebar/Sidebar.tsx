import React, { useEffect, useState } from 'react';
import * as S from './SidebarStyle';
import { CategoryCard } from '../CategoryCard';
import { getMainCategories } from '../../../apis/api';
import { MainCategory } from '../../../../types';

const Sidebar: React.FC = () => {
  const [mainCategory, setMainCategory] = useState([]);

  const getMainCategory = async () => {
    const mainCat = await getMainCategories();
    setMainCategory(mainCat)
  };

  useEffect(() => {
    getMainCategory();
  },[]);

  console.log(mainCategory)
  return (

    <S.Container>
      {mainCategory && mainCategory.map((category:MainCategory) => (
        <CategoryCard key={category.id} mainCategoryTitle={category.title}/>
      ))}

    </S.Container>
  );
};

export default Sidebar;
