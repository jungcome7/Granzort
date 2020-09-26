import Link from 'next/link';
import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';

const indexPage = () => {
  return (
    <>
      <Head>
        <title>메인페이지</title>
      </Head>
      <Layout>
        <div>
          g111g
          <div>
            <Link href="/playground">
              <a>go playground</a>
            </Link>
          </div>
          <div>
            <a href="/playground">go playground without link</a>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default indexPage;
