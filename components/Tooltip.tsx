import React from "react";

interface TooltipProps {
  text: string;
  style?: React.CSSProperties;
}

const Tooltip: React.FC<TooltipProps> = ({ text, style }) => {
  return (
    <div
      style={style}
      className="absolute bottom-8 left-1/2 z-10 mt-1 -translate-x-1/2 transform rounded bg-secondary-font-pink p-1 px-4 text-sm text-white opacity-100 transition-opacity duration-300"
    >
      {text}
      <div className="absolute left-1/2 top-full h-0 w-0 -translate-x-1/2 transform border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-secondary-font-pink" />
    </div>
  );
};

export default Tooltip;
