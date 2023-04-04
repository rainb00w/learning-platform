import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "@next/font/local";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";

import LayoutWrapper from "@/layout/LayoutWrapper";
import { RecoilRoot } from "recoil";

const latoFont = localFont({
  subsets: ["latin"],
  variable: "--font-lato",
  src: [
    {
      path: "../fonts/LatoLatin-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/LatoLatin-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/LatoLatin-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../fonts/Lato-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <main className={`${latoFont.variable} font-sans `}>
            <LayoutWrapper>
              <Component {...pageProps} />
            </LayoutWrapper>
          </main>
          {/* <ReactQueryDevtools /> */}
        </Hydrate>
      </QueryClientProvider>{" "}
    </RecoilRoot>
  );
}
