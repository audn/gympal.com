export const scaleIn = {
  initial: { opacity: 0, y: 200 },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      delay: 0.2,
      type: 'spring',
      bounce: 0,
    },
  },
};
export const text = {
  initial: { opacity: 0, translateY: 0, scale: 0.95 },
  enter: {
    translateY: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
      type: 'spring',
      bounce: 0.4,
    },
  },
};

export const formatDate = ({
  date,
  options,
}: {
  date: Date;
  options?: Intl.DateTimeFormatOptions;
}) => {
  const opts = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  } as Intl.DateTimeFormatOptions;
  return new Date(date).toLocaleDateString('en-US', options ? options : opts);
};
