import Link from 'next/link';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Sidebar } from '../components/Sidebar';

// const store = createStore(allReducer, composeWithDevTools());

const indexPage = () => {
  return (
    // <Provider store={store}>
      <Sidebar />
    // </Provider>
  );
};

export default indexPage;
