import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Experience from "../components/Experience";
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";

export default function IndexPage() {
  return (
    <div
      aria-hidden="true"
      className="hide-scrollbar relative snap-y snap-mandatory overflow-x-hidden overflow-y-scroll"
    >
      <Navbar />
      <main className="mx-auto flex max-w-7xl flex-col gap-24">
        <Home />
        <Experience />
        <Work />
        <About />
        <Contact />
      </main>
    </div>
  );
}
