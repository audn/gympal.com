import { motion } from 'framer-motion';

import Link from 'next/link';
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
  const text = {
    initial: { opacity: 0, y: '30%' },
    enter: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: 0.5 },
    },
  };
  const content = {
    initial: { opacity: 0, y: 20 },
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 1.5,
        ease: [0.25, 0.46, 0.45, 0.94],
        damping: 100,
        stiffness: 20,
      },
    },
  };
  return (
    <main className={'h-full px-6 mt-[80px] sm:mt-0 bg-[#101010]'}>
      <div className="min-h-[80vh] flex-col flex items-center justify-center">
        <div className="max-w-md text-center">
          <h1 className="text-white font-semibold text-5xl leading-[52px]">
            {'Your new favorite fitness app'.split(' ').map((x, i) => (
              <motion.span
                animate="enter"
                className="inline-block relative"
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
          <motion.p
            animate="enter"
            exit="exit"
            initial="initial"
            variants={text}
            className="text-on-100 text-xl mt-10"
          >
            An all-in-one app designed to track your diet, workout sessions and
            bodyweight.
          </motion.p>
          <motion.div
            animate="enter"
            exit="exit"
            initial="initial"
            variants={{
              initial: { opacity: 0, y: '50%' },
              enter: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.5,
                  delay: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  damping: 12,
                  stiffness: 200,
                },
              },
            }}
            className="space-y-2 mt-12 max-w-sm mx-auto items-center"
          >
            <input
              className="bg-types-150 h-[44px] outline-none w-full  rounded-xl px-6 py-2"
              placeholder="Email"
              type="email"
            />
            <button className="bg-types-fat w-full text-black px-4 text-center justify-center flex items-center font-bold py-2 rounded-xl">
              <i className="fa-solid fa-right-to-bracket mr-2" /> Get Early
              Access
            </button>
          </motion.div>
        </div>
      </div>
      <motion.div
        animate="enter"
        exit="exit"
        initial="initial"
        variants={content}
        className="min-h-screen flex flex-col space-y-10 pb-24"
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
            <p className="text-lg text-on-100 my-4 text-center">
              + many many more features
            </p>
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
