"use client";
import React, { useEffect, useState } from "react";

export default function Cursor() {
  const [cursorX, setCursorX] = useState(0);
  const [cursorY, setCursorY] = useState(0);

  const move = (e) => {
    const x = e.clientX || 0;
    const y = e.clientY || 0;

    setCursorX(x);
    setCursorY(y);
  };

  useEffect(() => {
    document.addEventListener("mousemove", move);

    return () => {
      document.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <div
      className="cursor"
      style={{ left: `${cursorX}px`, top: `${cursorY}px` }}
    />
  );
}
