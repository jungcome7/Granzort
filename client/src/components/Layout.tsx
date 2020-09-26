import Navbar from '../components/Navbar';
import Head from 'next/head';

const Layout = ({ children }: any) => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.5.2/cerulean/bootstrap.min.css"
        />
      </Head>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
