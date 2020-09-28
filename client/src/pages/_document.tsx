import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>임시 타이틀</title>
          {/* // 여기에 폰트 임포팅 // 여기에 공통 CSS e.g.reset-css/common.css */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
