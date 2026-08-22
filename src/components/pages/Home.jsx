import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import { education, profile, projects, resumeUrl } from "../../Data";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../Footer";

export default function Home() {
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden px-5 pb-24 pt-16 sm:px-8 sm:pt-24">
        <div className="hero-orb left-[-120px] top-20 bg-cyan-500/20" />
        <div className="hero-orb right-[-160px] top-40 bg-violet-500/20" />
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.15fr_.85fr]">
          <div>
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} className="mb-6 inline-flex rounded-full border border-white/10 bg-white/[.04] px-4 py-2 text-sm text-slate-300">
              <span className="mr-2 h-2 w-2 self-center rounded-full bg-emerald-400 shadow-[0_0_12px_#34d399]" />
              Data • AI • Engineering
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }} className="max-w-4xl text-5xl font-black tracking-[-.04em] text-white sm:text-7xl">
              Building things across <span className="gradient-text">AI, software, data, web & mobile.</span>
            </motion.h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-400">{profile.intro}</p>

            <div className="mt-7 flex flex-wrap gap-2">
              {["ETL / ELT", "RAG", "MCP", "LLMs", "Data Quality", "SQL Optimization"].map((item) => <span className="chip" key={item}>{item}</span>)}
            </div>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/projects" className="btn-primary">Explore my work <FiArrowRight aria-hidden="true" focusable="false" /></Link>
              <a href={resumeUrl} target="_blank" rel="noreferrer" className="btn-secondary"><FiDownload aria-hidden="true" focusable="false" /> Resume</a>
            </div>

            <div className="mt-8 flex flex-wrap gap-5 text-slate-400">
              <a className="social-link" href="https://github.com/yashsrivastavaaa" target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" focusable="false" /> GitHub</a>
              <a className="social-link" href="https://www.linkedin.com/in/yashsrivastavaaaaa/" target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" focusable="false" /> LinkedIn</a>
              <span className="social-link"><FiMapPin aria-hidden="true" focusable="false" /> {profile.location}</span>
            </div>
          </div>

          <motion.div initial={{ opacity: 0, scale: .92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7 }} className="relative">
            <div className="glass-panel relative mx-auto max-w-md overflow-hidden p-5 sm:p-6">
              <div className="relative overflow-hidden rounded-[1.4rem] border border-white/10 bg-slate-950/60">
                {!photoFailed ? (
                  <img src="/photo.png" alt="Yash Srivastava" className="h-[360px] w-full object-cover object-center" onError={() => setPhotoFailed(true)} />
                ) : (
                  <div className="flex h-[360px] items-center justify-center bg-gradient-to-br from-cyan-400/10 via-slate-950 to-violet-400/10 px-8 text-center">
                    <div><div className="text-7xl font-bold text-white/90">YS</div><p className="mt-3 text-sm text-slate-500">Add your photo as <span className="text-slate-300">public/photo.png</span></p></div>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-5 pt-24">
                  <p className="text-xs uppercase tracking-[.25em] text-cyan-300">Yash Srivastava</p>
                  <p className="mt-1 text-sm text-slate-300">AI • Software • Data • Web • Mobile</p>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </section>

      <AboutPreview />
      <Experience />
      <EducationSection />
      <Projects compact />
      <Skills compact />
      <Contact />
      <Footer />
    </>
  );
}

function EducationSection() {
  return (
    <section className="section-shell">
      <div className="section-label">03 / Education</div>
      <div className="glass-panel p-6 sm:p-8">
        {education.map((item, index) => (
          <React.Fragment key={item.title}>
            {index > 0 && <div className="my-7 border-t border-white/10" />}
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="mt-3 max-w-3xl text-2xl font-bold leading-tight text-white sm:text-3xl">{item.title}</h2>
              <p className="mt-3 text-base text-cyan-300">{item.school}</p>
              <p className="mt-1 text-sm text-slate-500">{item.location}</p>
            </div>
            <div className="shrink-0 rounded-2xl border border-white/10 bg-white/[.035] px-5 py-4 lg:text-right">
              <p className="text-sm text-slate-400">{item.period}</p>
              <p className="mt-2 text-xl font-bold text-white">{item.score}</p>
            </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

function AboutPreview() {
  return (
    <section className="section-shell">
      <div className="section-label">02 / About</div>
      <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
        <h2 className="section-title">Curious by default.<br /><span className="gradient-text">Practical by design.</span></h2>
        <div className="space-y-5 text-lg leading-8 text-slate-400">
          <p>I work across AI/LLM applications, software engineering, data systems, web and mobile products.</p>
          <p>At Crowe, my work included MCP-based SQL rule generation, RAG, metadata-driven data quality and performance optimization.</p>
          <Link to="/about" className="inline-flex items-center gap-2 font-medium text-cyan-300 hover:text-cyan-200">More about me <FiArrowRight aria-hidden="true" focusable="false" /></Link>
        </div>
      </div>
    </section>
  );
}
