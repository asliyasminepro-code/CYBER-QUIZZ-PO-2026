"use client";

import React from "react";
import { OctoberRoseRibbon } from "./OctoberRoseRibbon";
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Lock, 
  Terminal, 
  Wifi, 
  Fingerprint, 
  AlertTriangle, 
  Code2, 
  Trophy,
  Zap,
  CheckCircle2,
  Users
} from "lucide-react";
import { soundManager } from "../utils/sound";

interface LandingPageProps {
  onStartQuiz: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStartQuiz }) => {
  const handleStart = () => {
    soundManager.playClick();
    onStartQuiz();
  };

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center gap-8 py-4 sm:py-8 animate-fade-in">
      {/* Top Octobre Rose & CSI Special Pill */}
      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#151B32]/90 border border-pink-500/40 backdrop-blur-xl shadow-[0_0_20px_rgba(232,62,140,0.3)] animate-float-slow">
        <OctoberRoseRibbon size="sm" animated={true} />
        <span className="text-xs sm:text-sm font-semibold tracking-wide text-pink-300 font-mono">
          Édition Spéciale Octobre Rose 🎀
        </span>
        <span className="w-1.5 h-1.5 rounded-full bg-pink-400 animate-ping" />
      </div>

      {/* Hero Headline Section */}
      <div className="flex flex-col items-center gap-4 relative">
        {/* Glow backdrop */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-32 bg-pink-500/20 blur-3xl -z-10" />

        <div className="flex items-center justify-center gap-3">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight uppercase">
            <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-fuchsia-400 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(232,62,140,0.7)]">
              CYBER
            </span>{" "}
            <span className="text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]">
              PINK
            </span>
          </h1>
        </div>

        {/* Club Subtitle */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-pink-950/40 border border-pink-500/30">
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span className="text-sm sm:text-base font-bold font-mono tracking-wider text-pink-300">
            Le Cyber Quiz du CSI
          </span>
          <Sparkles className="w-4 h-4 text-pink-400" />
        </div>

        {/* Catchy Description */}
        <p className="max-w-xl text-slate-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed mt-2 px-4">
          Teste tes réflexes en cybersécurité et découvre si tu es prêt à déjouer les pièges du numérique.
        </p>
      </div>

      {/* Hero Ribbon Art & Floating Badges */}
      <div className="relative my-2 flex items-center justify-center">
        {/* Decorative Glowing Rings */}
        <div className="absolute w-44 h-44 rounded-full border border-pink-500/20 animate-spin" style={{ animationDuration: "20s" }} />
        <div className="absolute w-56 h-56 rounded-full border border-dashed border-pink-400/20 animate-spin" style={{ animationDuration: "30s", animationDirection: "reverse" }} />
        
        {/* Big Center October Rose Ribbon */}
        <div className="relative z-10 p-6 rounded-full bg-gradient-to-br from-[#151B32]/90 to-[#0B1020]/90 border border-pink-500/40 shadow-[0_0_40px_rgba(232,62,140,0.45)] group hover:scale-105 transition-transform duration-300">
          <OctoberRoseRibbon size="xl" animated={true} />
        </div>
      </div>

      {/* Main CTA Section */}
      <div className="flex flex-col items-center gap-3 w-full max-w-sm px-4">
        <button
          onClick={handleStart}
          type="button"
          className="group relative w-full py-4 sm:py-5 px-8 rounded-2xl font-black text-base sm:text-lg tracking-wide uppercase text-white bg-gradient-to-r from-pink-600 via-pink-500 to-fuchsia-500 hover:from-pink-500 hover:to-fuchsia-400 shadow-[0_0_35px_rgba(232,62,140,0.6)] hover:shadow-[0_0_50px_rgba(255,45,146,0.9)] transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center gap-3"
        >
          <Zap className="w-5 h-5 text-yellow-300 fill-yellow-300 animate-pulse" />
          <span>COMMENCER LE QUIZ</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
          
          {/* Subtle button glare effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </button>

        <p className="text-xs sm:text-sm font-mono text-slate-400 flex items-center gap-1.5">
          <span>10 questions</span>
          <span>•</span>
          <span>1 seule bonne réponse</span>
          <span>•</span>
          <span className="text-pink-300 font-semibold">À toi de jouer !</span>
        </p>
      </div>

      {/* 3 Quick Game Features Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full px-4 mt-2">
        <div className="p-4 rounded-2xl bg-[#151B32]/70 border border-pink-500/20 backdrop-blur-xl flex flex-col items-center text-center gap-2 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(232,62,140,0.2)] transition-all">
          <div className="p-2.5 rounded-xl bg-pink-500/20 text-pink-400 border border-pink-500/30">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-sm text-white">10 Cas Réels</h3>
          <p className="text-xs text-slate-400">
            Mots de passe, phishing, Wi-Fi public, malware et astuces cyber.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#151B32]/70 border border-pink-500/20 backdrop-blur-xl flex flex-col items-center text-center gap-2 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(232,62,140,0.2)] transition-all">
          <div className="p-2.5 rounded-xl bg-pink-500/20 text-pink-400 border border-pink-500/30">
            <Trophy className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-sm text-white">Score & Trophée</h3>
          <p className="text-xs text-slate-400">
            Gagne jusqu&apos;à 1000 points et débloque le titre Cyber Expert !
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#151B32]/70 border border-pink-500/20 backdrop-blur-xl flex flex-col items-center text-center gap-2 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(232,62,140,0.2)] transition-all">
          <div className="p-2.5 rounded-xl bg-pink-500/20 text-pink-400 border border-pink-500/30">
            <Users className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-sm text-white">CSI x Octobre Rose</h3>
          <p className="text-xs text-slate-400">
            Un événement ludique et engagé conçu par le club pour tous.
          </p>
        </div>
      </div>
    </div>
  );
};
