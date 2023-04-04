import Head from "next/head";

import Header from "@/layout/homePage/Header";
import Advantages from "@/layout/homePage/Advantages";
import Slider from "@/components/Slider";
import Categories from "@/layout/homePage/Categories";
import Features from "@/layout/homePage/Features";
import Testimonials from "@/layout/homePage/Testimonials";
import SpecialFeatures from "@/layout/homePage/SpecialFeatures";
import { slides } from "@/helpers/categories-info";
import { slideTS } from "@/helpers/types";

export default function Home() {
  return (
    <>
      <Head>
        <title>Learning platform</title>
        <meta name="description" content="Learning platform" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>
        <Advantages />
        <Slider slides={slides} />
        <Categories />
        <Features />
        <Testimonials />
        <SpecialFeatures />
      </main>
    </>
  );
}
