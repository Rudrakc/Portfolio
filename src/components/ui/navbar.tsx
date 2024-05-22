import { useState } from "react";
import { MenuIcon, XIcon } from "lucide-react"; // Assume XIcon is an icon for closing the menu

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div
        className={`fixed left-0 top-0 right-0 pt-12  w-screen bg-black/40 backdrop-blur-lg z-[150] transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 py-12">
          <a
            href="#hero"
            className="text-lg font-semibold"
            onClick={toggleMenu}
          >
            Home
          </a>
          <a
            href="#projects"
            className="text-lg font-semibold"
            onClick={toggleMenu}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-lg font-semibold"
            onClick={toggleMenu}
          >
            Contact
          </a>
        </nav>
      </div>

      <header className="w-full z-[150] fixed right-0 left-0 top-0 py-4 md:px-12 px-4 bg-black/40 backdrop-blur-lg flex items-center md:border-b-[1px] md:border-neutral-900 justify-between">
        <aside>
          <p className="text-xl md:text-3xl tracking-widest font-semibold">
            Rudra Chauhan
          </p>
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
        <aside className="flex items-center gap-4 md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </aside>
      </header>
    </div>
  );
};

export default Navbar;
