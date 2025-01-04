import Link from 'next/link';
import { useEffect, useState } from 'react';
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

function Header() {
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
