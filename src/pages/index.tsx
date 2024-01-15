//responsive done
import { motion } from 'framer-motion';

import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Light from '../components/Light';
import Section from '../components/Section';
import { scaleIn } from '../utils';
function Phone() {
  return (
    <motion.div
      animate="enter"
      exit="exit"
      initial="initial"
      variants={scaleIn}
      className="col-span-4 px-3 z-40 "
    >
      <div className="relative inline-block mb-[-300px] lg:mb-0 xl:mt-[-150px] phone ">
        <img
          src={`/phone.png`}
          className="h-auto w-phone-md lg:w-phone-lg xl:w-phone-xl relative mx-auto z-50"
        />
        <div className="absolute inset-x-3 inset-y-14 z-10 blur filter shadowww rounded-xl"></div>
      </div>
    </motion.div>
  );
}
function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
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
      className="overflow-hidden pt-[80px] flex-col items-center lg:pt-0 border-b border-types-100 flex  bg-gradient-to-t from-types-50 to-[#101010] "
    >
      <div className="max-h-screen px-6 max-w-6xl min-h-screen flex items-center lg:items-end xl:mr-[-118px] flex-col lg:flex-row">
        <h1 className="text-4xl md:text-6xl lg:hidden py-12 font-medium flex items-center text-center justify-evenly ">
          Your new favorite fitness app😎
        </h1>{' '}
        <div className="flex lg:top-[100px] xl:top-[120px] items-start relative">
          <motion.div
            className="z-30 pt-[100px] hidden lg:flex"
            animate="enter"
            exit="exit"
            key="meet"
            style={{ transform: `translateY(${offsetY * 0.4}px)` }}
          >
            <h1 className="text-7xl xl:text-8xl fadeInRight font-extrabold flex items-center ">
              Meet
            </h1>
          </motion.div>

          <Phone />
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
            className="absolute left-[-350px] -translate-x-1/2"
          >
            <Light />
          </motion.div>
          <div
            className="z-30 relative max-h-[50vh] flex flex-col justify-start items-center"
            style={{ transform: `translateY(${offsetY * 0.4}px)` }}
          >
            <motion.div
              animate="enter"
              exit="exit"
              initial="initial"
              key="gympal"
              className="z-30 hidden lg:flex pt-[100px]"
              variants={scaleIn}
            >
              <h1 className="text-7xl xl:text-8xl fadeInLeft font-extrabold flex items-center ">
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
  );
}
function Index() {
  return (
    <main className={'h-full '}>
      <Hero />
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
