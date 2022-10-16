import type { GatsbyConfig } from 'gatsby';
 
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
 
const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ['job', 'project'],
  singleTypes: ['about'],
};
 
const config: GatsbyConfig = {
  siteMetadata: {
    title: `WebDev Portfolio`,
    description: `Awesome webDev Portfolio build with Gatsby and Strapi`,
    titleTemplate: `%s | WebDev Portfolio`,
    url: `https://dm-gatsby-portfolio.netlify.app`,
    twitterUsername: `@ClaytonDewey`,
    image: `/mainImg.png`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ],
};
 
export default config;