import { motion } from 'framer-motion';
import React, { FC, useEffect, useState } from 'react';
import Features from '../components/features/Features';

export default function Home() {
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
  console.log(offsetY);
  return (
    <main className={'h-full '}>
      <div className="max-h-screen flex-col pt-[200px] flex relative overflow-hidden items-center">
        <motion.div
          className="z-30 max-w-6xl h-screen mx-auto"
          animate="enter"
          exit="exit"
          initial="initial"
          variants={text}
          // style={{ transform: `translateY(-${offsetY * -0.2}px)` }}
        >
          {/* <div className="h-screen"> */}

          <h1 className="text-4xl font-bold text-white text-center ">
            Your new favorite fitness app
          </h1>
          <p className="text-center mt-4 font-regular text-xl ">
            An all-in-one app designed to track your diet, workout sessions and
            bodyweight.
          </p>
          <div className="mt-10">
            <DownloadButtons />
          </div>
          {/* </div> */}
        </motion.div>

        {/* <div className="absolute z-30 top-[46%] left-0 right-0 mx-auto justify-center flex items-center -space-x-16"> */}

        <motion.div
          className="relative flex items-center mt-24 z-30 space-x-[-150px]"
          animate="enter"
          exit="exit"
          initial="initial"
          variants={{
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
          }}
          // variants={{
          //   initial: { translateY: 1200 },
          //   enter: {
          //     translateY: 0,
          //     transition: {
          //       duration: 0.5 * (delay + 2),
          //       delay: delay * 0.3,
          //       type: 'spring',
          //       bounce: 0.1,
          //     },
          //   },
          // }}
        >
          <SwipeUpImage
            src={`/phones/sh1.svg`}
            delay={0.2}
            offsetY={offsetY * 0}
          />
          <SwipeUpImage
            src={`/phones/sh2.svg`}
            delay={0.4}
            offsetY={offsetY * -0.1}
          />
          <SwipeUpImage
            src={`/phones/sh3.svg`}
            delay={0.6}
            offsetY={offsetY * -0.2}
          />
        </motion.div>
      </div>
      <div
        style={{ transform: `translateY(-${offsetY * -0.5}px)` }}
        //   className="min-h-screen p-24 text-center mx-auto bg-types-50 flex justify-center items-start"
        className="min-h-screen py-24 text-center mx-auto border-t border-types-100 flex justify-center items-start"
      >
        <div className="flex flex-col">
          <div className="mb-20">
            <h1 className="text-3xl font-semibold text-white">
              Track, plan, and eat better with these features.
            </h1>
          </div>

          <Features />
        </div>
      </div>
      {/* </div> */}
    </main>
  );
}

const SwipeUpImage: FC<{
  src: string;
  delay: number;
  offsetY: number;
}> = ({ src, delay, offsetY }) => (
  <div>
    <img
      style={{
        transform: `translateY(${offsetY}px)`,
      }}
      src={src}
      className="h-auto w-[500px]"
    />
  </div>
);

const DownloadButtons: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
      <a
        href="#"
        className="px-4 h-[55px]  bg-white text-black rounded-xl flex items-center justify-center space-x-2  transition-colors duration-300"
        aria-label="Download on the App Store"
      >
        <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
        <div className="flex flex-col items-start">
          <span className="text-[12px]">Download on the</span>
          <span className="text-[20px] font-semibold font-sans -mt-2">
            App Store
          </span>
        </div>
      </a>

      <a
        href="#"
        className="px-4 h-[55px]  bg-white text-black rounded-xl flex items-center justify-center space-x-2  transition-colors duration-300"
        aria-label="Get it on Google Play"
      >
        <img src="/gp.svg" className="w-8 h-8" />
        <div className="flex flex-col items-start">
          <span className="text-[12px]">Get it on</span>
          <span className="text-[20px] font-semibold font-sans -mt-2">
            Google Play
          </span>
        </div>
      </a>
    </div>
  );
};
