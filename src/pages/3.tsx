import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Features from '../components/features/Features';

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
      <div className="min-h-screen flex-col pt-[150px] flex relative overflow-hidden items-center justify-center bg-types-50 ">
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
            <div className="relative mt-12 flex items-center justify-center">
              <input
                className="bg-types-100 h-[50px] w-full border border-[#2C2C2E] rounded-full px-6 py-2 "
                placeholder="Type your email here to get started!"
              />
              <div className="absolute right-2">
                <button className="bg-white text-black px-4 text-sm flex items-center font-bold py-2 rounded-full">
                  Join Waitlist
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          animate="enter"
          exit="exit"
          initial="initial"
          variants={scaleIn}
        >
          <div
            className="relative z-30 mt-24"
            style={{
              transform: `translateY(${offsetY * 0.2}px)`,
            }}
          >
            <img src={`/phone.png`} className="h-auto w-[500px] " />
          </div>
        </motion.div>
      </div>
      <div
        style={{ transform: `translateY(-${offsetY * -0.5}px)` }}
        //   className="min-h-screen p-24 text-center mx-auto bg-types-50 flex justify-center items-start"
        className="min-h-screen p-20 text-center mx-auto border-t border-types-100 flex justify-center items-start"
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
