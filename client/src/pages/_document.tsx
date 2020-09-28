import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {

  // static async getInitialProps(ctx:any) {
  //   /* styled-component 적용이 안 되는 문제를 해결하기 위한 코드*/
  //   const sheet = new ServerStyleSheet();
  //   const originalRenderPage = ctx.renderPage;
  //   try {
  //     ctx.renderPage = () =>
  //       originalRenderPage({
  //         enhanceApp: (App:any) => (props:any) =>
  //           sheet.collectStyles(<App {...props} />),
  //       });

  //     const initialProps = await Document.getInitialProps(ctx);
  //     return {
  //       ...initialProps,
  //       styles: (
  //         <>
  //           {initialProps.styles}
  //           {sheet.getStyleElement()}
  //         </>
  //       ),
  //     };
  //   } finally {
  //     sheet.seal();
  //   }
  // }

  render() {
    return (
      <Html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
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
