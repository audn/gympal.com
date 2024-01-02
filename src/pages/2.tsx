import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Features from '../components/features/Features';
import LeftPhone from '../components/phones/LeftPhone';
import RightPhone from '../components/phones/RightPhone';

export default function Home() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scaleIn = {
    initial: { opacity: 0, scale: 0.95 },
    enter: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        type: 'spring',
        bounce: 0.4,
      },
    },
  };
  const text = {
    initial: { opacity: 0, translateY: 0, scale: 0.95 },
    enter: {
      translateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        type: 'spring',
        bounce: 0.4,
      },
    },
  };
  return (
    <main className={'h-full '}>
      <div className="min-h-screen  flex relative overflow-hidden items-center justify-center bg-gradient-to-t from-types-50 to-types-100 ">
        <motion.div
          className="z-30 max-w-6xl mx-auto"
          animate="enter"
          exit="exit"
          initial="initial"
          variants={text}
          // style={{ transform: `translateY(-${offsetY * -0.2}px)` }}
        >
          <div
            className="max-w-md mx-auto"
            style={{
              transform: `translateY(${offsetY * 0.5}px)`,
            }}
          >
            <h1 className="text-5xl font-semibold flex text-center leading-[60px]">
              Your new favorite fitness app 😎
            </h1>
            <p className="text-white/50 text-center mt-4 font-regular text-lg leading-9">
              The only app that partners with you for exploring your diet and
              creating personalized plans
            </p>
          </div>
        </motion.div>
        <LeftPhone offsetY={offsetY} />
        <RightPhone offsetY={offsetY} />
      </div>
      <div
        style={{ transform: `translateY(-${offsetY * -0.5}px)` }}
        className="min-h-screen p-24 text-center mx-auto bg-gradient-to-t from-types-50 to-types-100 flex justify-center items-start"
      >
        <div className="flex flex-col">
          <div className="mb-12">
            <h1 className="text-3xl font-medium">Powerful and customizable</h1>
            <p className="text-lg mt-2 text-on-100">
              We’ve built Gympal to adapt to your needs
            </p>
          </div>

          <Features />
        </div>
      </div>
      {/* </div> */}
    </main>
  );
}
