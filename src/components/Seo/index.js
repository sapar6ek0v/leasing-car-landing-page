import React from 'react';
import { Helmet } from 'react-helmet';

import { useSiteMetadata } from '../../helpers/hooks/useSiteMetadata';

const Seo = ({ title, description, pathname }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    twitterUsername,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    twitterUsername,
  };

  return (
    <Helmet title={title} defaultTitle={seo.title} titleTemplate={`%s | ${defaultTitle}`}>
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="icon" href="/src/images/logo.png" />

      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterUsername} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
    </Helmet>
  );
};

export default Seo;
