import { useRef, useState } from "react";

import "./App.css";
import Navigation from "./components/Navigation";
import HeroPage from "./components/HeroPage";

import Banner from "./components/Banner";
import BestSeller from "./components/BestSeller";
import ArticleOne from "./components/Article_one";
import ArticleTwo from "./components/Article_two";
import SaleBanner from "./components/SaleBanner";
import Footer from "./components/Footer";

import { AnimatePresence, useScroll, motion } from "framer-motion";

function App() {
  return (
    <>
      <AnimatePresence>
        <div>
          <Navigation />
          <main className="grid grid-cols-1 isolate">
            <HeroPage />
          </main>
          <section>
            <Banner />
            <ArticleOne />
            <BestSeller />
            <ArticleTwo />
            <SaleBanner />
          </section>
          <Footer />
        </div>
      </AnimatePresence>
    </>
  );
}

export default App;
