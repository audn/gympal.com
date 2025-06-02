import { NextSeoProps } from 'next-seo';

export default {
  title: 'Gympal – Your Fitness Partner',
  description:
    //     'Join Gympal, the comprehensive app for tracking nutrition and exercises, connecting with friends and achieve your fitness goals together.',
    // 'An all-in-one app designed to track your diet, workout sessions and bodyweight.',
    'Experience the best of fitness tracking with Gympal. Monitor your nutrition and exercises, connect with friends, and stay motivated by becoming gympals.',
  //   description:
  //     'Gympal helps you track your nutrition and exercises effortlessly. Monitor your diet, workouts, and progress to stay on track with your fitness goals.',
  openGraph: {
    type: 'website',
    images: [
      {
        url: 'https://gympal.com/icon.png',
        height: 256,
        width: 256,
        alt: 'Gympal',
        type: 'image/jpeg',
      },
    ],
    locale: 'en_IE',
    url: 'https://www.gympal.com',
    site_name: 'Gympal',
  },
  twitter: {
    handle: '@gympalcom',
    site: '@gympalcom',
    cardType: 'summary',
  },
} as NextSeoProps;
