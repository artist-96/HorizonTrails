// ResponsiveMenu.tsx
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { Navlinks } from "./Navbar";
import Link from "next/link";

const ResponsiveMenu = ({ showMenu }) => {
  return (
    <div
      className={`${
        showMenu ? "left-0" : "-left-[100%]"
      } fixed top-0 bottom-0 z-[9999] flex h-screen w-[75%] flex-col justify-between bg-white dark:bg-dark dark:text-white px-8 pb-6 pt-16 text-black duration-300 md:hidden rounded-r-xl shadow-2xl`}
    >
      {/* User section */}
      <div className="flex items-center gap-3">
        <FaUserCircle className="text-5xl" />
        <div>
          <h1>Hello User</h1>
          <h2 className="text-sm text-slate-500">Premium user</h2>
        </div>
      </div>

      {/* Navigation */}
      <nav className="mt-12">
        <ul>
          {Navlinks.map(({ id, name, link }) => (
            <li key={id} className="py-4">
              <Link
                href={link}
                className="text-xl font-medium text-black dark:text-white duration-300"
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Optional Footer */}
      <div className="footer text-sm text-slate-400">© 2025 WanderMore</div>
    </div>
  );
};

export default ResponsiveMenu;
