import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { SubHeader } from '../components/SubHeader';
import { EmptyBookCard } from '../components/EmptyBookCard';
import { ContentLayout } from '../components/ContentLayout';
import { BookInfoContainer } from '../components/BookInfoContainer';
import { BookSearchModal } from '../components/BookSearchModal';

const createPage: React.FC = () => {
  const [displaySearchModal, setDisplaySearchModal] = useState(false);

  const openSearchModal = () => {
    setDisplaySearchModal(true);
    console.log('clicked');
  };

  useEffect(() => {}, [displaySearchModal]);

  return (
    <>
      {displaySearchModal && (
        <BookSearchModal setDisplaySearchModal={setDisplaySearchModal} />
      )}
      <Header />
      <ContentLayout>
        <BookInfoContainer openSearchModal={openSearchModal} />
      </ContentLayout>
    </>
  );
};

export default createPage;
