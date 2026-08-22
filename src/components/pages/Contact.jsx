import React, { useState } from "react";
import { FiArrowUpRight, FiMail, FiSend } from "react-icons/fi";
import { contactInfo } from "../../Data";

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=yashsrivns@gmail.com&su=${encodeURIComponent(`Portfolio message from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <section className="section-shell pb-20">
      <div className="section-label">06 / Contact</div>
      <div className="grid gap-6 lg:grid-cols-[.9fr_1.1fr]">
        <div className="glass-panel p-7 sm:p-9">
          <div className="mb-6 inline-flex rounded-2xl bg-cyan-300/10 p-3 text-cyan-300"><FiMail aria-hidden="true" focusable="false" /></div>
          <h2 className="text-4xl font-bold tracking-tight">Let’s build something <span className="gradient-text">useful.</span></h2>
          <p className="mt-5 leading-7 text-slate-400">Have a role, product idea or technical problem worth discussing? I’m open to new opportunities and collaborations.</p>
          <div className="mt-8 space-y-3">
            {contactInfo.map((item) => <a key={item.title} href={item.link} target={item.newTab ? "_blank" : undefined} rel="noreferrer" className="flex items-center gap-3 rounded-xl border border-white/5 bg-white/[.025] p-3 text-sm text-slate-300 transition hover:border-cyan-300/20 hover:text-white">{item.icon}<span>{item.content}</span><FiArrowUpRight className="ml-auto text-slate-600"  aria-hidden="true" focusable="false" /></a>)}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="glass-panel p-7 sm:p-9">
          <div className="mb-6"><h3 className="text-xl font-semibold">Send a message</h3><p className="mt-1 text-sm text-slate-500">The button opens a pre-filled Gmail compose window.</p></div>
          <div className="grid gap-4 sm:grid-cols-2">
            <input required name="name" className="field" placeholder="Your name" />
            <input required type="email" name="email" className="field" placeholder="Email address" />
          </div>
          <textarea required name="message" rows="7" className="field mt-4 resize-none" placeholder="Tell me what you're working on..." />
          <button className="btn-primary mt-4 w-full justify-center"><FiSend aria-hidden="true" focusable="false" /> {sent ? "Gmail opened" : "Compose message"}</button>
        </form>
      </div>
    </section>
  );
}
