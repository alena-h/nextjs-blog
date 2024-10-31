import { useState } from "react";
import { SocialLinks } from "../data/projectsData";
import Tooltip from "./Tooltip";

export default function Contacts() {
  const [tooltipText, setTooltipText] = useState("");
  const [showTooltip, setShowTooltip] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);

  const handleMouseEnter = (url, link) => {
    setTooltipText(url);
    setHoveredLink(link);
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
    setHoveredLink(null);
  };

  return (
    <section id="contact" className="section h-full flex-col">
      <div className="mb-[20%] flex w-full flex-col p-4 px-8">
        <h2 className="section-title">Contact Me</h2>
        <div className="relative mx-auto grid w-fit grid-cols-1 items-start gap-4 self-center pt-6 md:grid-cols-2 lg:self-start">
          {Object.entries(SocialLinks).map(
            ([key, { label, url, link, icon: Icon }]) => (
              <div
                key={key}
                className="relative flex flex-col items-center justify-stretch lg:flex-row lg:gap-4"
              >
                <span className="flex items-center text-xl leading-[3rem] text-primary-font-blue">
                  <Icon className="mr-2 text-xl" />
                  {label}:
                </span>
                <a
                  href={label === "Email" ? `mailto:${url}` : url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-fit overflow-hidden text-ellipsis whitespace-nowrap text-lg leading-6 text-primary-font-blue hover:underline md:text-[1.5rem] md:leading-[3rem]"
                  onMouseEnter={() => handleMouseEnter(url, key)}
                  onMouseLeave={handleMouseLeave}
                >
                  {link}
                </a>
                {showTooltip && hoveredLink === key && (
                  <Tooltip text={tooltipText} />
                )}
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
