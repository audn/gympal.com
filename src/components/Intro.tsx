import { motion } from 'framer-motion';
import Link from 'next/link';

function Intro() {
  return (
    <div className="py-10 md:py-24 max-w-6xl mx-auto w-full">
      <motion.div
        animate="enter"
        exit="exit"
        className="max-w-3xl"
        initial="initial"
        variants={{
          initial: { opacity: 0 },
          enter: {
            opacity: 1,
            transition: {
              duration: 1,
              delay: 2.4,
            },
          },
        }}
      >
        <h1 className="text-white font-normal text-2xl md:text-4xl md:leading-[52px]">
          An all-in-one app designed to{' '}
          <span className="font-medium">track</span>&nbsp;your diet, workout
          sessions and bodyweight.
        </h1>{' '}
        <h2 className="text-on-100 md:text-lg mt-6">
          {/* Participate in the beta by downloading the app below! */}
          {/* <br />
          
          You can sign up for the waitlist below! */}
        </h2>
        <Link href="/download">
          <button className="mt-10 md:max-w-[300px] bg-types-fat w-full h-[40px] text-black px-4 text-center justify-center flex items-center font-bold transition-all ease-out duration-200 hover:bg-opacity/50 rounded-xl">
            Download
          </button>
        </Link>
        {/* <Waitlist />
        <p className="text-on-100 text-sm mt-6">
          Invitations will be sent in the third quarter (Q3) of 2024.
        </p> */}
      </motion.div>
    </div>
  );
}

export default Intro;
