import useActiveSection from "../hooks/useActiveSection";

export default function Navbar() {
  const activeSection = useActiveSection();

  return (
    <section className="fixed z-10 w-full bg-background-main">
      <nav className="mx-auto flex w-full max-w-7xl py-4 lg:px-8">
        <ul className="mx-4 flex w-full list-none flex-row justify-between text-primary-font-blue lg:mx-0">
          <li>
            <a className="text-lg font-semibold" href="#home">
              Alena Hanchar
            </a>
          </li>
          <div className="flex flex-row gap-4 md:gap-10">
            <li>
              <a
                className={`${
                  activeSection === "experience"
                    ? "text-secondary-font-pink"
                    : "text-primary-font-blue"
                } nav-link`}
                href="#experience"
              >
                experience
              </a>
            </li>

            <li>
              <a
                className={`${
                  activeSection === "portfolio"
                    ? "text-secondary-font-pink"
                    : "text-primary-font-blue"
                } nav-link`}
                href="#portfolio"
              >
                portfolio
              </a>
            </li>

            <li>
              <a
                className={`${
                  activeSection === "about"
                    ? "text-secondary-font-pink"
                    : "text-primary-font-blue"
                } nav-link`}
                href="#about"
              >
                about
              </a>
            </li>

            <li>
              <a
                className={`${
                  activeSection === "contact"
                    ? "text-secondary-font-pink"
                    : "text-primary-font-blue"
                } nav-link`}
                href="#contact"
              >
                contact
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </section>
  );
}
