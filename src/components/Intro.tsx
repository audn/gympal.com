import { motion } from 'framer-motion';

function Intro(props) {
  return (
    <div className="py-24 max-w-6xl mx-auto w-full">
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
              //   type: 'spring',
              delay: 2.4,
              //     bounce: 0.4,
            },
          },
        }}
      >
        <h1 className="text-white font-normal text-4xl leading-[52px]">
          An all-in-one app designed to{' '}
          <span className="font-medium">track</span>&nbsp;your diet, workout
          sessions and bodyweight.
        </h1>{' '}
        <h2 className="text-on-100 text-lg mt-6">
          Gympal is still under development, but don't worry —
          <br />
          You can sign up for the waitlist below!
        </h2>
        <div className="space-y-3 mt-10 w-[300px] items-center">
          <input
            className="bg-types-100 h-[44px] outline-none w-full  rounded-xl px-6 py-2"
            placeholder="Email"
            type="email"
          />
          <button className="bg-types-fat w-full text-black px-4 text-center justify-center flex items-center font-bold py-2 rounded-xl">
            Join Waitlist
          </button>
        </div>
        <p className="text-on-100 text-sm mt-6">
          Invitation will be sent in the First Quarter (Q1) of 2024.
        </p>
      </motion.div>
      {/* <div className="max-w-md mx-auto  text-center">
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
      </div> */}
    </div>
  );
}

export default Intro;
