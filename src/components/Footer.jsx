import React from "react";
import { FiArrowUp, FiGithub, FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <div>© {new Date().getFullYear()} Yash Srivastava. Built with React.</div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/yashsrivastavaaa" target="_blank" rel="noreferrer" className="hover:text-white"><FiGithub aria-hidden="true" focusable="false" /></a>
          <a href="https://www.linkedin.com/in/yashsrivastavaaaaa/" target="_blank" rel="noreferrer" className="hover:text-white"><FiLinkedin aria-hidden="true" focusable="false" /></a>
          <button type="button" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="flex items-center gap-1 hover:text-white" aria-label="Scroll to top">Top <FiArrowUp aria-hidden="true" focusable="false" /></button>
        </div>
      </div>
    </footer>
  );
}
