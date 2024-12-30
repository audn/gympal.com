import { motion } from 'framer-motion';
import React, { FC, useEffect, useState } from 'react';
import Features from '../components/features/Features';
import SectionFour from '../components/features/Macros';
import SectionTwo from '../components/features/MoreThan';
import SectionThree from '../components/features/Servings';
import Footer from '../components/Footer';

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

  const content = {
    initial: { opacity: 0, y: 40 },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        damping: 100,
        stiffness: 20,
      },
    },
  };
  return (
    <main className={'h-full '}>
      <div className="px-6 bg-types-50">
        <div className="max-h-screen  flex-col pt-[150px] flex relative overflow-hidden items-center">
          <div
            className="z-30 max-w-6xl h-screen mx-auto"

            // style={{ transform: `translateY(-${offsetY * -0.2}px)` }}
          >
            {/* <div className="h-screen"> */}

            {/* <h1 className="text-4xl font-bold text-white text-center ">
            Your new favorite fitness app
          </h1> */}
            <h1 className="text-6xl max-w-sm  mx-auto font-bold text-white text-center">
              {'Your new favorite fitness app'.split(' ').map((x, i) => (
                <motion.span
                  animate="enter"
                  className="inline-block relative "
                  exit="exit"
                  initial="initial"
                  variants={{
                    initial: { opacity: 0, y: '100%', rotateX: '-45deg' },
                    enter: {
                      y: 0,
                      rotateX: 0,
                      opacity: 1,
                      transition: {
                        duration: 0.4,
                        delay: 0.2 * (i / 2),
                        ease: [0.25, 0.46, 0.45, 0.94],
                        damping: 100,
                        stiffness: 20,
                      },
                    },
                  }}
                >
                  {x}&nbsp;
                </motion.span>
              ))}
            </h1>
            <motion.div
              animate="enter"
              className="space-y-8 relative max-w-md"
              exit="exit"
              initial="initial"
              variants={content}
            >
              <p className="text-center mt-8 font-regular text-xl ">
                An all-in-one app designed to track your diet, workout sessions
                and bodyweight.
              </p>

              <DownloadButtons />
            </motion.div>
            {/* </div> */}
          </div>

          {/* <div className="absolute z-30 top-[46%] left-0 right-0 mx-auto justify-center flex items-center -space-x-16"> */}

          <div className="relative flex items-center mt-24 z-30 space-x-[-150px]">
            <motion.div
              variants={{
                initial: {
                  rotate: -15,
                  opacity: 0,
                  y: 100,
                },
                enter: {
                  transition: {
                    duration: 0.6,
                    delay: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    damping: 100,
                    stiffness: 20,
                  },
                  rotate: 0,
                  y: 0,
                  opacity: 1,
                },
              }}
              animate="enter"
              initial="initial"
            >
              <div
                style={{
                  transform: `rotate3d(1, 1, 1, ${-351 + offsetY * 0.005}deg)`,
                }}
              >
                <SwipeUpImage
                  src={`/phones/sr1.svg`}
                  delay={0.2}
                  offsetY={offsetY * -0.1}
                />
              </div>
            </motion.div>
            <motion.div
              className="z-20"
              variants={{
                initial: {
                  opacity: 0,
                  y: 100,
                },
                enter: {
                  transition: {
                    duration: 0.6,
                    delay: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    damping: 100,
                    stiffness: 20,
                  },
                  y: 0,
                  opacity: 1,
                },
              }}
              animate="enter"
              initial="initial"
            >
              <div
                className="z-20"
                style={{
                  filter: `drop-shadow(0 0 16px rgba(0, 0, 0, 0.9))`,
                }}
              >
                <SwipeUpImage
                  src={`/phones/mid.svg`}
                  delay={0.4}
                  offsetY={offsetY * -0.3}
                />
              </div>
            </motion.div>
            <motion.div
              variants={{
                initial: {
                  rotate: 4,
                  y: 100,
                  opacity: 0,
                },
                enter: {
                  transition: {
                    duration: 0.6,
                    delay: 0.8,
                    ease: [0.25, 0.46, 0.45, 0.94],
                    damping: 100,
                    stiffness: 20,
                  },
                  rotate: 0,
                  y: 0,
                  opacity: 1,
                },
              }}
              animate="enter"
              initial="initial"
            >
              <div
                style={{
                  transform: `rotate3d(1, 1, 1, ${offsetY * -0.009}deg)`,
                }}
              >
                <SwipeUpImage
                  src={`/phones/sh3.svg`}
                  delay={0.6}
                  offsetY={offsetY * -0.2}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="px-6 ">
        <div className="bg-[#101010] gap-[5.75rem] py-12 sm:py-[6.25rem] text-center mx-auto border-t border-types-100 flex justify-center items-start">
          <div className="flex flex-col">
            <div className="mb-12 sm:mb-20">
              <h1 className="text-2xl sm:text-3xl text-left sm:text-center font-medium text-white">
                Track, plan, and eat better with these features.
              </h1>
            </div>

            <Features />
          </div>
        </div>
        <div className="border-t bg-[#101010] max-w-6xl mx-auto border-types-100 flex justify-center items-start">
          <SectionFour />
        </div>
        <div className="border-t bg-[#101010] max-w-6xl mx-auto border-types-100 flex justify-center items-start">
          <SectionThree />
        </div>
        <div className="border-t bg-[#101010] max-w-6xl mx-auto border-types-100 flex justify-center items-start">
          <SectionTwo />
        </div>
        <div className="border-t bg-[#101010] max-w-6xl mx-auto border-types-100 ">
          <Footer />
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
      className="h-auto w-[450px]"
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
