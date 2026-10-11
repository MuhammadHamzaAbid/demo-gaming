import React, { useState } from 'react';
import { 
  Calendar, Clock, Users, CheckCircle2, QrCode, 
  ArrowRight, Download, Monitor, Gamepad2, Film, 
  Car, RefreshCw, Check, Layers, SlidersHorizontal, 
  CircleDot, Trophy, Coffee, Sparkles, Zap
} from 'lucide-react';
import { FLOOR_STATIONS, BOOKING_ADDONS, BRAND_INFO } from '../data/mockData';

const zoneOptions = [
  { id: 'rog-pc', name: 'ROG Strix Rig (RTX 4090 // Rs. 500/hr)', price: 500, rateLabel: 'Rs. 500 / hr', icon: Monitor },
  { id: 'rog-5v5', name: '5v5 Tournament Arena (10 Rigs // Rs. 4,500/hr)', price: 4500, rateLabel: 'Rs. 4,500 / hr', icon: Trophy },
  { id: 'sim-racing', name: 'Hyper-Drive Sim Racing (20Nm // Rs. 1,200/hr)', price: 1200, rateLabel: 'Rs. 1,200 / hr', icon: Car },
  { id: 'ps5-gaming', name: 'PS5 Pro VIP Pod (65" OLED // Rs. 900/hr)', price: 900, rateLabel: 'Rs. 900 / hr', icon: Gamepad2 },
  { id: 'creator-studio', name: 'VIP Streamer Studio (Dual-PC // Rs. 900/hr)', price: 900, rateLabel: 'Rs. 900 / hr', icon: Monitor },
  { id: 'private-cinema', name: 'ROG Private 4K Cinema (180" // Rs. 1,500/hr)', price: 1500, rateLabel: 'Rs. 1,500 / hr', icon: Film },
  { id: 'cue-sports', name: 'Tournament Snooker & Pool (From Rs. 14/min)', price: 960, rateLabel: 'Rs. 16 / min (Rs. 960/hr)', icon: CircleDot },
  { id: 'indoor-games', name: 'Table Tennis Court (Rs. 700/hr)', price: 700, rateLabel: 'Rs. 350 / 30m • Rs. 700 / hr', icon: Trophy },
];

const timeSlots = [
  { time: '2:30 PM', label: 'Afternoon Bootcamp' },
  { time: '6:00 PM', label: 'Evening Prime' },
  { time: '9:30 PM', label: 'Tournament Hours' },
  { time: '12:00 AM', label: 'Midnight Lock-In' },
  { time: '2:30 AM', label: 'Night Owl Session (Until 5 AM)' },
];

