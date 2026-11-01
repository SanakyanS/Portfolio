import React, { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Cpu, Server, Database, Shield, Activity, Eye, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HeroVisual() {
  const [activeTab, setActiveTab] = useState('architecture'); // 'architecture' | 'cv' | 'telemetry'
  const [fps, setFps] = useState(32);
  const [ping, setPing] = useState(14);
  const [scanPos, setScanPos] = useState(20);

  // 3D Card Tilt Physics on mouse movement
  const cardRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [7, -7]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), { stiffness: 200, damping: 25 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Subtle real-time telemetry simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setFps(30 + Math.floor(Math.random() * 4));
      setPing(12 + Math.floor(Math.random() * 5));
      setScanPos((prev) => (prev > 75 ? 20 : prev + 6));
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative w-full max-w-lg mx-auto lg:max-w-none"
      style={{ perspective: 1200 }}
    >
      {/* Background Soft Glow */}
      <div 
        className="absolute -inset-4 bg-gradient-to-tr from-[#C7A86B]/15 via-transparent to-[#C7A86B]/5 rounded-3xl blur-2xl pointer-events-none opacity-60"
        aria-hidden="true" 
      />

      {/* Main Interactive 3D Card */}
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative bg-[#111114]/90 backdrop-blur-xl border border-white/[0.08] hover:border-[#C7A86B]/40 transition-colors duration-500 rounded-2xl p-5 shadow-[0_20px_50px_rgba(0,0,0,0.6)] overflow-hidden"
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs font-mono tracking-wider text-ivory/90 font-medium">
              LIVE SYSTEM ENGINE
            </span>
          </div>

          {/* Interactive Navigation Tabs */}
          <div className="flex items-center gap-1 bg-white/[0.04] p-1 rounded-lg border border-white/[0.06]">
            {[
              { id: 'architecture', label: 'Architecture', icon: Server },
              { id: 'cv', label: 'Vision Stream', icon: Eye },
              { id: 'telemetry', label: 'Telemetry', icon: Activity },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-mono rounded-md transition-all duration-200 ${
                    isActive 
                      ? 'text-[#0B0B0C] font-semibold bg-[#C7A86B] shadow-[0_0_12px_rgba(199,168,107,0.4)]' 
                      : 'text-silver hover:text-white'
                  }`}
                >
                  <Icon size={12} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab 1: Architecture Diagram with Animated Circuit Line Pulses */}
        {activeTab === 'architecture' && (
          <div className="space-y-4 py-2">
            <div className="text-[11px] font-mono text-silver flex items-center justify-between">
              <span>ENTERPRISE FULL-STACK TOPOLOGY</span>
              <span className="text-[#C7A86B]">SYNCED · ACTIVE</span>
            </div>

            <div className="relative p-4 rounded-xl bg-black/40 border border-white/[0.05] space-y-3">
              {/* Node 1: Client Layer */}
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#18181B] border border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-md bg-[#C7A86B]/10 border border-[#C7A86B]/30 flex items-center justify-center text-[#C7A86B]">
                    <Shield size={14} />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-ivory">Angular 14 Client App</div>
                    <div className="text-[10px] font-mono text-silver">TypeScript · Azure AD MSAL</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Online
                </span>
              </div>

              {/* Animated Connecting Data Pulse */}
              <div className="flex justify-center -my-1">
                <div className="h-4 w-[1.5px] bg-gradient-to-b from-[#C7A86B] via-white/40 to-[#C7A86B] animate-pulse" />
              </div>

              {/* Node 2: Backend API Layer */}
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#18181B] border border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-md bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <Server size={14} />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-ivory">Python / Flask REST Engine</div>
                    <div className="text-[10px] font-mono text-silver">Pandas Timeline Rebuild Engine</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#C7A86B]">
                  {ping}ms
                </span>
              </div>

              {/* Animated Connecting Data Pulse */}
              <div className="flex justify-center -my-1">
                <div className="h-4 w-[1.5px] bg-gradient-to-b from-blue-400 via-white/40 to-[#C7A86B] animate-pulse" />
              </div>

              {/* Node 3: Database & Mainframe Layer */}
              <div className="flex items-center justify-between p-2.5 rounded-lg bg-[#18181B] border border-white/[0.06]">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-md bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
                    <Database size={14} />
                  </div>
                  <div>
                    <div className="text-xs font-medium text-ivory">PostgreSQL &amp; Mainframe SDSF/ISPF</div>
                    <div className="text-[10px] font-mono text-silver">ACID Transactions · Audit Logs</div>
                  </div>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#C7A86B]/15 text-[#C7A86B] border border-[#C7A86B]/30">
                  Secured
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Computer Vision Inference Simulation */}
        {activeTab === 'cv' && (
          <div className="space-y-4 py-2">
            <div className="text-[11px] font-mono text-silver flex items-center justify-between">
              <span>OPENCV VIDEO INFERENCE PIPELINE</span>
              <span className="text-emerald-400 font-semibold">{fps} FPS</span>
            </div>

            <div className="relative h-44 rounded-xl bg-black/60 border border-white/[0.08] overflow-hidden flex flex-col justify-between p-3">
              {/* Simulated Camera View Grid */}
              <div className="absolute inset-0 grid grid-cols-4 grid-rows-3 opacity-20 pointer-events-none">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="border border-white/20" />
                ))}
              </div>

              {/* Moving Laser Scan Line */}
              <motion.div 
                animate={{ y: [0, 140, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: 'linear' }}
                className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#C7A86B] to-transparent shadow-[0_0_10px_#C7A86B]"
              />

              {/* Bounding Box Simulation */}
              <div 
                className="relative z-10 w-36 h-24 border-2 border-[#C7A86B] rounded bg-[#C7A86B]/10 p-2 flex flex-col justify-between transition-all duration-300"
                style={{ marginLeft: `${scanPos}%` }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-mono bg-[#C7A86B] text-[#0B0B0C] px-1 font-bold rounded">
                    HELMET
                  </span>
                  <span className="text-[9px] font-mono text-[#C7A86B]">94.8%</span>
                </div>
                <div className="text-[9px] font-mono text-white/90">
                  TARGET: RIDER_01
                </div>
              </div>

              {/* Status Bar */}
              <div className="relative z-10 flex items-center justify-between text-[10px] font-mono text-silver pt-2 border-t border-white/10 bg-black/40 -mx-3 -mb-3 px-3 py-1.5">
                <span className="flex items-center gap-1.5 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  INTERLOCK: CLEARED
                </span>
                <span>MODEL: BINARY_CLASSIFIER</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Telemetry & Metrics */}
        {activeTab === 'telemetry' && (
          <div className="space-y-4 py-2">
            <div className="text-[11px] font-mono text-silver flex items-center justify-between">
              <span>SYSTEM DIAGNOSTICS</span>
              <span className="text-[#C7A86B]">ALL METRICS NORMAL</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-3 rounded-lg bg-[#18181B] border border-white/[0.06]">
                <div className="text-[10px] font-mono text-silver mb-1">FIDELITY PORTAL</div>
                <div className="text-sm font-semibold text-ivory">Active Sprints</div>
                <div className="text-[10px] text-emerald-400 mt-1 font-mono">Apprentice Track</div>
              </div>

              <div className="p-3 rounded-lg bg-[#18181B] border border-white/[0.06]">
                <div className="text-[10px] font-mono text-silver mb-1">LATENCY</div>
                <div className="text-sm font-semibold text-ivory">{ping} ms</div>
                <div className="text-[10px] text-silver mt-1 font-mono">Low Overhead</div>
              </div>

              <div className="p-3 rounded-lg bg-[#18181B] border border-white/[0.06]">
                <div className="text-[10px] font-mono text-silver mb-1">AUTH PROTOCOL</div>
                <div className="text-sm font-semibold text-ivory">Azure AD / MSAL</div>
                <div className="text-[10px] text-[#C7A86B] mt-1 font-mono">OAuth 2.0 PKCE</div>
              </div>

              <div className="p-3 rounded-lg bg-[#18181B] border border-white/[0.06]">
                <div className="text-[10px] font-mono text-silver mb-1">B.TECH CGPA</div>
                <div className="text-sm font-semibold text-ivory">7.96 / 10</div>
                <div className="text-[10px] text-silver mt-1 font-mono">Vels Institute (2025)</div>
              </div>
            </div>
          </div>
        )}

        {/* Floating Mini Badges */}
        <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono text-silver">
          <div className="flex items-center gap-1.5 text-ivory">
            <Sparkles size={12} className="text-[#C7A86B]" />
            <span>Chennai, India</span>
          </div>
          <span className="text-[#C7A86B] font-medium">Ready for Engineering Roles</span>
        </div>
      </motion.div>
    </div>
  );
}
