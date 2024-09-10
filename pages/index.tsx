import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";
import Experience from "../components/Experience";
import About from "../components/About";
import Cursor from "../components/Cursor";

export default function Portfolio() {
  return (
    <div className="hide-scrollbar relative h-screen min-w-[650px] snap-y snap-mandatory overflow-x-hidden overflow-y-scroll">
      <Navbar />
      <Cursor />
      <main className="flex flex-col gap-24">
        <Home />
        <Experience />
        <About />
      </main>
    </div>
  );
}
