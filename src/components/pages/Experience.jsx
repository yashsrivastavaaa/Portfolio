import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase, FiZap } from "react-icons/fi";
import { experience } from "../../Data";

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="section-label">02 / Experience</div>
      <div className="mb-12 max-w-3xl"><h2 className="section-title">Building systems that <span className="gradient-text">scale.</span></h2><p className="mt-5 text-lg leading-8 text-slate-400">Data quality, LLM workflows, RAG, dashboards and performance engineering from my internship at Crowe.</p></div>
      {experience.map((exp) => (
        <motion.article key={exp.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="glass-panel p-6 sm:p-8">
          <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
            <div className="flex gap-4"><div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300"><FiBriefcase aria-hidden="true" focusable="false" /></div><div><h3 className="text-2xl font-bold text-white">{exp.role}</h3><p className="mt-1 text-cyan-300">{exp.company}</p><p className="mt-1 text-sm text-slate-500">{exp.location}</p></div></div>
            <span className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-slate-400">{exp.duration}</span>
          </div>
          <div className="mt-8 space-y-4">{exp.highlights.map((item) => <div className="flex gap-3 text-slate-300" key={item}><FiZap className="mt-1 shrink-0 text-cyan-300" aria-hidden="true" focusable="false" /><p className="leading-7">{item}</p></div>)}</div>
          <div className="mt-7 flex flex-wrap gap-2">{exp.techStack.map((tech) => <span className="chip" key={tech}>{tech}</span>)}</div>
        </motion.article>
      ))}
    </section>
  );
}
