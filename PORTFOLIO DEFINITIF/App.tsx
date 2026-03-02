
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactStats from './components/ImpactStats';
import Workflow from './components/Workflow';
import CaseStudies from './components/CaseStudies';
import MotionDesign from './components/MotionDesign';
import CTA from './components/CTA';
import Footer from './components/Footer';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30 overflow-x-hidden">
      <Navbar />
      
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Hero />
        <ImpactStats />
        <Workflow />
        <CaseStudies />
        <MotionDesign />
        <CTA />
      </motion.main>

      <Footer />
    </div>
  );
};

export default App;
