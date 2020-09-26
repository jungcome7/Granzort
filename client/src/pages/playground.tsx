import Link from 'next/link';
import Head from 'next/head';

export default () => {
  return (
    <>
      <div>
        <Head>
          <title>PlayGround페이지</title>
        </Head>
      </div>
      <div>
        <h1>playground</h1>
        <p>welcome to playground.</p>
        <div>
          <Link href="/">Home</Link>
        </div>
        <div>
          <a href="/">Home without link</a>
        </div>
      </div>
    </>
  );
};
