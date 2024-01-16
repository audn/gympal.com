import { NextRouter, useRouter } from 'next/router';
import concat from '../concat';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { menu } from '../utils';
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
function NavItems({ router }: { router: NextRouter }) {
  const route = [
    { label: 'About', anchor: '/' },
    { label: 'Features', anchor: '/#features' },
    { label: 'Roadmap', anchor: '/roadmap' },
    //     { label: 'Team', anchor: '/team ' },
  ];
  return (
    <>
      {route.map((x) => {
        return (
          <Link href={x.anchor}>
            <button
              key={x.label}
              className={concat(
                x.anchor == router.asPath
                  ? 'text-white/90 bg-[#2C2C2E]'
                  : 'text-white/80 hover:bg-[#2C2C2E]',
                'px-3 py-2 sm:py-1 w-full text-left sm:text-center rounded-md sm:rounded-full block transition-all ease-out duration-200',
              )}
            >
              {x.label}
            </button>
          </Link>
        );
      })}
    </>
  );
}
function Header() {
  const [offsetY, setOffsetY] = useState(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const router = useRouter();
  const isHomepage = router?.asPath == '/';
  console.log(router);

  return (
    <motion.header
      animate="enter"
      exit="exit"
      initial="initial"
      variants={fadeIn}
      className={concat(
        isHomepage
          ? concat(
              'backdrop-blur ',
              offsetY > 750
                ? 'bg-[#0c0c0c] border-[#161616] '
                : offsetY > 50
                ? 'bg-[#0c0c0c]/50 border-[#0c0c0c] '
                : 'border-transparent bg-transparent',
            )
          : 'border-[#161616] bg-[#0F0F0F]',
        'flex items-center justify-center fixed transition-all ease-out duration-200 top-0 inset-x-0 z-50 border-b px-6',
      )}
    >
      <div className="h-[71px] md:h-[80px] w-full max-w-6xl mx-auto flex items-center justify-between">
        <Link href={'/'} className="flex items-center">
          <button className="flex items-center">
            <img src="/favicon/apple-touch-icon.png" className="w-6 h-6 mr-2" />
            <h3 className="font-medium">Gympal</h3>
          </button>
        </Link>
        <nav className="flex sm:hidden">
          <button
            className={concat(
              isOpen ? 'bg-types-100' : '',
              'w-10 h-10 outline-none rounded-md flex items-center justify-center',
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className="fa-solid fa-bars text-lg" />
          </button>
          <AnimatePresence>
            {isOpen ? (
              <motion.div
                animate="open"
                exit="closed"
                initial="closed"
                variants={menu}
                className="fixed inset-x-1 p-3 bg-types-100 rounded-xl top-16  mx-5"
              >
                <NavItems router={router} />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </nav>

        <div className="hidden sm:flex space-x-2 items-center">
          <NavItems router={router} />
        </div>
      </div>
    </motion.header>
  );
}

export default Header;
