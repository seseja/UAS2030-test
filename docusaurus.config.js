// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const defaultLocale = 'en';


// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'KFUPM AE Experimental Website',
  tagline: 'KFUPM Drone Lab',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://github.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/UAS2030-test/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ibrahimaljalal', // Usually your GitHub org/user name.
  projectName: 'UAS2030-test', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  deploymentBranch: "gh-pages",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({locale, docPath}) => {
            if (locale !== defaultLocale) {
              return `https://crowdin.com/project/docusaurus-v2/${locale}`;
            }
            // We want users to submit updates to the upstream/next version!
            // Otherwise we risk losing the update on the next release.
            const nextVersionDocsDirPath = 'docs';
            return `https://github.com/ibrahimaljalal/UAS2030-test/edit/main/${nextVersionDocsDirPath}/${docPath}`;
          },
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: ({locale, blogDirPath, blogPath}) => {
            if (locale !== defaultLocale) {
              return `https://crowdin.com/project/docusaurus-v2/${locale}`;
            }
            return `https://github.com/ibrahimaljalal/UAS2030-test/edit/main/${blogDirPath}/${blogPath}`;
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'UAS2030',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'UAS2030ID',
            position: 'left',
            label: 'UAS2030',
          },

          {
            type: 'docSidebar',
            sidebarId: 'ROSID',
            position: 'left',
            label: 'ROS',
          },

          {
            type: 'docSidebar',
            sidebarId: 'DepartmentID',
            position: 'left',
            label: 'Department',
          },


          {
            type: 'docSidebar',
            sidebarId: 'IRCID',
            position: 'left',
            label: 'IRC',
          },









          {to: '/blog', label: 'Official Documents', position: 'left'},
          {
            href: 'https://github.com/ibrahimaljalal/UAS2030',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'University',
            items: [
              {
                label: 'KFUPM',
                to: 'https://www.kfupm.edu.sa/',
              },
              {
                label: 'Department',
                to: 'https://ae.kfupm.edu.sa/home',
              },
              {
                label: 'IRC',
                to: 'https://ri.kfupm.edu.sa/irc-ase',
              },
            ],
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'X ',
                href: 'https://x.com/uas2030?lang=en',
              },
              {
                label: 'Tiktok',
                href: 'https://www.tiktok.com/@uas2030',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/uas_2030/',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/uas2030',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'UAS2030 DTVC EVENT',
                to: 'https://ibrahimaljalal.github.io/UAS2030-DTV/',
              },

            ],
          },
        ],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
