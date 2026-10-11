import React, { useState } from 'react';
import { X, Trophy, CheckCircle2, ArrowRight } from 'lucide-react';

export default function TournamentModal({ tournament, onClose }) {
  const [captain, setCaptain] = useState('');
  const [teamName, setTeamName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!tournament) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-midnight/90 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg rounded-2xl bg-navy-950 border-2 border-electric p-6 sm:p-8 shadow-glow font-mono text-xs">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-navy-900 text-slate-400 hover:text-white border border-navy-800 hover:border-electric transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-electric/20 border border-electric flex items-center justify-center text-electric">
                <Trophy className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] uppercase tracking-wider text-electric block font-bold">
                  ROG Tournament Registration
                </span>
                <h3 className="font-display font-bold text-lg text-white">
                  {tournament.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-xl bg-navy-900 border border-navy-800 mb-6">
              <div>
                <span className="text-slate-400 block text-[10px]">PURSE</span>
                <span className="text-white font-bold text-sm text-glow">{tournament.prize}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">SCHEDULE</span>
                <span className="text-white">{tournament.date}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px]">ENTRY</span>
                <span className="text-electric font-bold">{tournament.entryFee}</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3.5 font-sans">
              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                  Team / Squad Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. ROG Sentinels / Crimson Clan"
                  value={teamName}
                  onChange={(e) => setTeamName(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-navy-900 border border-navy-800 text-white text-xs focus:outline-none focus:border-electric"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                  Captain / Solo Handle
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. TenZ / KarachiSniper"
                  value={captain}
                  onChange={(e) => setCaptain(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-navy-900 border border-navy-800 text-white text-xs focus:outline-none focus:border-electric"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                    WhatsApp Mobile
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+92 300 1234567"
                    value={whatsapp}
                    onChange={(e) => setWhatsapp(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-navy-900 border border-navy-800 text-white text-xs focus:outline-none focus:border-electric"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase text-slate-400 mb-1">
                    Captain Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="captain@esports.pk"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-navy-900 border border-navy-800 text-white text-xs focus:outline-none focus:border-electric"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-lg bg-electric hover:bg-electric-light text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-glow flex items-center justify-center gap-2 border border-white/20"
                >
                  <span>Submit Squad Entry</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <p className="text-[10px] text-slate-400 text-center font-mono">
                Entry fee verified at counter upon bracket confirmation.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <CheckCircle2 className="w-12 h-12 text-electric mx-auto mb-3 animate-pulse" />
            <h3 className="font-display font-bold text-xl text-white mb-1">
              Registration Recorded
            </h3>
            <p className="text-xs text-slate-300 font-sans max-w-sm mx-auto mb-6">
              Squad <strong className="text-white">{teamName}</strong> has been tentatively seeded into <strong className="text-electric">{tournament.title}</strong>. Our tournament referee will reach out via WhatsApp at {whatsapp} with bracket timings.
            </p>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-lg bg-navy-900 hover:bg-navy-800 text-white font-mono text-xs border border-navy-800"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
