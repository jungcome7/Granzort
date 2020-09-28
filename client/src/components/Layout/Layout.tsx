import { Navbar } from '../Navbar';
import Head from 'next/head';

const Layout = ({ children }: any) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
