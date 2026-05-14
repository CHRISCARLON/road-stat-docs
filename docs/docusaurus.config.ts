import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Road Stat API',
  tagline: 'Open research data matched to USRNs',

  url: 'https://chriscarlon.github.io',
  baseUrl: '/road-stat-docs/',

  organizationName: 'CHRISCARLON',
  projectName: 'road-stat-docs',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'throw',

  favicon: 'img/favicon.svg',

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=IBM+Plex+Sans:wght@400;500;600;700&display=swap',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'apple-touch-icon',
        href: 'img/apple-touch-icon.png',
      },
    },
  ],

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    announcementBar: {
      id: 'research-preview-v3',
      content:
        'Road Stat is currently free to use. <a href="mailto:chriscarlon@icloud.com">Get in touch</a> to participate and give feedback.',
      isCloseable: true,
    },
    navbar: {
      title: 'Road Stat API',
      logo: {
        alt: 'Road Stat API',
        src: 'img/logo-light.svg',
        srcDark: 'img/logo-dark.svg',
        height: 28,
      },
      hideOnScroll: false,
      items: [
        {
          href: 'https://github.com/CHRISCARLON/road-stat-docs',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
          label: 'GitHub',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {label: 'Overview', to: '/'},
            {label: 'Endpoints', to: '/endpoints'},
            {label: 'Roadmap', to: '/roadmap'},
          ],
        },
        {
          title: 'Project',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/CHRISCARLON/road-stat-docs',
            },
            {
              label: 'Get in touch',
              href: 'mailto:chriscarlon@icloud.com',
            },
          ],
        },
        {
          title: 'Data',
          items: [
            {
              label: 'Open Government Licence v3',
              href: 'https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/',
            },
            {
              label: 'GeoPlace / NSG',
              href: 'https://www.geoplace.co.uk',
            },
          ],
        },
      ],
      copyright: `RoadStat API`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
