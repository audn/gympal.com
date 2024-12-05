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
        source: '/discord',
        destination: 'https://discord.com/invite/Q3dQj2Kqzm',
        permanent: true,
      },
    ];
  },
  experimental: {
    serverComponentsExternalPackages: [
      '@react-email/components',
      '@react-email/render',
      '@react-email/tailwind',
    ],
  },
};
