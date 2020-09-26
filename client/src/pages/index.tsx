import Link from 'next/link';
import React from 'react';
import Head from 'next/head';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import App from './App'

const store = createStore(allReducer, composeWithDevTools());

const indexPage = () => {
  return (
    <Provider store={store}>
      <Head>
        <title>메인페이지</title>
      </Head>
      <Layout>
        <App />
      </Layout>
    </Provider>
  );
};

export default indexPage;
