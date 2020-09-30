import App, { AppProps, AppContext, AppInitialProps } from 'next/app';
import GlobalStyle from '../styles/GlobalStyle';
import { getMainCategories } from '../../apis/api';
import { MainCategory } from '../../../types';
import { composeWithDevTools } from 'redux-devtools-extension';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};

MyApp.getInitialProps = async (appContext: AppContext) => {
  const appProps = await App.getInitialProps(appContext);
  return { ...appProps };
};

export default MyApp;
