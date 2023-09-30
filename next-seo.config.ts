import { NextSeoProps } from 'next-seo';

export default {
  title: 'Gympal',
  description:
    'The improved app to effortlessly switch between your diet preferences.',
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
