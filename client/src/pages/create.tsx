import React, { useState, useEffect, useRef } from 'react';
import { Header } from '../components/Header';
import { SubHeader } from '../components/SubHeader';
import { EmptyBookCard } from '../components/EmptyBookCard';
import { ContentLayout } from '../components/ContentLayout';
import { BookInfoContainer } from '../components/BookInfoContainer';
import { BookSearchModal } from '../components/BookSearchModal';
import { ReviewAndQuoteContainer } from '../components/ReviewAndQuoteContainer';

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
