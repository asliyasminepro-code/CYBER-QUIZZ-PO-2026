"use client";

import React from "react";
import { soundManager } from "../utils/sound";

interface OctoberRoseRibbonProps {
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  showText?: boolean;
  className?: string;
  onClick?: () => void;
}

export const OctoberRoseRibbon: React.FC<OctoberRoseRibbonProps> = ({
  size = "md",
  animated = true,
  showText = false,
  className = "",
  onClick
}) => {
  const sizeMap = {
    sm: { w: 24, h: 32, class: "w-6 h-8" },
    md: { w: 36, h: 48, class: "w-9 h-12" },
    lg: { w: 56, h: 72, class: "w-14 h-18" },
    xl: { w: 80, h: 104, class: "w-20 h-26" }
  };

  const handleClick = () => {
    soundManager.playRibbonSparkle();
    if (onClick) onClick();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center gap-2 select-none group cursor-pointer transition-transform duration-300 active:scale-95 bg-transparent border-0 p-0 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B1020] rounded-lg ${className}`}
      title="Soutien Octobre Rose - CSI 2026"
      aria-label="Soutien Octobre Rose - CSI 2026"
    >
      <div className={`relative ${sizeMap[size].class} ${animated ? "animate-ribbon-float" : ""}`}>
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-pink-500/30 blur-md rounded-full -z-10 group-hover:bg-pink-400/50 transition-all duration-300 scale-125" />
        
        {/* Official CSI Logo */}
        <img
          src="/CSI_LOGO.png"
          alt="Logo CSI - Club Scientifique Informatique"
          width={sizeMap[size].w}
          height={sizeMap[size].h}
          className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(232,62,140,0.7)] group-hover:drop-shadow-[0_0_14px_rgba(255,45,146,0.95)] transition-all duration-300"
          loading="eager"
          decoding="async"
        />
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="text-xs font-semibold text-pink-300 tracking-wider uppercase flex items-center gap-1">
            Octobre Rose <span className="inline-block w-1.5 h-1.5 rounded-full bg-pink-400 animate-ping" />
          </span>
          <span className="text-[11px] text-pink-200/70 font-mono">Sensibilisation & Cyber</span>
        </div>
      )}
    </button>
  );
};
