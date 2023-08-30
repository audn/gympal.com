import { AppProps } from 'next/app';
import '../assets/css/style.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { DefaultSeo } from 'next-seo';
import SEO from '../../next-seo.config';
const queryClient = new QueryClient();

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <DefaultSeo {...SEO} />
    coming soon.. 
      <p>audun.gg</p>
    </QueryClientProvider>
  );
}
