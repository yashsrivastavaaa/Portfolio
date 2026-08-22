import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projects } from "../../Data";

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="section-label">04 / Projects</div>
      <div className="mb-12 max-w-3xl"><h2 className="section-title">Things I’ve <span className="gradient-text">built.</span></h2><p className="mt-5 text-lg leading-8 text-slate-400">Selected projects spanning AI, mobile, data and full-stack product development.</p></div>
      <div className="grid gap-6 lg:grid-cols-2">
        {projects.map((project, index) => <motion.article key={project.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className="glass-panel flex h-full flex-col p-6 sm:p-7">
          <div className="flex items-center justify-between gap-4"><span className="text-xs font-semibold uppercase tracking-[.18em] text-cyan-300">{project.type}</span><span className="text-sm text-slate-600">0{index + 1}</span></div>
          <h3 className="mt-5 text-2xl font-bold text-white">{project.title}</h3>
          <p className="mt-4 leading-7 text-slate-400">{project.description}</p>
          <div className="mt-6 space-y-3">{project.features.map((feature) => <div className="flex gap-3 text-sm text-slate-300" key={feature}><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-300" />{feature}</div>)}</div>
          <div className="mt-7 flex flex-wrap gap-2">{project.techStack.map((tech) => <span className="chip" key={tech}>{tech}</span>)}</div>
          <div className="mt-auto flex flex-wrap gap-3 pt-8">{project.demoLink && <a className="btn-small" href={project.demoLink} target="_blank" rel="noreferrer">Live / Demo <FiArrowUpRight aria-hidden="true" focusable="false" /></a>}{project.codeLink && <a className="btn-small-secondary" href={project.codeLink} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" focusable="false" /> Code</a>}</div>
        </motion.article>)}
      </div>
    </section>
  );
}
