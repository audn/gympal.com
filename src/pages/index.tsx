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
    initial: { opacity: 0, translateY: 0 },
    enter: {
      translateY: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 1 },
    },
  };
  return (
    //     <div className="bg-gradient-to-t from-types-50 to-types-100">
    <main className={'h-full '}>
      <div className="max-h-screen min-h-screen flex items-start justify-center bg-gradient-to-t from-types-50 to-types-100 ">
        {/* <div className="mt-[20%] absolute">
          <h1 className="text-5xl font-bold flex items-center ">
            meet<div className="w-[550px] h-px"></div> gympal
          </h1>
        </div> */}
        <div className="max-h-screen max-w-6xl min-h-screen flex items-end mr-[-118px]">
          <div className="flex -mb-[00px] relative">
            <motion.div
              className="z-30"
              animate="enter"
              exit="exit"
              key="meet"
              initial="initial"
              //     variants={text}
              style={{ transform: `translateY(${offsetY * 0.6}px)` }}
            >
              <h1 className="text-8xl font-extrabold flex items-center ">
                Meet
              </h1>
            </motion.div>

            <motion.div
              animate="enter"
              exit="exit"
              initial="initial"
              variants={scaleIn}
              className="col-span-4 px-3 z-40"
            >
              <div
                className="relative inline-block  mt-[-150px] "
                // style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
              >
                <img
                  src={`/phone.png`}
                  className="h-auto w-[400px] relative mx-auto z-50"
                />
                <div className="absolute inset-x-3  inset-y-14  z-10 blur filter shadowww rounded-xl"></div>
              </div>
            </motion.div>
            <motion.div
              animate="enter"
              exit="exit"
              initial="initial"
              key="gympal"
              //     variants={text}
              className="z-30"
              style={{ transform: `translateY(${offsetY * 0.6}px)` }}
            >
              <h1 className="text-8xl font-extrabold flex items-center ">
                Gympal
              </h1>
            </motion.div>
            {/* <div className="absolute inset-0 shadow-light w-full  h-[60px] mt-14 z-10"></div> */}
          </div>
        </div>
      </div>
      <div
        //     style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        className="min-h-screen p-24 mt-10 text-center mx-auto bg-gradient-to-t from-types-50 to-types-100 flex justify-center items-start"
      >
        <div className="flex flex-col">
          <h1 className="text-2xl font-semibold">Powerful and customizable</h1>
          <Features />
        </div>
      </div>
      {/* </div> */}
    </main>
  );
}
