
export const convertSeo = (seoData) => {
    return {
      title:
        seoData?.metaTitle ||
        "Pixel Edge",
      description:
        seoData?.metaDescription ||
        "We offer modern solutions for growing your business.",
      publisher: "https://pixeledge.com.au/",
      keywords: seoData?.keywords,
      robots: "index, follow, max-image-preview:large",
      icons: {
        icon: "/favicon.png",
      },
      authors: [
        {
          url: `${process.env.NEXT_PUBLIC_HOST_MEDIA}${seoData?.metaImage?.data?.attributes?.url}`,
        },
      ],
      alternates: {
        canonical: seoData?.canonicalURL || "https://pixeledge.com.au/",
      },
      openGraph: {
        type: "website",
        title:
          seoData?.metaTitle ||
          "Pixel Edge",
        description:
          seoData?.metaDescription ||
          "We offer modern solutions for growing your business.",
        images: [
          `${process.env.NEXT_PUBLIC_HOST_MEDIA}${seoData?.metaImage?.data?.attributes?.url}`,
        ],
      },
      twitter: {
        handle: "@handle",
        site: "@site",
        cardType: "We offer modern solutions for growing your business.",
        description:
          seoData?.metaDescription ||
          "We offer modern solutions for growing your business.",
        title:
          seoData?.metaTitle ||
          "Pixel Edge",
        domain: "https://pixeledge.com.au/",
        images: [
          {
            url: `${process.env.NEXT_PUBLIC_HOST_MEDIA}${seoData?.metaImage?.data?.attributes?.url}`,
            alt: "Pixel Edge metaImage",
            secureUrl: "",
            type: "image",
          },
        ],
      },
    };
  };