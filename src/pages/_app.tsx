import { Analytics } from '@vercel/analytics/react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import SEO from '../../next-seo.config';
import '../assets/css/style.css';
import Header from '../components/Header';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      {!router.asPath.includes('/shared') ? <Header /> : null}
      <Component {...pageProps} key={router.route} />
      <Analytics />
    </>
  );
}
