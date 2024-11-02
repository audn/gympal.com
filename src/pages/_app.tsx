import { Analytics } from '@vercel/analytics/react';
import { DefaultSeo } from 'next-seo';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import SEO from '../../next-seo.config';
import '../assets/css/style.css';
import Header from '../components/Header';

export default function App({ Component, pageProps, router }: AppProps) {
  const queryClient = new QueryClient();
  return (
    <>
      <DefaultSeo {...SEO} />
      <Header />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} key={router.route} />
      </QueryClientProvider>
      <Analytics />
    </>
  );
}
