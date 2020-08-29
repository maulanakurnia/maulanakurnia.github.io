import React from "react";
import Helmet from "react-helmet";

interface Props {
    description: string,
    lang: string,
    title: string
}

function SEO({ description, lang, title }: Props) {
  const meta = {
    author: "Maulana Kurnia",
    description: `My Personal Website`,
    title: "mufradmabni",
    "og:description": "",
  };

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s - ${meta.title}`}
      meta={[
        {
          name: `description`,
          content: description || meta.description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: meta["og:description"],
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: meta.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: meta.description,
        },
      ].concat()}
    />
  );
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default SEO;
