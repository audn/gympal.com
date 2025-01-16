module.exports = {
  images: {
    domains: ['images.unsplash.com'],
  },
  async redirects() {
    return [
      {
        source: '/ios',
        destination: 'https://apps.apple.com/no/app/gympal-calorie-counter/id6468906558',
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
