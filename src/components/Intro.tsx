import { motion } from 'framer-motion';
import Waitlist from './Waitlist';

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
          Gympal is still under development, but don't worry —
          <br />
          You can sign up for the waitlist below!
        </h2>
        <Waitlist />
        <p className="text-on-100 text-sm mt-6">
          Invitations will be sent in the third quarter (Q3) of 2024.
        </p>
      </motion.div>
    </div>
  );
}

export default Intro;
