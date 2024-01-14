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
    { label: 'About', anchor: '/' },
    { label: 'Features', anchor: '/#features' },
    { label: 'Roadmap', anchor: '/3' },
    { label: 'Team', anchor: '/4' },
  ];

  const router = useRouter();
  console.log(router);

  return (
    <motion.header
      animate="enter"
      exit="exit"
      initial="initial"
      variants={fadeIn}
      className={concat(
        offsetY > 750
          ? 'bg-[#0c0c0c] border-[#161616] '
          : offsetY > 50
          ? 'bg-[#0c0c0c]/50 border-[#0c0c0c] '
          : 'border-transparent bg-transparent',
        'flex items-center backdrop-blur justify-center fixed transition-all ease-out duration-200 top-0 inset-x-0 z-50 border-b  ',
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
                    x.anchor == router.asPath
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
    </motion.header>
  );
}

export default Header;
