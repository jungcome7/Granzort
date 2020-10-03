import React, { useState } from 'react';
import { Header } from '../components/container/Header';
import { ContentLayout } from '../components/layout/ContentLayout';
import { BookInfoContainer } from '../components/container/BookInfoContainer';
import { BookSearchModal } from '../components/modal/BookSearchModal';
import { ReviewAndQuoteContainer } from '../components/container/ReviewAndQuoteContainer';
import { Book } from '../../../types/book';

const createPage = () => {
  const [displaySearchModal, setDisplaySearchModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState<Book>();

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
