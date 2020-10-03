import React, { useState, useEffect, useRef } from 'react';
import { Header } from '../components/container/Header';
import { SubHeader } from '../components/container/SubHeader';
import { EmptyBookCard } from '../components/component/EmptyBookCard';
import { ContentLayout } from '../components/layout/ContentLayout';
import { BookInfoContainer } from '../components/container/BookInfoContainer';
import { BookSearchModal } from '../components/modal/BookSearchModal';
import { ReviewAndQuoteContainer } from '../components/container/ReviewAndQuoteContainer';

const createPage: React.FC = () => {
  const [displaySearchModal, setDisplaySearchModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState();

  const openSearchModal = () => {
    setDisplaySearchModal(true);
  };

  return (
    <>
      {displaySearchModal && (
        <BookSearchModal
          setDisplaySearchModal={setDisplaySearchModal}
          setSelectedBook={setSelectedBook}
        />
      )}
      <Header />
      <ContentLayout>
        <BookInfoContainer
          openSearchModal={openSearchModal}
          selectedBook={selectedBook}
        />
        <ReviewAndQuoteContainer />
      </ContentLayout>
    </>
  );
};

export default createPage;
