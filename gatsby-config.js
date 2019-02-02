module.exports = {
  siteMetadata: {
    description: `omeroid landing page`,
    author: `sadayuki-matsuno`,
  },
  siteMetadata: {
    title: `omeroid（オメロイド）株式会社`,
    description: `
      omeroid（オメロイド）株式会社.
      システムコンサル/開発とサービス事業を行なっています。
      システム開発のご相談は、お気軽にお申し付けください。
    `,
    canonicalUrl: 'https://www.omeroid.com',
    image: '/images/logo/omeroid360.jpg',
    author: 'Sadayuki Matsuno',
    organization: {
      name: 'omeroid 株式会社',
      url: 'https://www.omeroid.com',
      logo: '/images/logo/omeroid_icon.svg',
    },
    social: {
      twitter: '@omeroid_inc',
      fbAppID: '1634817276825716',
    },
    categories: [
      {
        slug: 'acting-like-a-grown-up',
        name: 'Acting Like a Grown-Up',
      },
      {
        slug: 'finding-direction',
        name: 'Finding Direction',
      },
      {
        slug: 'happiness',
        name: 'Building Happiness',
      },
      {
        slug: 'motivation',
        name: 'Staying Motivated',
      },
      {
        slug: 'remote-productivity',
        name: 'Remote Productivity',
      },
      {
        slug: 'remote-work',
        name: 'Living & Working Remotely',
      },
      {
        slug: 'storytelling',
        name: 'Storytelling',
      },
      {
        slug: 'impact',
        name: 'Creating an Impact',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
