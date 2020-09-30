import React from 'react';
import { Header } from '../components/Header';
import { SubHeader } from '../components/SubHeader';
import { EmptyBookCard } from '../components/EmptyBookCard';
import { ContentLayout } from '../components/ContentLayout';

const createPage: React.FC = () => {
  return (
    <>
      <Header />
      <ContentLayout>
        <EmptyBookCard />
      </ContentLayout>
    </>
  );
};

export default createPage;
