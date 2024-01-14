6;
import { motion } from 'framer-motion';

import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Light from '../components/Light';
import Section from '../components/Section';

function Index() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scaleIn = {
    initial: { opacity: 0, y: 200 },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        delay: 0.2,
        type: 'spring',
        bounce: 0,
      },
    },
  };

  return (
    <main className={'h-full '}>
      <motion.div
        animate="enter"
        exit="exit"
        initial="initial"
        variants={{
          initial: { height: '100vh', opacity: 0 },
          enter: {
            height: '85vh',
            opacity: 1,
            transition: {
              height: {
                duration: 1.5,
                delay: 0.5,
                bounce: 0,
                type: 'spring',
              },
            },
          },
        }}
        className="overflow-hidden  border-b border-types-100 flex items-st art justify-center bg-gradient-to-t from-types-50 to-[#101010] "
      >
        <div className="max-h-screen max-w-6xl min-h-screen flex items-end mr-[-118px]">
          <div className="flex -mb-[170px] items-start  relative">
            <motion.div
              className="z-30 flex  pt-[100px]"
              animate="enter"
              exit="exit"
              key="meet"
              style={{ transform: `translateY(${offsetY * 0.4}px)` }}
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
              <div className="relative inline-block  mt-[-150px] phone ">
                <img
                  src={`/phone.png`}
                  className="h-auto w-[500px] relative mx-auto z-50"
                />
                <div className="absolute inset-x-3  inset-y-14  z-10 blur filter shadowww rounded-xl"></div>
              </div>
            </motion.div>
            <motion.div
              animate="enter"
              exit="exit"
              initial="initial"
              variants={{
                initial: { opacity: 0, y: 200 },
                enter: {
                  opacity: 0.4,
                  y: 150,
                  transition: {
                    type: 'tween',
                    duration: 5,
                    delay: 1,
                  },
                },
              }}
              className="absolute  left-[-350px] -translate-x-1/2"
            >
              <Light />
            </motion.div>
            <div
              className="z-30 relative max-h-[50vh] text-cente flex flex-col justify-start items-center"
              style={{ transform: `translateY(${offsetY * 0.4}px)` }}
            >
              <motion.div
                animate="enter"
                exit="exit"
                initial="initial"
                key="gympal"
                className="z-30 flex  pt-[100px]"
                variants={scaleIn}
              >
                <h1 className="text-8xl rio fadeInLeft font-extrabold flex items-center ">
                  Gympal
                </h1>
              </motion.div>
            </div>
            {/* <motion.div
              animate="enter"
              exit="exit"
              initial="initial"
              className="absolute inset-0 shadow-light w-full  h-[60px] mt-14 z-10"
              variants={fadeIn}
            ></motion.div> */}
          </div>
        </div>
      </motion.div>
      <div className="min-h-screen flex flex-col pb-24 bg-[#0c0c0c]">
        <a id="features" />
        <Intro />
        <div className="max-w-6xl flex flex-col space-y-10 mx-auto">
          <Section
            title="Customizable meal sizes."
            text="Easily create and manage different meal sizes with different portions or products."
            image="mealsize.png"
            color={'#55AE72'}
            imageClass=" -mb-[40%] scale-125"
          />
          <Section
            title="Present moment is history."
            text="You can look back at it whenever you’d like to."
            color={'#FCC745'}
            image="nutrition2.png"
          />
          <Section
            title="Do you remember how many grams a slice of bread is?"
            text="No worries. With Gympal you can create custom
                      servings for every food."
            color={'#2F80ED'}
            image="customsize.png"
            imageClass="-mt-[97%] scale-110"
          />
          <p className="text-sm text-on-100 !mt-4 !my-0 text-center">
            + many many more features
          </p>
          {/* <Waitlist /> */}
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default Index;
