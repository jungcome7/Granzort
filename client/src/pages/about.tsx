import Link from 'next/link';
import React from 'react';

import Head from 'next/head';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>메인페이지</title>
      </Head>
      <Link href="/">
        <a>go Home</a>
      </Link>
    </>
  );
};

export default AboutPage;
