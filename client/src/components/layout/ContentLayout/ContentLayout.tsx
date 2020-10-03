import React from 'react';
import * as S from './ContentLayoutStyle';

interface ContentLayoutProps {
  children: React.ReactNode;
}

const ContentLayout: React.FC<ContentLayoutProps> = ({
  children,
}: ContentLayoutProps) => {
  return <S.Container>{children}</S.Container>;
};

export default ContentLayout;
