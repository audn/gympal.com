import { motion } from 'framer-motion';

function Intro(props) {
  return (
    <div className="py-24 max-w-3xl mx-auto  text-center">
      <motion.div
        animate="enter"
        exit="exit"
        initial="initial"
        variants={{
          initial: { opacity: 0 },
          enter: {
            opacity: 1,
            transition: {
              duration: 1,
              //   type: 'spring',
              delay: 2.5,
              //     bounce: 0.4,
            },
          },
        }}
      >
        <h1 className="text-white font-medium text-4xl leading-[52px]">
          An all-in-one app designed to <strong>track</strong> your diet,
          workout sessions and bodyweight.
        </h1>
      </motion.div>
      <div className="max-w-md mx-auto  text-center">
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
    </div>
  );
}

export default Intro;
