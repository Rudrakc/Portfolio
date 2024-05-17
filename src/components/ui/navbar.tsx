import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="fixed right-0 left-0 top-0 py-4 px-12 bg-black/40 backdrop-blur-lg z-[150] flex items-center border-b-[1px] border-neutral-900 justify-between">
      <aside>
        <p className="text-3xl tracking-widest font-semibold">Rudra Chauhan</p>
      </aside>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-10 list-none">
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a
              href="#contact"
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Contact
              </span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;