import { useRouter } from 'next/router';
import concat from '../concat';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
export const fadeIn = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: {
      duration: 1,
      delay: 0.7,
    },
  },
};
function Header() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const route = [
    { label: '1', anchor: '/' },
    { label: '2', anchor: '/2' },
    { label: '3', anchor: '/3' },
    { label: '4', anchor: '/4' },
    { label: '5', anchor: '/5' },
    { label: '6', anchor: '/6' },
  ];

  const router = useRouter();
  return (
    <motion.div
      animate="enter"
      exit="exit"
      initial="initial"
      variants={fadeIn}
      className="relative z-50"
    >
      <header
        className={concat(
          offsetY > 50
            ? 'bg-[#101010]/90 border-types-100 '
            : 'border-transparent bg-transparent',
          'flex items-center backdrop-blur justify-center fixed transition-all ease-out duration-200 top-0 inset-x-0 z-50 border-b ',
        )}
      >
        <div className="px-4 h-[80px] w-full max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center">
            <img src="/favicon/apple-touch-icon.png" className="w-6 h-6 mr-2" />
            <h3 className="font-medium">Gympal</h3>
          </div>
          <div className="hidden md:flex items-center">
            {route.map((x) => {
              return (
                <Link href={x.anchor}>
                  <button
                    key={x.label}
                    className={concat(
                      x.anchor == router.pathname
                        ? 'text-white/90 bg-[#2C2C2E]'
                        : 'text-white/80 hover:bg-[#2C2C2E]',
                      'px-3 py-1 rounded-full block transition-all ease-out duration-200',
                    )}
                  >
                    {x.label}
                  </button>
                </Link>
              );
            })}
          </div>
        </div>
      </header>
    </motion.div>
  );
}

export default Header;