export default function BookingSection({ selectedZoneId, setSelectedZoneId }) {
  const [zone, setZone] = useState(selectedZoneId || 'rog-pc');
  const [date, setDate] = useState('2026-11-20');
  const [timeSlot, timeSlotSet] = useState('9:30 PM');
  const [players, setPlayers] = useState(1);
  const [duration, setDuration] = useState(2);
  const [selectedStation, setSelectedStation] = useState('ROG-PC-01');
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedReservation, setConfirmedReservation] = useState(null);

  React.useEffect(() => {
    if (selectedZoneId) {
      setZone(selectedZoneId);
      const firstAvailable = FLOOR_STATIONS.find(s => s.zone === selectedZoneId && s.status === 'available');
      if (firstAvailable) setSelectedStation(firstAvailable.id);
    }
  }, [selectedZoneId]);

  const currentZone = zoneOptions.find((z) => z.id === zone) || zoneOptions[0];
  const stationObj = FLOOR_STATIONS.find(s => s.id === selectedStation) || FLOOR_STATIONS[0];

  const isPerUserZone = zone === 'rog-pc';
  const baseRate = isPerUserZone 
    ? currentZone.price * duration * Math.max(1, players)
    : currentZone.price * duration;

  const addonsTotal = selectedAddons.reduce((sum, addonId) => {
    const item = BOOKING_ADDONS.find(a => a.id === addonId);
    return sum + (item ? item.price : 0);
  }, 0);
  const grandTotal = baseRate + addonsTotal;

  const toggleAddon = (id) => {
    setSelectedAddons(prev => 
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const handleStationClick = (st) => {
    if (st.status !== 'available') return;
    setSelectedStation(st.id);
    setZone(st.zone);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setConfirmedReservation({
        reference: `ROG-${Math.floor(1000 + Math.random() * 9000)}`,
        zoneName: currentZone.name,
        date,
        time: timeSlot,
        duration: `${duration} Hours`,
        players: zone === 'rog-5v5' ? '10 Players (5v5 Squad)' : `${players} Player(s)`,
        stationLabel: stationObj.label,
        stationId: stationObj.id,
        addons: selectedAddons.map(id => BOOKING_ADDONS.find(a => a.id === id)?.name).filter(Boolean),
        total: `Rs. ${grandTotal.toLocaleString()}`,
        name: name || 'Squad Leader',
        phone: phone || '+92 300 0000000',
      });
      setIsSubmitting(false);
    }, 450);
  };

  return (
    <section id="booking" className="py-24 relative bg-midnight border-t border-navy-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-white tracking-tight uppercase">
            Reserve Battle Station
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 font-sans max-w-xl font-light">
            Book liquid-cooled ROG Strix PC rigs (Rs. 500/hr), 5v5 competition arena, motion sim racing (Rs. 1,200/hr), or private 4K laser cinema with real-time station allocation.
          </p>
        </div>

        {!confirmedReservation ? (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-navy-950 border border-electric/40 p-6 sm:p-10 shadow-card-glow backdrop-blur-md"
          >
            {/* Step 1: Interactive Clubhouse Floorplan */}
            <div className="mb-10 pb-8 border-b border-navy-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                <label className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold flex items-center gap-2">
                  <Layers className="w-4 h-4 text-electric" />
                  <span>Interactive ROG Arena Floorplan // Live Station Telemetry</span>
                </label>
                <div className="flex items-center gap-4 text-[10px] font-mono">
                  <span className="flex items-center gap-1.5 text-slate-300">
                    <span className="w-2 h-2 rounded-full bg-electric shadow-[0_0_6px_#FF0033]" /> Available
                  </span>
                  <span className="flex items-center gap-1.5 text-slate-500">
                    <span className="w-2 h-2 rounded-full bg-navy-800" /> In Match
                  </span>
                  <span className="flex items-center gap-1.5 text-white font-bold">
                    <span className="w-2 h-2 rounded-full bg-white ring-2 ring-electric" /> Selected
                  </span>
                </div>
              </div>

              {/* Station Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2.5 p-4 rounded-xl bg-navy-900 border border-navy-800">
                {FLOOR_STATIONS.map((st) => {
                  const isSelected = selectedStation === st.id;
                  const isAvailable = st.status === 'available';

                  return (
                    <button
                      key={st.id}
                      type="button"
                      disabled={!isAvailable}
                      onClick={() => handleStationClick(st)}
                      className={`p-2.5 rounded-lg border text-left transition-all font-mono ${
                        isSelected
                          ? 'bg-electric text-white border-white shadow-glow'
                          : isAvailable
                          ? 'bg-navy-950 border-navy-800 text-slate-300 hover:border-electric'
                          : 'bg-navy-950/40 border-navy-900/50 text-slate-600 cursor-not-allowed opacity-50'
                      }`}
                    >
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-[10px] uppercase font-bold truncate pr-1">{st.label.split(' ')[0]}</span>
                        <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${
                          isSelected ? 'bg-white' : isAvailable ? 'bg-electric' : 'bg-slate-700'
                        }`} />
                      </div>
                      <span className="text-[9px] block text-slate-400 truncate">{st.id}</span>
                    </button>
                  );
                })}
              </div>
              <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>ACTIVE SELECTION: <strong className="text-electric">{stationObj.label} ({stationObj.specs})</strong></span>
                <span className="text-white font-bold">{currentZone.rateLabel}</span>
              </div>
            </div>

            {/* Step 2: Zone Quick Select */}
            <div className="mb-8">
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-bold">
                Select Service & Hardware Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {zoneOptions.map((opt) => {
                  const Icon = opt.icon;
                  const isSelected = zone === opt.id;
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => {
                        setZone(opt.id);
                        const match = FLOOR_STATIONS.find(s => s.zone === opt.id && s.status === 'available');
                        if (match) setSelectedStation(match.id);
                      }}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border text-left transition-all ${
                        isSelected
                          ? 'bg-navy-900 border-electric text-white shadow-glow-sm'
                          : 'bg-navy-950 border-navy-800 text-slate-300 hover:border-electric/50'
                      }`}
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${
                        isSelected ? 'bg-electric text-white shadow-sm' : 'bg-navy-900 text-slate-400'
                      }`}>
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="overflow-hidden">
                        <span className="block text-xs font-bold text-white truncate">{opt.name.split('(')[0]}</span>
                        <span className="text-[11px] text-electric font-mono">{opt.rateLabel}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Date, Time, Duration & Players */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Session Date
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-navy-900 border border-navy-800 text-white font-mono text-xs focus:outline-none focus:border-electric"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => timeSlotSet(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-navy-900 border border-navy-800 text-white font-mono text-xs focus:outline-none focus:border-electric"
                >
                  {timeSlots.map((ts) => (
                    <option key={ts.time} value={ts.time}>
                      {ts.time} ({ts.label})
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Duration (Hours)
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 3, 5].map((hr) => (
                    <button
                      key={hr}
                      type="button"
                      onClick={() => setDuration(hr)}
                      className={`flex-1 py-2 rounded-lg font-mono text-xs transition-all ${
                        duration === hr
                          ? 'bg-electric text-white border border-white/20 font-bold shadow-sm'
                          : 'bg-navy-900 text-slate-400 border border-navy-800 hover:text-white'
                      }`}
                    >
                      {hr}h
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Players / Seats
                </label>
                <div className="flex items-center gap-2">
                  {[1, 2, 4, 10].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setPlayers(num)}
                      className={`flex-1 py-2 rounded-lg font-mono text-xs transition-all ${
                        players === num
                          ? 'bg-electric text-white border border-white/20 font-bold shadow-sm'
                          : 'bg-navy-900 text-slate-400 border border-navy-800 hover:text-white'
                      }`}
                    >
                      {num === 10 ? '5v5' : num}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 4: Hospitality Add-Ons */}
            <div className="mb-8">
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-400 mb-3 font-bold">
                ROG Fuel & Hospitality Add-Ons
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 font-mono text-xs">
                {BOOKING_ADDONS.map((addon) => {
                  const isChecked = selectedAddons.includes(addon.id);
                  return (
                    <div
                      key={addon.id}
                      onClick={() => toggleAddon(addon.id)}
                      className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                        isChecked
                          ? 'bg-navy-900 border-electric text-white shadow-sm'
                          : 'bg-navy-950 border-navy-800 text-slate-300 hover:border-electric/50'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border ${
                        isChecked ? 'bg-electric border-electric text-white' : 'border-slate-600 bg-navy-900'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-0.5">
                          <span className="font-bold text-white text-[11px] truncate pr-1">{addon.name}</span>
                          <span className="text-electric font-bold">+Rs. {addon.price}</span>
                        </div>
                        <p className="text-[10px] text-slate-400 font-sans leading-tight">{addon.detail}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Player Details & Price Breakdown */}
            <div className="pt-6 border-t border-navy-800 grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Player / Squad Leader Name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-navy-800 text-white font-sans text-xs focus:outline-none focus:border-electric"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp Mobile (+92 300 0000000)"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-navy-900 border border-navy-800 text-white font-sans text-xs focus:outline-none focus:border-electric"
                />
              </div>

              <div className="p-4 rounded-xl bg-navy-900 border border-navy-800 space-y-2 font-mono text-xs">
                <div className="flex justify-between text-slate-400">
                  <span>Base Gaming Session:</span>
                  <span className="text-white">Rs. {baseRate.toLocaleString()}</span>
                </div>
                {addonsTotal > 0 && (
                  <div className="flex justify-between text-slate-400">
                    <span>Selected Add-Ons:</span>
                    <span className="text-electric">+Rs. {addonsTotal.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-bold text-white pt-2 border-t border-navy-800">
                  <span>Total Due at Counter:</span>
                  <span className="text-electric text-base">Rs. {grandTotal.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl bg-electric hover:bg-electric-light text-white font-mono font-bold text-xs uppercase tracking-wider transition-all shadow-glow hover:shadow-glow-lg flex items-center justify-center gap-2 border border-white/20 cyber-cut"
              >
                {isSubmitting ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Allocating ROG Battlestation...</span>
                  </>
                ) : (
                  <>
                    <span>Confirm & Generate ROG Digital Pass</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          /* High-Fidelity Holographic Digital Pass */
          <div className="rounded-2xl bg-navy-950 border-2 border-electric p-8 shadow-glow max-w-xl mx-auto font-mono text-xs relative overflow-hidden">
            
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-navy-800">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-black border border-electric p-1 shadow-sm flex items-center justify-center">
                  <img src="/rog-logo.png" alt="ROG Logo" className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-white">ROG ARENA KARACHI PASS</h3>
                  <span className="text-[10px] text-electric">PASS REF: {confirmedReservation.reference}</span>
                </div>
              </div>
              <span className="text-white font-bold text-base px-2.5 py-1 rounded bg-electric border border-white/20">
                {confirmedReservation.total}
              </span>
            </div>

            <div className="space-y-3 mb-6 bg-navy-900 p-4 rounded-xl border border-navy-800">
              <div className="flex justify-between">
                <span className="text-slate-400">Reserved For:</span>
                <span className="text-white font-medium">{confirmedReservation.name} ({confirmedReservation.phone})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Designated Station:</span>
                <span className="text-electric font-bold">{confirmedReservation.stationLabel} [{confirmedReservation.stationId}]</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Service:</span>
                <span className="text-white font-medium">{confirmedReservation.zoneName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Schedule:</span>
                <span className="text-white">{confirmedReservation.date} @ {confirmedReservation.time}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Duration:</span>
                <span className="text-white">{confirmedReservation.duration}</span>
              </div>
              {confirmedReservation.addons && confirmedReservation.addons.length > 0 && (
                <div className="pt-2 border-t border-navy-800">
                  <span className="text-slate-400 block mb-1">Active Hospitality Add-Ons:</span>
                  <div className="space-y-1">
                    {confirmedReservation.addons.map((add, i) => (
                      <span key={i} className="text-slate-300 block text-[11px]">&bull; {add}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between p-3.5 rounded-xl bg-black border border-navy-800 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-1.5 bg-white rounded">
                  <QrCode className="w-10 h-10 text-black" />
                </div>
                <div className="text-[10px] text-slate-400">
                  <span className="text-white font-bold block">FAST-PASS QR VERIFICATION</span>
                  <span>Bukhari Commercial, DHA Phase 6, Karachi</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-electric uppercase font-bold block">STATUS</span>
                <span className="text-white text-xs font-bold">CONFIRMED</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => window.print()}
                className="flex-1 py-3 rounded-lg bg-navy-900 hover:bg-navy-800 text-white font-mono text-xs font-bold transition-colors flex items-center justify-center gap-2 border border-navy-800"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save Digital Pass</span>
              </button>

              <button
                onClick={() => setConfirmedReservation(null)}
                className="px-5 py-3 rounded-lg bg-electric hover:bg-electric-light text-white font-mono text-xs font-bold transition-all shadow-sm"
              >
                New Booking
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
