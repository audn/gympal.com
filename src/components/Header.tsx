import { useRouter } from 'next/router';
import concat from '../concat';

import { motion } from 'framer-motion';
import Link from 'next/link';
function Header() {
  const route = [
    { label: 'Features', anchor: '/' },
    { label: 'Roadmap', anchor: '/2' },
    { label: 'Careers', anchor: '/3' },
    { label: 'Twitter', anchor: '/4' },
    { label: 'Twitter2', anchor: '/5' },
  ];
  const header = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: {
        duration: 1,
        //   type: 'spring',
        delay: 0.2,
        //     bounce: 0.4,
      },
    },
  };
  const router = useRouter();
  return (
    <motion.div
      animate="enter"
      exit="exit"
      initial="initial"
      variants={header}
      className="relative z-50"
    >
      <header className=" flex items-center justify-center fixed top-0 inset-x-0 z-50 bg-[#101010] border-b border-types-100">
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
