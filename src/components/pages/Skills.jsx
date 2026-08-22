import React from "react";
import { motion } from "framer-motion";
import { skillGroups } from "../../Data";

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="section-label">05 / Toolkit</div>
      <div className="mb-12 max-w-3xl"><h2 className="section-title">A toolkit built for <span className="gradient-text">shipping.</span></h2><p className="mt-5 text-lg leading-8 text-slate-400">I care less about collecting technologies and more about choosing the right tool for the problem — from ETL/ELT and SQL pipelines to RAG, MCP and full-stack products.</p></div>
      <div className="grid gap-5 md:grid-cols-2">
        {skillGroups.map((group, i) => <motion.div key={group.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }} className="glass-panel p-6"><h3 className="text-lg font-semibold text-white">{group.title}</h3><div className="mt-5 flex flex-wrap gap-2">{group.items.map((item) => <span className="chip" key={item}>{item}</span>)}</div></motion.div>)}
      </div>
    </section>
  );
}
