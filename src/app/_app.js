"use client";
import "swiper/css";
import Head from "next/head";
import Link from "next/link";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Script from "next/script";
import { Fragment } from "react";
import "../assets/scss/main.scss";
import { client } from "../api/client";
import { WhatsappIcon } from "react-share";
import NextTopLoader from "nextjs-toploader";
import NextNProgress from "nextjs-progressbar";
import { ApolloProvider } from "@apollo/client";
import "../assets/fonts/fontawesome-all.min.css";

function ApolloWrapper({ children }) {
  return (
    <Fragment>
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      ></Script>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>

      <NextNProgress
        color="#29D"
        startPosition={0.3}
        height={3}
        showOnShallow={true}
      />
      <NextTopLoader color="#29D"/>
      <ApolloProvider client={client}>
        <button
          style={{
            position: "fixed",
            bottom: "25px",
            right: "15px",
            cursor: "pointer",
            zIndex: "99999999",
            backgroundColor: "transparent",
            border: "none",
          }}
        >
          <Link
            href="https://api.whatsapp.com/send?phone=+61491975682&text=Hello, I came across your website and was wondering if you could assist me with some information about [product/service]. Can we chat now?"
            target="_blank"
            rel="noreferrer"
            getProjectCategories
          >
            {" "}
            <WhatsappIcon style={{ borderRadius: "60px" }} />
          </Link>
        </button>
        {children}
      </ApolloProvider>
    </Fragment>
  );
}

export default ApolloWrapper;
