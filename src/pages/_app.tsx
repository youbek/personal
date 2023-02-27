import { Inter } from "@next/font/google";

import "@/styles/globals.css";
import { Layout } from "@/components/Layout";
import "normalize.css/normalize.css";

import type { AppProps } from "next/app";

const inter = Inter({ weight: ["400", "500", "700"], subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={inter.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
