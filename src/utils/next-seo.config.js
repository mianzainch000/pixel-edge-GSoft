const config = {
  openGraph: {
    type: "Website",
    locale: "en_IE",
    url: "https://pixeledge.com.au/",
    siteName: "Pixel Edge",
    description: "We offer modern solutions for growing your business.",
    images: [
      {
        url: "/pixelEdgeLogo.webp",
        width: 800,
        height: 600,
        alt: "PixelEdge",
      },
      {
        url: "/pixelEdgeLogo.webp",
        width: 800,
        height: 600,
        alt: "PixelEdge",
      },
    ],

    article: {
      publishedTime: "",
      modifiedTime: "",
      expirationTime: "",
      section: "Section II",
      authors: ["", ""],
      tags: ["Tag A", "Tag B", "Tag C"],
    },
  },
  titleTemplate: "Pixel Edge",
  defaultTitle: "Pixel Edge",
  title: "Pixel Edge",
  additionalLinkTags: [
    {
      rel: "icon",
      href: "public/pixelEdgeLogo.webp",
    },
    {
      rel: "icon",
      href: "/pixelEdgeLogo.webp",
      sizes: "76x76",
    },
  ],
  description: "We offer modern solutions for growing your business.",
  twitter: {
    handle: "@handle",
    site: "@site",
    cardType: "We offer modern solutions for growing your business.",
  },

  canonical: "https://pixeledge.com.au/",
  additionalMetaTags: [
    {
      property: "",
      content: "",
    },
    {
      name: "",
      content: "",
    },
  ],
};

export default config;

export const mapSeoData = (data) => {
  return {
    titleTemplate: data?.metaTitle || config.titleTemplate,
    defaultTitle: data?.metaTitle || config.defaultTitle,
    title: data?.metaTitle || config.title,
    openGraph: {
      type: "Website",
      locale: "en_IE",
      url: data?.canonicalURL || config.canonical,
      siteName: data?.focuskeyphrase || config.title,
      title: data?.metaTitle || config.title,
      description: data?.metaDescriptionmeta || config.openGraph?.description,
      images: [
        {
          url: "/pixelEdgeLogo.webp",
          width: 800,
          height: 600,
          alt: "Pixel Edge",
        },
        {
          url: "/pixelEdgeLogo.webp",
          width: 800,
          height: 600,
          alt: "Pixel Edge",
        },
      ],
    },

    additionalLinkTags: [
      {
        rel: "favicon",
        href: "/pixelEdgeLogo.webp",
      },
      {
        rel: "apple-touch-icon",
        href: "/pixelEdgeLogo.webp",
        sizes: "76x76",
      },
    ],
    description: data?.metaDescription || config.description,
    twitter: {
      handle: "@handle",
      site: "@site",
      cardType: data?.metaDescription || config.twitter?.cardType,
    },

    canonical: data?.canonicalURL || config.canonical,
  };
};
