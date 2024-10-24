import type { AppProps } from "next/app";
import { useTransition, animated } from "react-spring";
import { Inter } from "@next/font/google";
import Head from "next/head";

import "@/styles/globals.css";
import { Layout } from "@/components/Layout";
import "normalize.css/normalize.css";

import useFoucFix from "@/hooks/useFoucFix";
import { useIsomorphicLayoutEffect } from "@/hooks";

const inter = Inter({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  useFoucFix();

  const pageTransitions = useTransition([Component], {
    from: { opacity: 1 },
    enter: { opacity: 1 },
    leave: {
      opacity: 0,
      config: {
        duration: 900,
      },
    },
    exitBeforeEnter: true,
    config: {
      duration: 0,
    },
  });

  return (
    <div className={inter.className}>
      <Head>
        <title>Yusufbek Alimatov - Software Engineer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {pageTransitions((styles, Component) => (
          <animated.div style={styles}>
            <Component {...pageProps} />
          </animated.div>
        ))}
      </Layout>
    </div>
  );
}
