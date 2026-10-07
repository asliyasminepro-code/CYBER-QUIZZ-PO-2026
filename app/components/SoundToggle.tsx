"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { soundManager } from "../utils/sound";

interface SoundToggleProps {
  className?: string;
}

export const SoundToggle: React.FC<SoundToggleProps> = ({ className = "" }) => {
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    setIsMuted(soundManager.getIsMuted());
  }, []);

  const handleToggle = () => {
    const unmuted = soundManager.toggleMute();
    setIsMuted(!unmuted);
  };

  return (
    <button
      onClick={handleToggle}
      type="button"
      aria-label={isMuted ? "Activer les effets sonores" : "Couper le son"}
      className={`relative group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-pink-500/30 bg-[#151B32]/80 backdrop-blur-md text-xs font-mono font-medium transition-all duration-300 hover:border-pink-400 hover:shadow-[0_0_15px_rgba(232,62,140,0.4)] active:scale-95 ${
        !isMuted ? "text-pink-300 border-pink-500/60 bg-pink-950/30" : "text-slate-400"
      } ${className}`}
      title={isMuted ? "Activer le son du jeu" : "Désactiver le son"}
    >
      {isMuted ? (
        <>
          <VolumeX className="w-4 h-4 text-slate-400 group-hover:text-pink-300 transition-colors" />
          <span className="hidden sm:inline text-[11px]">Son OFF</span>
        </>
      ) : (
        <>
          <Volume2 className="w-4 h-4 text-pink-400 animate-pulse" />
          <span className="hidden sm:inline text-[11px] text-pink-300 font-semibold">Son ON</span>
        </>
      )}
    </button>
  );
};
