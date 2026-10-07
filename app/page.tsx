"use client";

import React, { useState } from "react";
import { Header } from "./components/Header";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { LandingPage } from "./components/LandingPage";
import { QuizPage } from "./components/QuizPage";
import { OctoberRoseRibbon } from "./components/OctoberRoseRibbon";
import { Shield } from "lucide-react";

export default function Home() {
  const [currentView, setCurrentView] = useState<"landing" | "quiz">("landing");

  const handleStartQuiz = () => {
    setCurrentView("quiz");
  };

  const handleResetToHome = () => {
    setCurrentView("landing");
  };

  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-x-hidden selection:bg-pink-600 selection:text-white">
      {/* Dynamic Animated Particles & Cyber Mesh Background */}
      <AnimatedBackground />

      {/* Header */}
      <Header currentView={currentView} onResetToHome={handleResetToHome} />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-6 z-10 w-full">
        {currentView === "landing" ? (
          <LandingPage onStartQuiz={handleStartQuiz} />
        ) : (
          <QuizPage onResetToHome={handleResetToHome} />
        )}
      </main>

      {/* Clean Compact Footer */}
      <footer className="w-full py-4 px-4 border-t border-pink-500/15 bg-[#0B1020]/90 backdrop-blur-md z-20 text-center">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <div className="p-1 rounded bg-pink-950/60 border border-pink-500/30">
              <Shield className="w-3.5 h-3.5 text-pink-400" />
            </div>
            <span>
              Conçu par le <strong className="text-white">CSI (Club Scientifique Informatique)</strong> • 2026
            </span>
          </div>

          <div className="flex items-center gap-2 text-pink-300/90">
            <OctoberRoseRibbon size="sm" animated={false} />
            <span>Ensemble mobilisés pour Octobre Rose</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
