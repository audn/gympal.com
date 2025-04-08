import { Analytics } from '@vercel/analytics/react';
import { AnimatePresence, motion } from 'framer-motion';
import { DefaultSeo } from 'next-seo';
import Link from 'next/link';
import { useEffect } from 'react';
import SEO from '../../next-seo.config';
import '../assets/css/style.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function App({ Component, pageProps, router }: any) {
  useEffect(() => {
    const sendCurrentUrl = async () => {
      await fetch('/api/webhook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          variant: router.query.r,
          userAgent: navigator.userAgent,
        }),
      });
    };
    if (router.query.r) {
      sendCurrentUrl();
    }
  }, [router.query.r]);

  return (
    <div className="bg-types-50">
      <DefaultSeo {...SEO} />
      <motion.div
        animate="enter"
        exit="exit"
        className="inline"
        initial="initial"
        variants={{
          initial: { opacity: 0 },
          enter: {
            opacity: 1,
            transition: {
              delay: 0.125,
              duration: 1.75,
              ease: [0.25, 0.46, 0.45, 0.94],
              damping: 100,
              stiffness: 20,
            },
          },
        }}
      >
        {router.pathname !== '/shared/meal/[id]' ? (
          <div className="bg-brand-primary-100 z-[60] py-4  px-6 w-full">
            <div className="max-w-6xl mx-auto ">
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <p className="font-medium text-center sm:text-left text-white">
                  Gympal is an early-stage app, and we're working hard to make
                  it even better for you.
                </p>
                <Link title="Find out more!" href="/blog/what-to-expect">
                  <button className="text-types-100 shrink-0 font-medium bg-white px-3 py-1 rounded-full">
                    Find out more!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : null}

        <Header />
      </motion.div>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
        {router.pathname !== '/shared/meal/[id]' ? <Footer /> : null}{' '}
      </AnimatePresence>
      <Analytics />
    </div>
  );
}
