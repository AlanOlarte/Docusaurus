const users = [
  {
    caption: 'User1',
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Hola Mundo', // Title for your website.
  tagline: 'Primer proyecto',
  url: 'https://your-docusaurus-test-site.com', // Your website URL
  baseUrl: '/',
  projectName: 'test-site',
  organizationName: 'facebook',
  headerLinks: [
    {doc: 'node', label: 'Node.JS'},
    //{doc: 'doc4', label: 'API'},
    {page: 'help', label: 'Help'},
    {blog: true, label: 'Blog'},
  ],
  headerIcon: 'img/docusaurus.svg',
  footerIcon: 'img/favicon.ico',
  favicon: 'img/docusaurus.svg',
  colors: {
    primaryColor: '#D50000',
    secondaryColor: '#3c5415',
  },
  copyright: `Copyright © ${new Date().getFullYear()} Your Name or Your Company Name`,

  highlight: {
    theme: 'default',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  onPageNav: 'separate',
  cleanUrl: true,
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',
};

module.exports = siteConfig;
