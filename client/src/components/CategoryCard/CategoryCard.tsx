import Link from 'next/link';
import * as S from './CategoryCardStyle';

interface CategoryCardProps {
  mainCategoryTitle : string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({mainCategoryTitle} : CategoryCardProps) => {
  return (
    <S.Container>
      <S.Text>{mainCategoryTitle}</S.Text>
    </S.Container>
  );
};

export default CategoryCard;
