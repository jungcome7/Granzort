import Link from 'next/link';
import React from 'react';
import { Header } from '../components/container/Header';
import { SubHeader } from '../components/container/SubHeader';
import { BookCardContainer } from '../components/container/BookCardContainer';


const indexPage = () => {
  return (
    <>
      <Header />
      <SubHeader />
      <BookCardContainer />
    </>
  );
};

export default indexPage;
