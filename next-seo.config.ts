import { NextSeoProps } from 'next-seo';

export default {
  title: 'Gympal | Calorie Counter',
  description:
    'An all-in-one app designed to track your diet, workout sessions and bodyweight.',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.gympal.com',
    site_name: 'Gympal',
  },
  twitter: {
    handle: '@tweetaudun',
    site: '@tweetaudun',
    cardType: 'summary',
  },
} as NextSeoProps;
