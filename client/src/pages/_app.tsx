import App, { AppProps, AppContext, AppInitialProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import { getMainCategories } from '../../apis/api';
import { MainCategory } from '../../../types';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import allReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

interface InitialProps {
  mainCategory: MainCategory[];
}

const store = createStore(allReducer, composeWithDevTools());

const MyApp = ({
  Component,
  pageProps,
  mainCategory,
}: AppProps & InitialProps) => {
  return (
    <>
      <Provider store={store} >
        <GlobalStyle />
        <Component {...pageProps} />
      </Provider>
    </>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);

  const mainCategory = await getMainCategories();
  return { ...appProps, mainCategory };
};

export default App;
