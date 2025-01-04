import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import concat from '../concat';
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
function NavItems({
  router,
  closeMenu,
}: {
  router: NextRouter;
  closeMenu: () => void;
}) {
  const route = [
    { label: 'Home', anchor: '/' },
    { label: 'Roadmap', anchor: '/roadmap' },
    // { label: 'Download', anchor: '/download' },
  ];

  return (
    <>
      {route.map((x) => (
        <Link href={x.anchor} key={x.label}>
          <button
            onClick={closeMenu}
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
      ))}
      <div className="mt-1 sm:mt-0 sm:pl-4">
        <a href="https://discord.gg/Q3dQj2Kqzm">
          <button
            onClick={closeMenu}
            className={
              'bg-[#5865F2] px-3 text-white group py-2 w-full text-left sm:text-center rounded-md sm:rounded-full flex items-center transition-all ease-out duration-200'
            }
          >
            <i className="fa-brands fa-discord group-hover:scale-110 transition-all ease-out duration-200" />
            <div className="sm:hidden flex ml-2">
              <span className="text-white/80">Join Discord</span>
            </div>
          </button>
        </a>
      </div>
    </>
  );
}

function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header
      className={concat(
        'flex items-center bg-types-50 justify-center sticky transition-all ease-out duration-200 top-0 z-50 px-6',
      )}
    >
      <div className="h-[71px] bg-types-50 md:h-[80px] w-full max-w-6xl mx-auto flex items-center justify-between relative">
        <Link href={'/'} className="flex items-center">
          <button className="flex items-center">
            <img src="/logo-text-white.svg" className="w-24 mr-2" />
          </button>
        </Link>
        <nav className="flex sm:hidden" ref={navRef}>
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
                className="absolute inset-x-0 p-3 border border-[#2C2C2E] bg-types-100 rounded-xl top-16 right-0"
              >
                <NavItems router={router} closeMenu={() => setIsOpen(false)} />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </nav>
        <div className="hidden px-4 py-2 border border-[#2C2C2E] rounded-full bg-[#1C1C1C] sm:flex space-x-2 items-center">
          <NavItems router={router} closeMenu={() => setIsOpen(false)} />
        </div>
      </div>
    </header>
  );
}

export default Header;
