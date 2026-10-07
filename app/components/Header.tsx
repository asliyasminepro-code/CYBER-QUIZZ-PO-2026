"use client";

import React from "react";
import { OctoberRoseRibbon } from "./OctoberRoseRibbon";
import { SoundToggle } from "./SoundToggle";
import { ShieldAlert, RotateCcw } from "lucide-react";
import { soundManager } from "../utils/sound";

interface HeaderProps {
  currentView: "landing" | "quiz" | "result";
  onResetToHome?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onResetToHome }) => {
  const handleHomeClick = () => {
    soundManager.playClick();
    if (onResetToHome) onResetToHome();
  };

  return (
    <header className="w-full z-40 px-4 sm:px-8 py-3.5 border-b border-pink-500/15 bg-[#0B1020]/80 backdrop-blur-xl transition-all duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
        {/* Left: CSI Club Logo & Identity */}
        <button
          onClick={handleHomeClick}
          className="flex items-center gap-2.5 text-left group transition-all duration-200 focus:outline-none"
          title="Retour à l'accueil"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#151B32] to-[#0B1020] border border-pink-500/40 shadow-[0_0_12px_rgba(232,62,140,0.35)] group-hover:border-pink-400 group-hover:shadow-[0_0_18px_rgba(255,45,146,0.6)] transition-all">
            <span className="font-mono font-black text-xs tracking-tighter bg-gradient-to-r from-pink-400 to-pink-200 bg-clip-text text-transparent">
              CSI
            </span>
            <div className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-pink-500 animate-ping" />
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="text-sm font-extrabold tracking-wider text-white group-hover:text-pink-300 transition-colors">
                CSI
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-pink-500/15 text-pink-300 border border-pink-500/30">
                PO 2026
              </span>
            </div>
            <span className="text-[10px] text-slate-400 font-sans hidden sm:inline">
              Club Scientifique Informatique
            </span>
          </div>
        </button>

        {/* Center: Brand Title */}
        <div className="flex items-center gap-2 select-none">
          <div className="flex items-center gap-1.5">
            <span className="font-extrabold text-base sm:text-lg tracking-tight bg-gradient-to-r from-pink-400 via-pink-300 to-white bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(232,62,140,0.5)]">
              CYBER PINK
            </span>
            <OctoberRoseRibbon size="sm" animated={true} />
          </div>
        </div>

        {/* Right: Sound Toggle + Home/Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {currentView !== "landing" && (
            <button
              onClick={handleHomeClick}
              type="button"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-700/60 bg-[#151B32]/70 text-slate-300 hover:text-pink-300 hover:border-pink-500/40 text-xs font-mono transition-all duration-200"
              title="Quitter et recommencer"
            >
              <RotateCcw className="w-3.5 h-3.5 text-pink-400" />
              <span className="hidden md:inline">Accueil</span>
            </button>
          )}

          <SoundToggle />
        </div>
      </div>
    </header>
  );
};
