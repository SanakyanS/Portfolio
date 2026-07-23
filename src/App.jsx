import React, { useState } from 'react';
import useLenis from './hooks/useLenis';
import CustomCursor from './components/CustomCursor';
import NoiseOverlay from './components/NoiseOverlay';
import AmbientBackground from './components/AmbientBackground';
import Navbar from './components/Navbar';
import Loader from './components/Loader';
import Foyer from './components/Foyer';
import CreatorDossier from './components/CreatorDossier';
import TechnologyArchive from './components/TechnologyArchive';
import CareerTimeline from './components/CareerTimeline';
import EngineeringExhibits from './components/EngineeringExhibits';
import VerifiedArchives from './components/VerifiedArchives';
import CuratorsLedger from './components/CuratorsLedger';
import Footer from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isAudioOn, setIsAudioOn] = useState(true);

  // Initialize Apple-like Lenis Smooth Scroll
  useLenis();

  return (
    <div className="relative min-h-screen bg-[#0c0a09] text-[#fafaf9] overflow-x-hidden selection:bg-[#c9a84c] selection:text-[#0c0a09]">
      {/* Custom Magnetic Glowing Gold Cursor */}
      <CustomCursor />

      {/* Film Noise & Canvas Particles */}
      <NoiseOverlay />
      <AmbientBackground />

      {/* Opening Terminal Loader & Vault Door Reveal */}
      {isLoading ? (
        <Loader onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          {/* Top Exhibition Navbar */}
          <Navbar isAudioOn={isAudioOn} setIsAudioOn={setIsAudioOn} />

          {/* Exhibition Main Content Halls */}
          <main className="relative z-10">
            <Foyer />
            <CreatorDossier />
            <TechnologyArchive />
            <CareerTimeline />
            <EngineeringExhibits />
            <VerifiedArchives />
            <CuratorsLedger />
          </main>

          {/* Luxury Museum Footer */}
          <Footer />
        </>
      )}
    </div>
  );
}
