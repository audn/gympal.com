import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

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
        <motion.div
          animate="enter"
          className="top-24 absolute -left-14 "
          exit="exit"
          initial="initial"
          variants={scaleIn}
        >
          <div
            className="relative z-50"
            style={{
              transform: `translateY(${offsetY * 0.2}px)`,
            }}
          >
            <img src={`/phone.png`} className="h-auto w-[500px] -rotate-12" />
          </div>
        </motion.div>
        <motion.div
          animate="enter"
          exit="exit"
          initial="initial"
          className="-bottom-10  -right-14 absolute"
          // className="top-10 absolute -right-14 "
          variants={scaleIn}
        >
          <div
            className="relative z-50"
            style={{
              transform: `translateY(${offsetY * 0.2}px)`,
            }}
          >
            <img
              src={`/nutrition.png`}
              className="h-auto w-[400px] rotate-12"
            />
          </div>
        </motion.div>
      </div>
      <div
        style={{ transform: `translateY(-${offsetY * -0.5}px)` }}
        className="min-h-screen p-24 text-center mx-auto bg-gradient-to-t from-types-50 to-types-100 flex justify-center items-start"
      >
        <h1 className="text-2xl font-semibold">Powerful and customizable</h1>
      </div>
      {/* </div> */}
    </main>
  );
}
