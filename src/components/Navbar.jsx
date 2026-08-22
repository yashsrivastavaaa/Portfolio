import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";

const items = [
  ["About", "/about"],
  ["Experience", "/experience"],
  ["Projects", "/projects"],
  ["Skills", "/skills"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    setOpen(false);
  }, [location.pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#070b14]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link to="/" className="group flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/10 font-bold text-sm shadow-lg shadow-cyan-500/10">YS</span>
          <span className="hidden font-semibold tracking-tight sm:block">Yash Srivastava</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {items.map(([label, path]) => (
            <NavLink key={path} to={path} className={({ isActive }) => `rounded-full px-4 py-2 text-sm transition ${isActive ? "bg-white text-slate-950" : "text-slate-400 hover:bg-white/10 hover:text-white"}`}>
              {label}
            </NavLink>
          ))}
        </div>

        <Link to="/contact" className="hidden items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm font-medium text-cyan-100 transition hover:bg-cyan-300/20 sm:flex">
          Let's talk <FiArrowUpRight aria-hidden="true" focusable="false" />
        </Link>

        <button className="rounded-xl border border-white/10 p-2 md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <FiX aria-hidden="true" focusable="false" /> : <FiMenu aria-hidden="true" focusable="false" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#0a0f1b] px-5 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {items.map(([label, path]) => (
              <NavLink key={path} to={path} className="rounded-xl px-4 py-3 text-slate-300 hover:bg-white/5 hover:text-white">{label}</NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
