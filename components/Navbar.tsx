import React from "react";

export default function Navbar() {
  return (
    <section className="w-full bg-background-dark">
      <nav className="mx-auto flex w-full max-w-7xl py-4 lg:px-8">
        <ul className="mx-4 flex w-full flex-row justify-between text-primary-font-blue lg:mx-0">
          <li>
            <a className="text-lg font-semibold" href="#">
              Alena Hanchar
            </a>
          </li>
          <div className="flex flex-row gap-4 md:gap-10">
            <li>
              <a className="nav-link" href="#">
                experience
              </a>
            </li>

            <li>
              <a className="nav-link" href="#">
                portfolio
              </a>
            </li>

            <li>
              <a className="nav-link" href="#">
                about
              </a>
            </li>

            <li>
              <a className="nav-link" href="#">
                contact
              </a>
            </li>
          </div>
        </ul>
      </nav>
    </section>
  );
}
