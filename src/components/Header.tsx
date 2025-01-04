import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import concat from '../concat';

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
                ? 'text-white bg-types-175 '
                : 'text-white/80 ',
              'px-3 py-2 sm:py-1 w-full text-left sm:text-center rounded-lg transition-all ease-out duration-200 hover:bg-types-100',
            )}
          >
            {x.label}
          </button>
        </Link>
      ))}
      <div className="flex sm:hidden mt-1  sm:mt-0 sm:pl-4">
        <a href="https://discord.gg/Q3dQj2Kqzm" className="w-full">
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
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => {
    if (window.pageYOffset < 600) {
      setOffsetY(window.pageYOffset);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
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
        offsetY > 80 ? 'border-types-150' : 'border-transparent',
        'flex items-center border-b bg-types-50 justify-center sticky transition-all ease-out duration-200 top-0 z-50 px-6',
      )}
    >
      <div className="justify-between sm:justify-start h-[71px] md:h-[80px] w-full max-w-6xl mx-auto flex items-center gap-10 relative">
        <Link href={'/'} className="flex items-center">
          <button className="flex shrink-0  items-center">
            <img src="/logo-text-white.svg" className="w-24 mr-2" />
          </button>
        </Link>
        {/* <nav className="flex sm:hidden" ref={navRef}>
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
                className="absolute inset-x-0 p-3 border border-[#2C2C2E] bg-types-100 rounded-xl space-y-2 top-16 right-0"
              >
                <NavItems router={router} closeMenu={() => setIsOpen(false)} />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </nav> */}
        <div className="justify-end w-full flex space-x-2 items-center">
          {/* <div className="flex space-x-2 items-center">
            <NavItems router={router} closeMenu={() => setIsOpen(false)} />
          </div>*/}
          <div className="mt-1 sm:mt-0 sm:pl-4">
            <a href="https://discord.gg/Q3dQj2Kqzm">
              <button
                onClick={() => setIsOpen(false)}
                className={
                  'bg-[#5865F2] px-5 text-white group py-1.5 w-full text-left sm:text-center gap-2 rounded-full flex items-center transition-all ease-out duration-200'
                }
              >
                <i className="fa-brands fa-discord group-hover:scale-110 transition-all ease-out duration-200" />
                <span className="text-white/80 font-semibold">
                  Join Discord
                </span>
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
