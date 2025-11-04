import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry from ${name || 'Someone'}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="relative z-10 bg-neutral-950 py-20 text-white">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mx-auto mb-10 text-center">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">Let’s Connect</h2>
          <p className="mt-3 text-white/70">Have a project in mind or want to collaborate? Drop a message.</p>
        </div>
        <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm text-white/80">Name</label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 focus:border-white/20"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="mb-2 block text-sm text-white/80">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 focus:border-white/20"
                placeholder="you@example.com"
                required
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="mb-2 block text-sm text-white/80">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={5}
              className="w-full rounded-lg border border-white/10 bg-neutral-900 px-4 py-3 text-white placeholder-white/40 outline-none ring-0 focus:border-white/20"
              placeholder="Tell me about your project, timeline, and goals"
              required
            />
          </div>
          <div className="mt-6 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="inline-flex items-center gap-2 text-white/70">
              <Mail className="h-4 w-4" /> hello@example.com
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-5 py-3 text-sm font-semibold text-neutral-950 shadow-lg shadow-cyan-500/30 transition hover:bg-cyan-400"
            >
              Send Message <Send className="h-4 w-4" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
