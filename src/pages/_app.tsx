import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import SEO from '../../next-seo.config';
import '../assets/css/style.css';
import TailwindBrekapoint from '../components/Breakpoints';
import Header from '../components/Header';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Header />
      <TailwindBrekapoint />
      <Component {...pageProps} key={router.route} />
    </>
  );
}
