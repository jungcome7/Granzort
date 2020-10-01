import React from 'react';
import { Header } from '../components/Header';
import { SubHeader } from '../components/SubHeader';
import { EmptyBookCard } from '../components/EmptyBookCard';
import { ContentLayout } from '../components/ContentLayout';
import { BookInfoContainer } from '../components/BookInfoContainer';

const createPage: React.FC = () => {
  return (
    <>
      <Header />
      <ContentLayout>
        <BookInfoContainer />
      </ContentLayout>
    </>
  );
};

export default createPage;
