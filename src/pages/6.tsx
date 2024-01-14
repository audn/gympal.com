6;
import { motion } from 'framer-motion';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Phone from '../components/Phone';

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
      <div className="max-h-screen min-h-screen overflow-hidden flex items-st art justify-center bg-gradient-to-t from-types-50 to-[#101010] ">
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
      <motion.div
        animate="enter"
        exit="exit"
        initial="initial"
        variants={content}
        className="min-h-screen flex flex-col space-y-10 12 pt-12 pb-24 bg-gradient-to-t from-types-50 to-[#101010]"
      >
        <div className=" max-w-6xl mx-auto">
          <div className="grid grid-cols-2 bg-types-100 rounded-2xl overflow-hidden">
            <div className="relative p-12">
              <h2 className="text-on-100 text-2xl font-medium leading-[40px]">
                <span className="text-white font-semibold">
                  Customizable meal sizes.
                </span>
                &nbsp;Easily create and manage different meal sizes with
                different portions or products.
              </h2>
              <div className="absolute bottom-24 flex right-[10%] z-20">
                <div className="px-4 py-2 bg-[#2C2C2E] flex-col  max-w-xs rounded-xl flex ">
                  <div className="text-sm font-bold text-types-fat uppercase">
                    <i className="fa-solid fa-info-circle mr-2" /> Bonus
                  </div>
                  <p className="text-on-100 text-base font-medium ">
                    We have multiple shortcuts for a faster, simpler tracking
                    experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-types-carbs relative flex items-center flex-col justify-center">
              <div className="mb-12 gap-2 py-10 items-center justify-center flex flex-wrap w-[400px]">
                {/* {[
                  'lower carbs',
                  '+redbull',
                  'bulking',
                  'cutting for summer',
                ].map((x, i) => (
                  <button
                    key={x}
                    className={concat(
                      i == 0
                        ? 'bg-white text-black'
                        : 'bg-[#3A3A3C] text-white',
                      'px-3 py-1 rounded-full  ',
                    )}
                  >
                    {i == 0 ? <i className="fa-solid fa-star" /> : null} {x}
                  </button>
                ))} */}
              </div>
              <div className="relative">
                <Arrow className="absolute z-10 -left-[65%] bottom-[30%]" />
                <Phone source="mealsize.png" className=" -mb-[40%] scale-125" />
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 bg-types-100 rounded-2xl overflow-hidden">
            <div className="relative p-12">
              <h2 className="text-on-100 text-2xl font-medium leading-[40px]">
                <span className="text-white font-semibold">
                  Present moment is history.
                </span>
                &nbsp;You can look back at it whenever you’d like to.
              </h2>
            </div>
            <div className="bg-types-fat p-10 flex items-center flex-col justify-center">
              <Phone source="nutrition2.png" />
            </div>
          </div>
        </div>
        <div className=" max-w-6xl mx-auto">
          <div className="grid grid-cols-2 bg-types-100 rounded-2xl overflow-hidden">
            <div className="relative p-12">
              <h2 className="text-on-100 text-2xl font-medium leading-[40px]">
                <span className="text-white font-semibold">
                  Do you remember how many grams a slice of bread is?
                </span>
                &nbsp;No worries. With Gympal you can create custom servings for
                every food.
              </h2>
            </div>
            <div className="bg-types-calories p-10 pb-24 pt-0 relative flex items-center flex-col justify-center">
              <Phone source="customsize.png" className="-mt-[70%] scale-110" />
            </div>
          </div>
          <div>
            <p className="text-sm text-on-100 my-4 text-center">
              + many many more features
            </p>
          </div>
          <div className="max-w-md mx-auto py-24 text-center">
            <h1 className="text-white font-semibold text-5xl leading-[52px]">
              Join <i>the waitlist!</i>
            </h1>
            <p className="text-on-100 text-lg mt-6">
              Gympal is still under development, but don't worry —
              <br />
              You can sign up for early access below!
            </p>
            <div className="space-y-3 mt-10 max-w-xs mx-auto items-center">
              <input
                className="bg-types-100 h-[44px] outline-none w-full  rounded-xl px-6 py-2"
                placeholder="Email"
                type="email"
              />
              <button className="bg-types-fat w-full text-black px-4 text-center justify-center flex items-center font-bold py-2 rounded-xl">
                Join The Waitlist
              </button>
            </div>
          </div>
          <div className="grid-cols-3 gap-5  grid mt-24">
            <div className="p-10 flex items-center justify-center bg-types-calories rounded-2xl">
              <img src="qr.png" className="w-28 rounded-xl" />
            </div>
            <Link href="/roadmap">
              <button className="p-10 flex text-start group relative overflow-hidden items-end justify-start bg-types-100 rounded-2xl">
                <i className="fa-solid group-hover:scale-110 transition ease-out duration-200 fa-map mb-4 text-[14rem] -rotate-12 opacity-[3%]  text-on-100 absolute -right-10 -top-10" />
                <div className="text-types-calories font-medium text-2xl">
                  <i className="fa-solid fa-map mb-4 text-4xl" />
                  <h3 className="group-hover:underline transition ease-out duration-200">
                    Roadmap and <br />
                    planned features
                  </h3>
                </div>
              </button>
            </Link>
            <Link href="/roadmap">
              <button className="p-10 flex group text-start group items-end justify-start overflow-hidden bg-types-100 rounded-2xl relative">
                <i className="fa-solid group-hover:scale-110 transition ease-out duration-200 fa-users mb-4 text-[14rem] -rotate-12 opacity-[3%]  text-on-100 absolute -right-10 -top-10" />
                <div className="text-white font-medium text-2xl">
                  <i className="fa-solid fa-users mb-4 text-4xl" />
                  <h3 className="group-hover:underline transition ease-out duration-200">
                    Team{' '}
                  </h3>
                </div>
              </button>
            </Link>
            <div className="col-span-3 p-10 flex items-center justify-center bg-types-100 rounded-2xl">
              <div className="flex justify-between item-center w-full">
                <div className="flex flex-col">
                  <span className="text-on-100">
                    &copy; {new Date().getFullYear()} Gympal, Inc
                  </span>
                  <div className="flex space-x-10 mt-3">
                    <button className="bg-white text-black px-3 text-sm flex items-center font-bold py-1 rounded-full">
                      <i className="fa-solid fa-envelope mr-2" /> Get in touch
                    </button>
                    <div className="flex flex-wrap space-x-2">icon</div>
                  </div>
                </div>
                <div className="relative flex w-full max-w-sm items-center justify-center">
                  <input
                    className="bg-white h-[50px]  w-full rounded-full px-6 py-2 "
                    placeholder="Email"
                  />
                  <div className="absolute right-2">
                    <button className="bg-types-100 text-white px-4 text-sm flex items-center font-bold py-2 rounded-full">
                      Join Waitlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}

export default Four;
