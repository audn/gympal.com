import { motion } from 'framer-motion';
import { scaleIn } from '../../utils';

function LeftPhone({ offsetY }: { offsetY: number }) {
  return (
    <motion.div
      animate="enter"
      className="top-24 absolute -left-14 "
      exit="exit"
      initial="initial"
      variants={scaleIn}
    >
      <div
        className="relative z-10"
        style={{
          transform: `translateY(${offsetY * 0.2}px)`,
        }}
      >
        <img src={`/phone.png`} className="h-auto w-[500px] -rotate-12" />
      </div>
    </motion.div>
  );
}

export default LeftPhone;
