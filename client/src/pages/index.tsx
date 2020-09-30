import Link from 'next/link';
import React from 'react';
import { Header } from '../components/Header';
import { SubHeader } from '../components/SubHeader';
import { BookCardContainer } from '../components/BookCardContainer';


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
