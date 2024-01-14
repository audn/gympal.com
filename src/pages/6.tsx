6;
import { motion } from 'framer-motion';

import { useEffect, useState } from 'react';
import Footer from '../components/Footer';
import Intro from '../components/Intro';
import Section from '../components/Section';
import Waitlist from '../components/Waitlist';

function Arrow({ className }: { className?: string }) {
  return (
    <div className={className}>
      <svg
        width="206"
        height="148"
        viewBox="0 0 206 148"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.1753 147.39C23.9568 126.866 54.2923 81.104 82.471 59.8206C112.876 36.7504 133.807 29.3459 182.593 24.7473C180.631 22.5371 178.83 20.9025 177.487 19.1706C175.871 17.2622 174.182 15.2285 173.08 13.0231C172.719 12.3963 173.225 10.5998 173.924 10.029C174.623 9.45813 176.416 9.59317 177.035 10.0715C182.824 14.7523 188.355 19.5816 194.088 24.4621C195.889 26.0966 195.986 28.0464 194.162 29.9354C186.961 36.7674 179.832 43.7246 172.43 50.5054C170.718 51.9952 168.114 52.8303 165.542 54.3152C164.487 47.7367 169.479 45.6906 172.026 42.3812C174.63 38.8722 177.853 35.8414 181.485 31.7384C166.758 30.8808 153.422 32.7301 140.384 36.5803C92.5253 50.5057 58.8664 81.3047 36.4162 124.687C33.5236 130.369 31.3063 136.329 28.6147 142.062C27.5619 143.505 26.6378 144.874 25.1753 147.39Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
function Four() {
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
        delay: 0.5,
        type: 'spring',
        bounce: 0.4,
      },
    },
  };

  const content = {
    initial: { opacity: 0, y: 20 },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 1.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        damping: 100,
        stiffness: 20,
      },
    },
  };
  const fadeIn = {
    initial: { opacity: 0 },
    enter: {
      opacity: 1,
      transition: {
        duration: 1,
        //   type: 'spring',
        delay: 1.5,
        //     bounce: 0.4,
      },
    },
  };

  return (
    <main className={'h-full '}>
      <div className="h-[80vh] overflow-hidden flex items-st art justify-center bg-gradient-to-t from-types-50 to-[#101010] ">
        <div className="max-h-screen max-w-6xl min-h-screen flex items-end mr-[-118px]">
          <div className="flex -mb-[0px] relative">
            <motion.div
              className="z-30 "
              animate="enter"
              exit="exit"
              key="meet"
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
              <div className="relative inline-block  mt-[-150px] phone ">
                <img
                  src={`/phone.png`}
                  className="h-auto w-[400px] relative mx-auto z-50"
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
            </div>
            <motion.div
              animate="enter"
              exit="exit"
              initial="initial"
              className="absolute inset-0 shadow-light w-full  h-[60px] mt-14 z-10"
              variants={fadeIn}
            ></motion.div>
          </div>
        </div>
      </div>
      <div className="min-h-screen flex flex-col  bg-gradient-to-t from-types-50 to-[#101010]">
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
          <Waitlist />
          <Footer />
        </div>
      </div>
    </main>
  );
}

export default Four;
