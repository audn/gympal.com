import { motion } from 'framer-motion';
import concat from '../../../lib/concat';

import { Star } from 'lucide-react';
import { useEffect, useState } from 'react';

function MealSizes() {
  const sizes = ['lower carbs', '+redbull', 'bulking', 'cutting for summer'];

  const [activeIndex, setActiveIndex] = useState(0);
  // const [direction, setDirection] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const newIndex = (prevIndex + 1) % sizes.length;
        // setDirection(1);
        return newIndex;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [sizes.length]);

  const handleClick = (index: number) => {
    // setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };
  return (
    <div className="h-full flex items-center">
      <div className="flex flex-wrap gap-2 items-center">
        {sizes.map((x, i) => (
          <motion.button
            key={x}
            className={concat(
              i == activeIndex
                ? 'bg-white text-black'
                : 'bg-[#262626] text-white',
              'px-3 py-1 gap-2 rounded-full flex items-center overflow-hidden',
            )}
            onClick={() => handleClick(i)}
            layout
            transition={{
              duration: 0.3,
              type: 'spring',
              // stiffness: 500,
              // damping: 30,
            }}
          >
            {i === activeIndex ? (
              <Star fill="currentColor" className="w-4 h-4" />
            ) : null}{' '}
            {x}
          </motion.button>
        ))}
      </div>
    </div>
  );
}

export default MealSizes;
