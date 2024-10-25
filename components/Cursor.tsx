"use client";
import React, { useEffect, useState } from "react";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const move = (e) => {
    const x = e.clientX || 0;
    const y = e.clientY || 0;

    setPosition({ x, y });
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
      style={{
        transform: `translate3d(${position.x - 300}px, ${position.y - 300}px, 0)`,
      }}
    />
  );
}
