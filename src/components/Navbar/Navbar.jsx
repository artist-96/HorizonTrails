"use client";
import Link from "next/link";
import React from "react";
import DarkMode from "./DarkMode";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export const Navlinks = [
  { id: 1, name: "Home", link: "/" },
  { id: 2, name: "Packages", link: "/about" },
  { id: 3, name: "Features", link: "/features" },
  { id: 4, name: "Blog", link: "/blog" },
  { id: 5, name: "Contact", link: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = React.useState(false);
  const [hoveredId, setHoveredId] = React.useState(null);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="relative z-10 shadow-md w-full dark:bg-black dark:text-white duration-300">
      <div className="container py-3 md:py-2">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex flex-col leading-tight group">
            <span className="text-3xl font-extrabold text-black dark:text-white">
              Horizon <span className="text-primary">Trails</span>
            </span>
            <span className="text-sm sm:text-base font-medium text-gray-600 group-hover:text-primary dark:text-gray-300">
              Tours and Travel
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="relative flex items-center gap-6">
              {/* Glowing animated background pill */}
              <AnimatePresence>
                {hoveredId !== null && (
                  <motion.div
                    key="hover-indicator"
                    layoutId="hover-indicator"
                    className="absolute rounded-full bg-primary/80 shadow-[0_0_25px_rgba(251,191,36,0.6)] h-10 -z-10 transition-all"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{
                      top: "50%",
                      left: hoveredId.left,
                      width: hoveredId.width,
                      transform: "translateY(-50%)",
                    }}
                  />
                )}
              </AnimatePresence>

              {/* Navigation links */}
              {Navlinks.map(({ id, name, link }) => {
                const isActive = pathname === link;
                return (
                  <li
                    key={id}
                    onMouseEnter={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const container = e.currentTarget.offsetParent;
                      const left =
                        rect.left - container.getBoundingClientRect().left;
                      setHoveredId({ left, width: rect.width });
                    }}
                    onMouseLeave={() => setHoveredId(null)}
                    className="relative z-10"
                  >
                    <Link
                      href={link}
                      className={`
                        text-lg font-medium py-2 px-4 rounded-full transition-colors duration-300
                        ${isActive ? "bg-primary text-black" : ""}
                        hover:text-black dark:hover:text-black
                      `}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
              <DarkMode />
            </ul>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center gap-4">
            <DarkMode />
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenu}
                className="cursor-pointer"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenu}
                className="cursor-pointer"
                size={30}
              />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </nav>
  );
};

export default Navbar;
