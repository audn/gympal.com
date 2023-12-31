import { useRouter } from 'next/router';
import concat from '../concat';

import { motion } from 'framer-motion';
function Header() {
  const route = [
    { label: 'Features', anchor: '/' },
    { label: 'Roadmap', anchor: 'roadmap' },
    { label: 'Careers', anchor: 'career' },
    { label: 'Twitter', anchor: 'twitter' },
  ];
  const header = {
    initial: { opacity: 0, y: -40 },
    enter: {
      scale: 1,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        type: 'spring',
        delay: 0.5,
        bounce: 0.4,
      },
    },
  };
  const router = useRouter();
  return (
    <motion.div animate="enter" exit="exit" initial="initial" variants={header}>
      <header className=" flex items-center justify-center fixed top-8 inset-x-0 z-50">
        <div className="px-4 py-2 shadow-lg rounded-full w-auto flex items-center bg-types-100 border border-[#2c2c2c]">
          <img src="/favicon/apple-touch-icon.png" className="w-6 h-6 mr-6" />
          <div className="flex items-center">
            {route.map((x) => {
              return (
                <button
                  key={x.label}
                  className={concat(
                    x.anchor == router.pathname
                      ? 'text-white/90 bg-[#2C2C2E]'
                      : 'text-white/80 hover:bg-[#2C2C2E]',
                    'px-3 py-1 rounded-full transition-all ease-out duration-200',
                  )}
                >
                  {x.label}
                </button>
              );
            })}
          </div>
        </div>
      </header>
    </motion.div>
  );
}

export default Header;
