import React, { useState } from 'react';
import { Trophy, Calendar, ArrowRight, Zap, Users } from 'lucide-react';
import { TOURNAMENTS } from '../data/mockData';
import TournamentModal from './TournamentModal';

export default function Tournaments() {
  const [activeModalTournament, setActiveModalTournament] = useState(null);
  const [selectedGameFilter, setSelectedGameFilter] = useState('All');

  const games = ['All', 'Esports PC', 'PS5 Pro Console', 'Championship Snooker', 'Sim Racing'];

  const filteredTournaments = selectedGameFilter === 'All'
    ? TOURNAMENTS
    : TOURNAMENTS.filter(t => t.game.toLowerCase() === selectedGameFilter.toLowerCase());

  return (
    <section id="tournaments" className="py-24 relative bg-midnight border-t border-navy-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-navy-800 gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
              ROG Tournaments & Scrims
            </h2>
          </div>

          <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
            {games.map(g => (
              <button
                key={g}
                onClick={() => setSelectedGameFilter(g)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  selectedGameFilter === g
                    ? 'bg-electric text-white border border-white/30 shadow-glow font-bold'
                    : 'bg-navy-950 text-slate-400 hover:text-white border border-navy-800'
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {/* Tournament Fixtures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredTournaments.map((tourney) => {
            const pct = Math.round((tourney.registered / tourney.maxTeams) * 100);

            return (
              <div
                key={tourney.id}
                className="rounded-2xl bg-navy-950 border border-navy-800 hover:border-electric/60 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-card-glow hover:bg-navy-900/80 group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-mono font-bold text-electric bg-navy-900 px-2.5 py-1 rounded border border-electric/30 uppercase">
                      {tourney.game}
                    </span>
                    <span className="text-[11px] font-mono text-slate-300">
                      {tourney.status}
                    </span>
                  </div>

                  <h3 className="font-display font-bold text-xl text-white mb-2 group-hover:text-electric transition-colors">
                    {tourney.title}
                  </h3>

                  <div className="grid grid-cols-2 gap-3 py-3 border-y border-navy-800 mb-4 font-mono text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-3.5 h-3.5 text-electric flex-shrink-0" />
                      <span className="truncate">{tourney.date} // {tourney.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Trophy className="w-3.5 h-3.5 text-electric flex-shrink-0" />
                      <span>Fee: {tourney.entryFee}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1.5">
                      <span>{tourney.format}</span>
                      <span className="text-white font-medium">
                        {tourney.registered} / {tourney.maxTeams} Squads
                      </span>
                    </div>
                    <div className="w-full h-1.5 rounded-full bg-navy-900 border border-navy-800 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-electric to-electric-light rounded-full transition-all duration-500 shadow-[0_0_8px_#FF0033]"
                        style={{ width: `${pct}%` }}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-navy-800 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">Grand Prize Pool</span>
                    <span className="font-display font-bold text-xl text-white text-glow">
                      {tourney.prize}
                    </span>
                  </div>

                  <button
                    onClick={() => setActiveModalTournament(tourney)}
                    className="px-5 py-2.5 rounded-lg bg-electric hover:bg-electric-light text-white text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center gap-1.5 shadow-sm cyber-cut"
                  >
                    <span>Register Squad</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {activeModalTournament && (
        <TournamentModal
          tournament={activeModalTournament}
          onClose={() => setActiveModalTournament(null)}
        />
      )}
    </section>
  );
}
