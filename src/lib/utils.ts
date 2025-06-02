import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
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
export const menu = {
  closed: {
    translateY: -20,
    scale: 0.9,
    opacity: 0,
    transition: {
      type: 'spring',
      duration: 0.2,
      // delay: 0.15,
    },
  },
  open: {
    scale: 1,
    opacity: 1,
    translateY: 0,
    transition: {
      type: 'spring',
      duration: 0.2,
      delayChildren: 0.2,
      staggerChildren: 0.05,
    },
  },
};

export const item = {
  variants: {
    closed: { x: -16, opacity: 0 },
    open: { x: 0, opacity: 1 },
  },
  transition: { opacity: { duration: 0.2 } },
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
