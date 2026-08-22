import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiBookOpen, FiMapPin } from "react-icons/fi";
import { education, profile, resumeUrl } from "../../Data";

export default function About() {
  const [photoFailed, setPhotoFailed] = useState(false);
  return (
    <section className="section-shell">
      <div className="section-label">01 / About</div>
      <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
        <div className="glass-panel overflow-hidden p-5">
          {!photoFailed ? <img src="/photo.png" alt="Yash Srivastava" className="h-[430px] w-full rounded-[1.25rem] object-cover" onError={() => setPhotoFailed(true)} /> : <div className="flex h-[430px] items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-cyan-400/10 to-violet-400/10 text-7xl font-bold text-white/90">YS</div>}
          <div className="px-2 pb-2 pt-5"><p className="text-sm text-slate-400"><FiMapPin className="mr-2 inline text-cyan-300" aria-hidden="true" focusable="false" />{profile.location}</p><p className="mt-2 text-sm text-slate-500">{profile.education}</p></div>
        </div>
        <div>
          <h1 className="section-title">A developer who likes <span className="gradient-text">building things end-to-end.</span></h1>
          <p className="mt-7 text-lg leading-8 text-slate-400">{profile.intro}</p>
          <p className="mt-5 text-lg leading-8 text-slate-400">My recent work spans metadata-driven data quality, MCP-based SQL rule generation, RAG, SQL performance optimization, dashboards and AI-powered products.</p>
          <a href={resumeUrl} target="_blank" rel="noreferrer" className="btn-primary mt-8 inline-flex">View resume <FiArrowUpRight aria-hidden="true" focusable="false" /></a>
          <div className="mt-12"><h2 className="mb-6 flex items-center gap-3 text-xl font-semibold"><FiBookOpen className="text-cyan-300" aria-hidden="true" focusable="false" /> Education</h2>{education.map((item, i) => <motion.div key={item.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .08 }} className="glass-panel p-6"><div className="flex flex-col justify-between gap-3 sm:flex-row"><div><h3 className="font-semibold text-white">{item.title}</h3><p className="mt-1 text-sm text-cyan-300">{item.school}</p><p className="mt-1 text-sm text-slate-500">{item.location}</p></div><div className="text-sm text-slate-500 sm:text-right"><div>{item.period}</div>{item.score && <div className="mt-1 text-slate-300">{item.score}</div>}</div></div></motion.div>)}</div>
        </div>
      </div>
    </section>
  );
}
