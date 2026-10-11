import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, Copy, Check, Gift, Zap } from 'lucide-react';

export default function WaitlistBanner() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(28);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setSpotsLeft((prev) => Math.max(1, prev - 1));
    }, 400);
  };

  const handleCopyLink = () => {
    navigator.clipboard?.writeText('https://rog.pk/join?ref=ROG-782');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="waitlist" className="py-20 relative bg-midnight border-t border-navy-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-navy-950 border-2 border-electric/40 p-8 sm:p-12 shadow-glow text-center relative overflow-hidden">
          
          <div className="absolute top-0 right-0 w-48 h-48 bg-electric/10 rounded-full blur-3xl pointer-events-none" />

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase mb-3">
            Join The ROG Founders Syndicate
          </h2>

          <p className="text-slate-300 text-sm sm:text-base font-sans max-w-lg mx-auto mb-8 font-light">
            The first 100 verified Karachi players receive 5 complimentary RTX 4090 gaming hours, a laser-engraved metal ROG Black Card, and an invitation to our inaugural tournament lock-in night.
          </p>

          {/* Clean 3 Perks Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8 text-left font-mono text-xs">
            <div className="p-4 rounded-xl bg-navy-900 border border-navy-800">
              <span className="text-electric font-bold block mb-0.5">5 Complimentary Hours</span>
              <span className="text-[11px] text-slate-400 font-sans">RTX 4090 Battlestations allocation</span>
            </div>
            <div className="p-4 rounded-xl bg-navy-900 border border-navy-800">
              <span className="text-electric font-bold block mb-0.5">Laser-Engraved Metal Card</span>
              <span className="text-[11px] text-slate-400 font-sans">Laser-engraved metal ROG Black ID</span>
            </div>
            <div className="p-4 rounded-xl bg-navy-900 border border-navy-800">
              <span className="text-electric font-bold block mb-0.5">Tournament Circuit Priority</span>
              <span className="text-[11px] text-slate-400 font-sans">VIP access to Rs. 250k Valorant circuit</span>
            </div>
          </div>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-2.5">
                <div className="relative flex-1">
                  <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-3.5 py-3 rounded-lg bg-navy-900 border border-navy-800 text-white text-xs focus:outline-none focus:border-electric font-sans"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-3 rounded-lg bg-electric hover:bg-electric-light text-white text-xs font-mono font-bold tracking-wider uppercase border border-white/20 flex items-center justify-center gap-1.5 transition-all shadow-glow disabled:opacity-50 cyber-cut"
                >
                  <span>Request Spot</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              <div className="mt-3 text-[11px] font-mono text-slate-400">
                <span className="text-electric font-bold">{spotsLeft} of 100</span> founder allocations remaining
              </div>
            </form>
          ) : (
            <div className="p-6 rounded-2xl bg-navy-900 border border-electric text-center max-w-md mx-auto font-mono text-xs">
              <CheckCircle2 className="w-7 h-7 text-electric mx-auto mb-2" />
              <h4 className="font-bold text-white text-base mb-1">Founder Spot Reserved</h4>
              <p className="text-[11px] text-slate-300 font-sans mb-4">
                We've added <strong className="text-white">{email}</strong> to the priority queue. Share your unique invite link with friends in Karachi to jump 10 positions:
              </p>

              <div className="flex items-center gap-2 p-2 rounded-lg bg-black border border-navy-800 text-[11px] text-slate-300 mb-3">
                <span className="truncate flex-1 text-left font-mono">https://rog.pk/join?ref=ROG-782</span>
                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="px-3 py-1.5 rounded bg-electric hover:bg-electric-light text-white text-[10px] font-mono flex items-center gap-1 font-bold transition-colors"
                >
                  {copied ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'Copied' : 'Copy'}</span>
                </button>
              </div>

              <span className="text-[10px] text-slate-400 block font-mono">
                Verification credentials dispatched to your inbox shortly.
              </span>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
