module.exports = {
  title: 'Masterworks Online Help',
  tagline: 'Masterworks Online Help',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/base/',
  onBrokenLinks: 'throw',
  favicon: 'img/Logo.png',
  organizationName: 'your-org', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
//    algolia: {
//      apiKey: 'YOUR_API_KEY',
//      indexName: 'YOUR_INDEX_NAME',
//    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: false,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '🌙',

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '\u{1F602}',

        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    
    navbar: {
      title: 'My Site',
      logo: {
        alt: 'Masterworks',
        src: 'img/Logo.png',
      },
      items: [
       {
          href: 'javascript:window.print()',
          className: 'forprint',
          // Only one of "to" or "href" should be used
          // href: 'https://www.facebook.com',
          label: 'Print',
          position: 'right',
          //activeBaseRegex: 'docs/(next|v8)',
        },
      ],
    },
    
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()}. Aurigo Software Technologies Inc.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // In order to display a link to edit your documents, please change this value.
          // Refer to Docusaurus v2 documentation for more info.
          // editUrl: 'http://easydita.com',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    // To enable the local search functionality, uncomment the following code:
  /* [require.resolve('@cmfcmf/docusaurus-search-local'), {
    indexDocs: true,
    docsRouteBasePath: '/',
    indexDocSidebarParentCategories: 3,
    indexPages: false,
    language: "en"
    }]*/
  ],
};
