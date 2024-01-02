import { motion } from 'framer-motion';
import { scaleIn } from '../../utils';

function RightPhone({ offsetY }: { offsetY: number }) {
  return (
    <motion.div
      animate="enter"
      exit="exit"
      initial="initial"
      className="-bottom-10  -right-14 absolute"
      // className="top-10 absolute -right-14 "
      variants={scaleIn}
    >
      <div
        className="relative z-10"
        style={{
          transform: `translateY(${offsetY * 0.2}px)`,
        }}
      >
        <img src={`/nutrition.png`} className="h-auto w-[400px] rotate-12" />
      </div>
    </motion.div>
  );
}

export default RightPhone;
