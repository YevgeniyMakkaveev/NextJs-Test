import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {


  render() {
    return (
      <Html>
       <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}