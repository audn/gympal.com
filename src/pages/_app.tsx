import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import SEO from '../../next-seo.config';
import '../assets/css/style.css';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} key={router.route} />
    </>
  );
}
