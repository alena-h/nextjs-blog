import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Experience from "../components/Experience";
import About from "../components/About";
import Work from "../components/Work";

export default function IndexPage() {
  return (
    <div
      aria-hidden="true"
      className="hide-scrollbar relative min-w-[650px] snap-y snap-mandatory overflow-x-hidden overflow-y-scroll"
    >
      <Navbar />
      <main className="flex flex-col gap-24">
        <Home />
        <Experience />
        <Work />
        <About />
      </main>
    </div>
  );
}
