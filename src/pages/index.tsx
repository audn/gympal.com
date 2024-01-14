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
    initial: { opacity: 0, scale: 0.85 },
    enter: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        delay: 0.2,
        type: 'spring',
        bounce: 0.4,
      },
    },
  };
  const text = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: { duration: 0.5, delay: 2 },
    },
  };

  return (
    //     <div className="bg-gradient-to-t from-types-50 to-types-100">
    <main className={'h-full '}>
      <div className="max-h-screen min-h-screen overflow-hidden flex items-start justify-center bg-gradient-to-t from-types-50 to-[#101010] ">
        {/* <div className="mt-[20%] absolute">
          <h1 className="text-5xl font-bold flex items-center ">
            meet<div className="w-[550px] h-px"></div> gympal
          </h1>
        </div> */}
        <div className="max-h-screen max-w-6xl min-h-screen flex items-end mr-[-118px]">
          <div className="flex -mb-[200px] relative">
            <motion.div
              className="z-30 "
              animate="enter"
              exit="exit"
              key="meet"
              //   transition={transition}
              //   initial="initial"
              //   variants={fadeInLeftAnimation}
              style={{ transform: `translateY(${offsetY * 0.6}px)` }}
            >
              <h1 className="text-8xl rio fadeInRight  font-extrabold flex items-center ">
                Meet
              </h1>
            </motion.div>

            <motion.div
              animate="enter"
              exit="exit"
              initial="initial"
              variants={scaleIn}
              className="col-span-4 px-3 z-40 "
            >
              <div
                className="relative inline-block  mt-[-150px] phone "
                // style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
              >
                <img
                  src={`/phone.png`}
                  className="h-auto w-[500px] relative mx-auto z-50"
                />
                <div className="absolute inset-x-3  inset-y-14  z-10 blur filter shadowww rounded-xl"></div>
              </div>
            </motion.div>
            <div
              className="z-30 relative max-h-[50vh] text-cente flex flex-col justify-start items-center"
              style={{ transform: `translateY(${offsetY * 0.6}px)` }}
            >
              <motion.div
                animate="enter"
                exit="exit"
                initial="initial"
                key="gympal"
                className=""
                variants={scaleIn}
              >
                <h1 className="text-8xl rio fadeInLeft font-extrabold flex items-center ">
                  Gympal
                </h1>
              </motion.div>
              <motion.div
                animate="enter"
                exit="exit"
                initial="initial"
                variants={text}
              >
                <div className="absolute bottom-0 flex flex-col items-center text-white/60">
                  More Below
                  <i className="fa-solid fa-arrow-down text-lg wobble " />
                </div>
              </motion.div>
            </div>

            <div className="absolute inset-0 shadow-light w-full  h-[60px] mt-14 z-10"></div>
          </div>
        </div>
      </div>
      <div className="min-h-screen bg-graddient-to-t from-types-50 to-[#101010] p-24 mx-auto  flex justify-center items-start">
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
