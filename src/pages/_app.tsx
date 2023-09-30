import { AppProps } from 'next/app';
import '../assets/css/style.css';

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Component {...pageProps} key={router.route} />
    </>
  );
}
