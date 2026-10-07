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
    <div
      onClick={handleClick}
      className={`inline-flex items-center gap-2 select-none group cursor-pointer transition-transform duration-300 active:scale-95 ${className}`}
      title="Soutien Octobre Rose - CSI 2026"
    >
      <div className={`relative ${sizeMap[size].class} ${animated ? "animate-ribbon-float" : ""}`}>
        {/* Ambient Glow */}
        <div className="absolute inset-0 bg-pink-500/30 blur-md rounded-full -z-10 group-hover:bg-pink-400/50 transition-all duration-300 scale-125" />
        
        {/* SVG Ribbon */}
        <svg
          viewBox="0 0 64 84"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_8px_rgba(232,62,140,0.7)] group-hover:drop-shadow-[0_0_14px_rgba(255,45,146,0.95)] transition-all duration-300"
        >
          <defs>
            <linearGradient id="ribbonGrad1" x1="16" y1="8" x2="48" y2="76" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF65B2" />
              <stop offset="50%" stopColor="#E83E8C" />
              <stop offset="100%" stopColor="#C2185B" />
            </linearGradient>
            <linearGradient id="ribbonGrad2" x1="48" y1="8" x2="16" y2="76" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF85C0" />
              <stop offset="50%" stopColor="#FF2D92" />
              <stop offset="100%" stopColor="#9C1149" />
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Back Loop Fold */}
          <path
            d="M24 24 C14 36 10 52 14 74 C16 78 22 76 24 70 C28 54 32 44 38 36"
            stroke="url(#ribbonGrad1)"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-90"
          />

          {/* Front Loop Fold & Cross */}
          <path
            d="M32 14 C22 6 12 18 18 34 C24 50 36 64 50 74 C54 77 58 71 54 66 C44 52 38 40 32 26"
            stroke="url(#ribbonGrad2)"
            strokeWidth="11"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Central Loop Ring Highlight */}
          <path
            d="M22 24 C22 14 42 14 42 24 C42 34 32 44 24 54"
            stroke="#FFD6E8"
            strokeWidth="2.5"
            strokeLinecap="round"
            className="opacity-60"
          />

          {/* Sparkle star */}
          <circle cx="28" cy="18" r="2" fill="#FFFFFF" className="animate-pulse" />
          <circle cx="44" cy="54" r="1.5" fill="#FFD6E8" className="animate-ping" style={{ animationDuration: "3s" }} />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col text-left">
          <span className="text-xs font-semibold text-pink-300 tracking-wider uppercase flex items-center gap-1">
            Octobre Rose <span className="inline-block w-1.5 h-1.5 rounded-full bg-pink-400 animate-ping" />
          </span>
          <span className="text-[11px] text-pink-200/70 font-mono">Sensibilisation & Cyber</span>
        </div>
      )}
    </div>
  );
};
