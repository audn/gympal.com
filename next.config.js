module.exports = {
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/ios',
        destination: 'https://testflight.apple.com/join/XwvjHf7w',
        permanent: true,
      },
      {
        source: '/(.*)/components/(.*)',
        destination: '/',
        permanent: true,
      },
      {
        source: '/(.*)/screens/(.*)',
        destination: '/',
        permanent: true,
      },
      {
        source: '/(.*)/modals/(.*)',
        destination: '/',
        permanent: true,
      },
      {
        source: '/(.*)/(.*)/components',
        destination: '/',
        permanent: true,
      },
      {
        source: '/(.*)/(.*)/screens',
        destination: '/',
        permanent: true,
      },
      {
        source: '/(.*)/(.*)/modals',
        destination: '/',
        permanent: true,
      },
      {
        source: '/(.*)/(.*)/(.*)/components',
        destination: '/',
        permanent: true,
      },
      {
        source: '/(.*)/(.*)/(.*)/screens',
        destination: '/',
        permanent: true,
      },
      {
        source: '/(.*)/(.*)/(.*)/modals',
        destination: '/',
        permanent: true,
      },
    ];
  },
};
