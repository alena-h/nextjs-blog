import React from "react";
import Navbar from "../components/Navbar";
import Home from "../components/Home";

export default function Portfolio() {
  return (
    <div className="h-screen min-w-[500px]">
      <Navbar />
      <main className="h-full bg-background-main">
        <Home />
      </main>
    </div>
  );
}
