import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundFx } from '../utils/audio';
import { 
  FolderKanban, ExternalLink, Github, Sparkles, Check, Plus, 
  Trash2, Send, Activity, ShieldCheck, RefreshCw, X, Eye, Cpu
} from 'lucide-react';

export default function EngineeringExhibits() {
  const [selectedDemoModal, setSelectedDemoModal] = useState(null);

  // Project 1 Interactive Blueprint ↔ Dashboard State
  const [habitViewMode, setHabitViewMode] = useState('LIVE'); // 'LIVE' | 'BLUEPRINT'
  const [habits, setHabits] = useState([
    { id: 1, name: 'Daily Code Commit', streak: 14, category: 'Engineering', completed: true },
    { id: 2, name: 'LeetCode Algorithm Practice', streak: 8, category: 'Problem Solving', completed: true },
    { id: 3, name: 'System Design Reading', streak: 21, category: 'Architecture', completed: false }
  ]);

  // Project 2 Chat Packet Simulator State
  const [chatPackets, setChatPackets] = useState([
    { id: 1, text: 'Client Connected to Socket Server [Port 8080]', time: '22:29:01', type: 'system' },
    { id: 2, text: 'User auth verified: Token #29402', time: '22:29:03', type: 'auth' },
    { id: 3, text: 'Packet Sent: "Hello Team! Syncing state..."', time: '22:29:05', type: 'msg' }
  ]);
  const [newChatInput, setNewChatInput] = useState('');

  // Project 3 Interactive To-Do Widget State
  const [todos, setTodos] = useState([
    { id: 1, text: 'Refactor React Component Tree', completed: true },
    { id: 2, text: 'Optimize Vite Build Bundle', completed: false },
    { id: 3, text: 'Review Web Accessibility Standards', completed: false }
  ]);
  const [newTodoInput, setNewTodoInput] = useState('');

  const toggleHabit = (id) => {
    soundFx.playClick();
    setHabits(habits.map(h => h.id === id ? { ...h, completed: !h.completed, streak: !h.completed ? h.streak + 1 : h.streak - 1 } : h));
  };

  const handleSendChatMessage = (e) => {
    e.preventDefault();
    if (!newChatInput.trim()) return;
    soundFx.playClick();
    const packet = {
      id: Date.now(),
      text: `Packet Broadcast: "${newChatInput}"`,
      time: new Date().toLocaleTimeString(),
      type: 'msg'
    };
    setChatPackets(prev => [...prev, packet]);
    setNewChatInput('');
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!newTodoInput.trim()) return;
    soundFx.playClick();
    setTodos([...todos, { id: Date.now(), text: newTodoInput, completed: false }]);
    setNewTodoInput('');
  };

  const toggleTodo = (id) => {
    soundFx.playClick();
    setTodos(todos.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id) => {
    soundFx.playClick();
    setTodos(todos.filter(t => t.id !== id));
  };

  const exhibits = [
    {
      id: 'habitflow',
      title: 'HabitFlow — Habit Tracking System',
      subtitle: 'Responsive Habit & Streak Analytics Web App',
      tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Local Persistence', 'Responsive UI'],
      overview: 'HabitFlow is a habit tracking application designed to help users build better routines through visual streak monitoring, progress statistics, and categorized achievement milestones.',
      problem: 'Existing productivity tools are cluttered and lack clear streak feedback, leading to user drop-offs and poor routine adherence.',
      solution: 'Engineered a lightweight, distraction-free habit monitoring portal with local data persistence, custom streak counters, and categorized progress metrics across all viewport sizes.',
      features: [
        'Streak Monitoring & Multi-Category Grouping',
        'Visual Progress Statistics & Dynamic Charts',
        'Local Storage Persistence for uninterrupted usage',
        'Cross-device compatibility and dark mode glass styling'
      ],
      challenges: 'Optimizing client-side DOM rendering and maintaining synced streak calculations upon browser restarts without database latency.',
      improvements: 'Integrating real-time cloud backend synchronization and social accountability streak sharing.',
      github: 'https://github.com/sanakyan/HabitFlow',
      liveDemo: 'HabitFlow Demo'
    },
    {
      id: 'chat-app',
      title: 'Real-Time Multi-User Chat Application',
      subtitle: 'Python Concurrent Socket Server & Tkinter Desktop UI',
      tech: ['Python', 'Tkinter', 'Socket Programming', 'Threading', 'TCP/IP'],
      overview: 'A robust multi-user desktop chat application supporting concurrent real-time communication, custom client-server socket protocol, user authentication, and fault-tolerant message handling.',
      problem: 'Standard desktop chat scripts crash upon network drops or packet collision when multiple clients communicate simultaneously.',
      solution: 'Built a multi-threaded Python socket server architecture that routes packets asynchronously with 99.2% message delivery reliability and integrated error handling.',
      features: [
        'Multi-Threaded Concurrent Socket Server (TCP/IP)',
        'User Authentication & Session Handshake Protocols',
        'Tkinter Graphical Client Interface',
        '99.2% Verified Packet Delivery Reliability with Error Catching'
      ],
      challenges: 'Preventing socket thread deadlocks during simultaneous client connect/disconnect cycles.',
      improvements: 'Implementing End-to-End Encryption (E2EE) and audio packet streaming over WebRTC sockets.',
      github: 'https://github.com/sanakyan/Real-Time-Chat-Application',
      liveDemo: 'Chat App Demo'
    },
    {
      id: 'todo-app',
      title: 'Modern Task Manager & Productivity Tool',
      subtitle: 'Sleek Web CRUD Application & State Management',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'DOM Logic', 'State Management'],
      overview: 'A sleek, modern task management tool engineered to demonstrate efficient CRUD operation workflows, state filtering, and micro-animated task interactions.',
      problem: 'Simple task apps lack fluid state transitions and intuitive task categorization controls.',
      solution: 'Redesigned the standard task workflow with glassmorphism UI, instant inline edits, instant deletion states, and responsive task status filtering.',
      features: [
        'Full CRUD Operations (Create, Read, Update, Delete)',
        'Filterable Task States (Active, Completed, Archived)',
        'Instant DOM state updates with zero reload',
        'Custom glass visual layout'
      ],
      challenges: 'Managing smooth state updates and element removal transitions cleanly across low-end mobile devices.',
      improvements: 'Adding priority tag sorting, drag-and-drop task reordering, and calendar due date reminders.',
      github: 'https://github.com/sanakyan/To-Do-App',
      liveDemo: 'To-Do App Demo'
    }
  ];

  return (
    <section id="projects" className="py-28 relative bg-[#0c0a09] border-t border-[#c9a84c]/10">
      
      {/* Background Lighting */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] spotlight-gold blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#14110f] border border-[#c9a84c]/30 text-xs font-mono text-[#c9a84c]">
            <FolderKanban className="w-3.5 h-3.5" />
            <span className="uppercase tracking-widest">HALL V — ENGINEERING EXHIBITS</span>
          </div>

          <h2 className="font-serif text-4xl sm:text-6xl font-extrabold gold-gradient-text tracking-wide">
            ENGINEERING EXHIBITS
          </h2>
          <p className="text-sm sm:text-base text-[#b8b8b8] max-w-2xl mx-auto font-sans">
            Comprehensive breakdown of featured software engineering builds. Interact directly with 
            live prototype simulations embedded inside each exhibit.
          </p>
        </div>

        {/* EXHIBIT 1: HABITFLOW */}
        <div className="mb-24 space-y-8">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[#c9a84c]/30 shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Info */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-xs font-mono text-[#c9a84c]">
                    EXHIBIT #01
                  </span>
                  <span className="text-xs font-mono text-[#b8b8b8]">HABIT TRACKING ARCHITECTURE</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#fafaf9]">
                  HabitFlow
                </h3>

                <p className="text-sm text-[#b8b8b8] leading-relaxed font-sans">
                  {exhibits[0].overview}
                </p>

                <div className="space-y-3 font-sans text-xs sm:text-sm text-[#b8b8b8]">
                  <div>
                    <span className="font-mono text-[#c9a84c] font-bold block mb-1">PROBLEM</span>
                    <span>{exhibits[0].problem}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[#c9a84c] font-bold block mb-1">SOLUTION</span>
                    <span>{exhibits[0].solution}</span>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exhibits[0].tech.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded bg-[#0c0a09] border border-white/10 text-xs font-mono text-[#fafaf9]">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setSelectedDemoModal(exhibits[0]);
                    }}
                    onMouseEnter={() => soundFx.playHover()}
                    data-cursor-hover
                    className="px-5 py-2.5 rounded-xl bg-[#c9a84c] text-[#0c0a09] font-serif font-bold text-xs uppercase tracking-wider hover:bg-[#e6c86e] transition-all flex items-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Inspect Specs & Demo</span>
                  </button>

                  <a
                    href={exhibits[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playClick()}
                    onMouseEnter={() => soundFx.playHover()}
                    className="px-5 py-2.5 rounded-xl bg-[#14110f] border border-white/10 text-[#fafaf9] font-mono text-xs hover:border-[#c9a84c] transition-all flex items-center space-x-2"
                  >
                    <Github className="w-4 h-4 text-[#c9a84c]" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>

              {/* Right Interactive Simulator Widget: Blueprint <-> Live Mode */}
              <div className="lg:col-span-6">
                <div className="bg-[#0c0a09] rounded-2xl border border-[#c9a84c]/30 overflow-hidden shadow-2xl">
                  
                  {/* Widget Controls Bar */}
                  <div className="px-4 py-3 bg-[#14110f] border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-2 font-mono text-xs text-[#c9a84c]">
                      <Activity className="w-4 h-4" />
                      <span>HABITFLOW_DASHBOARD_PROTOTYPE</span>
                    </div>

                    <div className="flex items-center space-x-1 bg-[#0c0a09] p-1 rounded-lg border border-white/10 font-mono text-[10px]">
                      <button
                        onClick={() => {
                          soundFx.playClick();
                          setHabitViewMode('LIVE');
                        }}
                        className={`px-2.5 py-1 rounded transition-all ${
                          habitViewMode === 'LIVE' ? 'bg-[#c9a84c] text-black font-bold' : 'text-[#b8b8b8]'
                        }`}
                      >
                        LIVE DASHBOARD
                      </button>
                      <button
                        onClick={() => {
                          soundFx.playClick();
                          setHabitViewMode('BLUEPRINT');
                        }}
                        className={`px-2.5 py-1 rounded transition-all ${
                          habitViewMode === 'BLUEPRINT' ? 'bg-[#c9a84c] text-black font-bold' : 'text-[#b8b8b8]'
                        }`}
                      >
                        BLUEPRINT
                      </button>
                    </div>
                  </div>

                  {/* Widget Body */}
                  <div className="p-6">
                    {habitViewMode === 'LIVE' ? (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-xs font-mono text-[#b8b8b8]">
                          <span>CURRENT STREAK OVERVIEW</span>
                          <span className="text-[#c9a84c] font-bold">100% PERSISTENT</span>
                        </div>

                        {habits.map((habit) => (
                          <div
                            key={habit.id}
                            onClick={() => toggleHabit(habit.id)}
                            className="p-3.5 rounded-xl bg-[#14110f] border border-white/5 hover:border-[#c9a84c]/40 transition-all flex items-center justify-between cursor-pointer"
                          >
                            <div className="flex items-center space-x-3">
                              <div className={`w-5 h-5 rounded flex items-center justify-center border ${
                                habit.completed ? 'bg-[#c9a84c] border-[#c9a84c] text-black' : 'border-white/20'
                              }`}>
                                {habit.completed && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                              </div>
                              <div>
                                <h4 className={`text-xs font-mono ${habit.completed ? 'line-through text-[#b8b8b8]' : 'text-white'}`}>
                                  {habit.name}
                                </h4>
                                <span className="text-[10px] text-[#c9a84c]/70 font-mono">Category: {habit.category}</span>
                              </div>
                            </div>

                            <div className="text-right">
                              <span className="text-xs font-mono text-[#c9a84c] font-bold">🔥 {habit.streak} Days</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      /* Blueprint View Mode */
                      <div className="p-4 rounded-xl border border-dashed border-[#c9a84c]/50 bg-[#0c0a09] font-mono text-xs text-[#c9a84c] space-y-3 leading-relaxed">
                        <div className="text-white font-bold text-center border-b border-[#c9a84c]/30 pb-2">
                          [HABITFLOW SYSTEM ARCHITECTURE BLUEPRINT]
                        </div>
                        <div>├── index.html (Semantic Structure)</div>
                        <div>├── styles.css (Glassmorphic CSS Grid / Dark Tokens)</div>
                        <div>└── app.js (Local Storage Controller & Streak Calculation Engine)</div>
                        <div className="text-[10px] text-[#b8b8b8] pt-2 italic">
                          "Data flow reads state from localStorage, validates daily timestamps, and computes streak increment math on state mutation."
                        </div>
                      </div>
                    )}
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>


        {/* EXHIBIT 2: REAL-TIME CHAT APPLICATION */}
        <div className="mb-24 space-y-8">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[#c9a84c]/30 shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Side: Packet Simulator Widget */}
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="bg-[#0c0a09] rounded-2xl border border-[#c9a84c]/30 overflow-hidden shadow-2xl">
                  
                  {/* Top Bar */}
                  <div className="px-4 py-3 bg-[#14110f] border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-2 font-mono text-xs text-[#c9a84c]">
                      <Cpu className="w-4 h-4" />
                      <span>PYTHON_SOCKET_SERVER [99.2% RELIABILITY]</span>
                    </div>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  </div>

                  {/* Packet Feed */}
                  <div className="p-4 font-mono text-xs space-y-2.5 min-h-[220px] max-h-[260px] overflow-y-auto">
                    {chatPackets.map((pkt) => (
                      <div key={pkt.id} className="p-2.5 rounded bg-[#14110f] border border-white/5 flex items-start justify-between">
                        <div>
                          <span className="text-[#c9a84c] text-[10px] block">[{pkt.time}] PACKET</span>
                          <span className="text-white text-xs">{pkt.text}</span>
                        </div>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                          ACK 200
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Input Simulator */}
                  <form onSubmit={handleSendChatMessage} className="p-3 bg-[#14110f] border-t border-white/10 flex gap-2">
                    <input
                      type="text"
                      value={newChatInput}
                      onChange={(e) => setNewChatInput(e.target.value)}
                      placeholder="Simulate client data packet message..."
                      className="flex-1 px-3 py-2 rounded-lg bg-[#0c0a09] border border-white/10 text-xs text-white placeholder-neutral-500 font-mono focus:border-[#c9a84c] outline-none"
                    />
                    <button
                      type="submit"
                      className="px-4 py-2 rounded-lg bg-[#c9a84c] text-black font-bold text-xs font-mono hover:bg-[#e6c86e] transition-all flex items-center space-x-1"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Transmit</span>
                    </button>
                  </form>

                </div>
              </div>

              {/* Right Side: Info */}
              <div className="lg:col-span-6 space-y-6 text-left order-1 lg:order-2">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-xs font-mono text-[#c9a84c]">
                    EXHIBIT #02
                  </span>
                  <span className="text-xs font-mono text-[#b8b8b8]">PYTHON SOCKET ARCHITECTURE</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#fafaf9]">
                  Real-Time Chat Application
                </h3>

                <p className="text-sm text-[#b8b8b8] leading-relaxed font-sans">
                  {exhibits[1].overview}
                </p>

                <div className="space-y-3 font-sans text-xs sm:text-sm text-[#b8b8b8]">
                  <div>
                    <span className="font-mono text-[#c9a84c] font-bold block mb-1">PROBLEM</span>
                    <span>{exhibits[1].problem}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[#c9a84c] font-bold block mb-1">SOLUTION</span>
                    <span>{exhibits[1].solution}</span>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exhibits[1].tech.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded bg-[#0c0a09] border border-white/10 text-xs font-mono text-[#fafaf9]">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setSelectedDemoModal(exhibits[1]);
                    }}
                    onMouseEnter={() => soundFx.playHover()}
                    data-cursor-hover
                    className="px-5 py-2.5 rounded-xl bg-[#c9a84c] text-[#0c0a09] font-serif font-bold text-xs uppercase tracking-wider hover:bg-[#e6c86e] transition-all flex items-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Inspect Specs & Demo</span>
                  </button>

                  <a
                    href={exhibits[1].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playClick()}
                    onMouseEnter={() => soundFx.playHover()}
                    className="px-5 py-2.5 rounded-xl bg-[#14110f] border border-white/10 text-[#fafaf9] font-mono text-xs hover:border-[#c9a84c] transition-all flex items-center space-x-2"
                  >
                    <Github className="w-4 h-4 text-[#c9a84c]" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>


        {/* EXHIBIT 3: TO-DO LIST APP */}
        <div className="space-y-8">
          <div className="glass-panel p-8 sm:p-10 rounded-3xl border border-[#c9a84c]/30 shadow-[0_20px_50px_rgba(0,0,0,0.9)] relative overflow-hidden">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Side: Info */}
              <div className="lg:col-span-6 space-y-6 text-left">
                <div className="flex items-center space-x-3">
                  <span className="px-3 py-1 rounded-full bg-[#c9a84c]/10 border border-[#c9a84c]/30 text-xs font-mono text-[#c9a84c]">
                    EXHIBIT #03
                  </span>
                  <span className="text-xs font-mono text-[#b8b8b8]">STATE MANAGEMENT & CRUD</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl font-extrabold text-[#fafaf9]">
                  To-Do List App
                </h3>

                <p className="text-sm text-[#b8b8b8] leading-relaxed font-sans">
                  {exhibits[2].overview}
                </p>

                <div className="space-y-3 font-sans text-xs sm:text-sm text-[#b8b8b8]">
                  <div>
                    <span className="font-mono text-[#c9a84c] font-bold block mb-1">PROBLEM</span>
                    <span>{exhibits[2].problem}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[#c9a84c] font-bold block mb-1">SOLUTION</span>
                    <span>{exhibits[2].solution}</span>
                  </div>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {exhibits[2].tech.map(t => (
                    <span key={t} className="px-2.5 py-1 rounded bg-[#0c0a09] border border-white/10 text-xs font-mono text-[#fafaf9]">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setSelectedDemoModal(exhibits[2]);
                    }}
                    onMouseEnter={() => soundFx.playHover()}
                    data-cursor-hover
                    className="px-5 py-2.5 rounded-xl bg-[#c9a84c] text-[#0c0a09] font-serif font-bold text-xs uppercase tracking-wider hover:bg-[#e6c86e] transition-all flex items-center space-x-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>Inspect Specs & Demo</span>
                  </button>

                  <a
                    href={exhibits[2].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => soundFx.playClick()}
                    onMouseEnter={() => soundFx.playHover()}
                    className="px-5 py-2.5 rounded-xl bg-[#14110f] border border-white/10 text-[#fafaf9] font-mono text-xs hover:border-[#c9a84c] transition-all flex items-center space-x-2"
                  >
                    <Github className="w-4 h-4 text-[#c9a84c]" />
                    <span>View Repository</span>
                  </a>
                </div>
              </div>

              {/* Right Side: Interactive Live To-Do Widget */}
              <div className="lg:col-span-6">
                <div className="bg-[#0c0a09] rounded-2xl border border-[#c9a84c]/30 overflow-hidden shadow-2xl">
                  
                  <div className="px-4 py-3 bg-[#14110f] border-b border-white/10 flex items-center justify-between">
                    <div className="flex items-center space-x-2 font-mono text-xs text-[#c9a84c]">
                      <FolderKanban className="w-4 h-4" />
                      <span>LIVE_TODO_STATE_WIDGET</span>
                    </div>
                    <span className="text-[10px] font-mono text-[#b8b8b8]">{todos.filter(t => t.completed).length}/{todos.length} DONE</span>
                  </div>

                  <div className="p-4 space-y-3 min-h-[200px]">
                    {todos.map((todo) => (
                      <div
                        key={todo.id}
                        className="p-3 rounded-xl bg-[#14110f] border border-white/5 flex items-center justify-between group"
                      >
                        <div 
                          onClick={() => toggleTodo(todo.id)}
                          className="flex items-center space-x-3 cursor-pointer flex-1"
                        >
                          <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                            todo.completed ? 'bg-[#c9a84c] border-[#c9a84c] text-black' : 'border-white/20'
                          }`}>
                            {todo.completed && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className={`text-xs font-mono ${todo.completed ? 'line-through text-[#b8b8b8]' : 'text-white'}`}>
                            {todo.text}
                          </span>
                        </div>

                        <button
                          onClick={() => deleteTodo(todo.id)}
                          className="text-neutral-500 hover:text-red-400 transition-colors p-1"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Add Task Input Form */}
                  <form onSubmit={handleAddTodo} className="p-3 bg-[#14110f] border-t border-white/10 flex gap-2">
                    <input
                      type="text"
                      value={newTodoInput}
                      onChange={(e) => setNewTodoInput(e.target.value)}
                      placeholder="Add new engineering task..."
                      className="flex-1 px-3 py-2 rounded-lg bg-[#0c0a09] border border-white/10 text-xs text-white placeholder-neutral-500 font-mono focus:border-[#c9a84c] outline-none"
                    />
                    <button
                      type="submit"
                      className="px-3.5 py-2 rounded-lg bg-[#c9a84c] text-black font-bold text-xs font-mono hover:bg-[#e6c86e] transition-all flex items-center space-x-1"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </form>

                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* Comprehensive Project Specs Modal */}
      <AnimatePresence>
        {selectedDemoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-2xl glass-panel p-8 rounded-3xl relative border border-[#c9a84c]/40 max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => {
                  soundFx.playClick();
                  setSelectedDemoModal(null);
                }}
                className="absolute top-6 right-6 p-2 rounded-lg bg-[#14110f] border border-white/10 text-[#fafaf9] hover:text-[#c9a84c] transition-all"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-6 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-[#c9a84c]/10 border border-[#c9a84c] flex items-center justify-center text-[#c9a84c]">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#fafaf9]">{selectedDemoModal.title}</h3>
                    <p className="text-xs font-mono text-[#c9a84c]">{selectedDemoModal.subtitle}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-[#b8b8b8]/60 uppercase tracking-widest">KEY FEATURES</h4>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#b8b8b8]">
                    {selectedDemoModal.features.map((f, i) => (
                      <li key={i} className="flex items-center space-x-2">
                        <Check className="w-4 h-4 text-[#c9a84c]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-[#b8b8b8]/60 uppercase tracking-widest">ARCHITECTURAL CHALLENGES</h4>
                  <p className="text-xs sm:text-sm text-[#b8b8b8] p-3 rounded-lg bg-[#0c0a09] border border-white/10">
                    {selectedDemoModal.challenges}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-[#b8b8b8]/60 uppercase tracking-widest">FUTURE IMPROVEMENTS</h4>
                  <p className="text-xs sm:text-sm text-[#b8b8b8] p-3 rounded-lg bg-[#0c0a09] border border-white/10">
                    {selectedDemoModal.improvements}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex justify-end">
                  <button
                    onClick={() => {
                      soundFx.playClick();
                      setSelectedDemoModal(null);
                    }}
                    className="px-6 py-2.5 rounded-xl bg-[#c9a84c] text-[#0c0a09] font-serif font-bold text-xs uppercase tracking-wider hover:bg-[#e6c86e] transition-all"
                  >
                    Close Specs
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
