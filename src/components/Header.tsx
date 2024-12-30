import { NextRouter, useRouter } from 'next/router';
import concat from '../concat';

import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
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
    { label: 'Home', anchor: '/' },
    // { label: 'Features', anchor: '/#features' },
    { label: 'Roadmap', anchor: '/roadmap' },
    { label: 'Download', anchor: '/download' },
    // { label: 'Team', anchor: '/team' },
  ];
  // console.log(router);

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
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const router = useRouter();

  return (
    <header
      className={concat(
        'flex items-center bg-types-50 justify-center fixed transition-all ease-out duration-200 top-0 inset-x-0 z-50  px-6',
      )}
    >
      <div className="h-[71px] bg-types-50 md:h-[80px] w-full max-w-6xl mx-auto flex items-center justify-between">
        {/* <Link href={'/'} className="flex items-center">
          <button className="flex items-center">
            <h1 className="text-xl font-medium flex items-center">
              <img src="/icon-cut.png" className="w-10 h-10 mr-2" />
              Gympal
            </h1>
          </button>
        </Link> */}
        <Link href={'/'} className="flex items-center">
          <button className="flex items-center">
            <img src="/logo-text-white.svg" className="w-24 mr-2" />
            {/* <h3 className="font-medium md:text-xl">Gympal</h3> */}
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
    </header>
  );
}

export default Header;
