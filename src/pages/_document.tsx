import Document, { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default class extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="application-TileColor" content="#000" />
          {/* <meta name="apple-itunes-app" content="app-id=6468906558" /> */}
          <meta name="theme-color" content="#000" />
          <link rel="shortcut icon" href="/favicon/favicon.ico" />
          <Script
            src="https://kit.fontawesome.com/84c3028184.js"
            crossOrigin="anonymous"
            strategy="beforeInteractive"
          />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700;900&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
