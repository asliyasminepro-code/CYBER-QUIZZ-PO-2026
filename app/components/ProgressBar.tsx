"use client";

import React from "react";
import { Sparkles, Trophy } from "lucide-react";

interface ProgressBarProps {
  currentIndex: number;
  totalQuestions: number;
  score: number;
  topic?: string;
  difficulty?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  currentIndex,
  totalQuestions,
  score,
  topic,
  difficulty
}) => {
  const progressPercent = Math.round(((currentIndex) / totalQuestions) * 100);

  return (
    <div className="w-full max-w-3xl mx-auto mb-6 px-2">
      {/* Top Meta Line */}
      <div className="flex items-center justify-between gap-2 mb-2.5">
        <div className="flex items-center gap-2">
          <span className="text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-pink-400 flex items-center gap-1.5">
            <span className="inline-block w-2 h-2 rounded-full bg-pink-500 animate-ping" />
            Question {currentIndex + 1} / {totalQuestions}
          </span>

          {topic && (
            <span className="hidden sm:inline-flex items-center text-[11px] font-mono px-2 py-0.5 rounded-full bg-pink-950/40 text-pink-300 border border-pink-500/30">
              {topic}
            </span>
          )}

          {difficulty && (
            <span className="hidden md:inline-flex items-center text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
              {difficulty}
            </span>
          )}
        </div>

        {/* Current Score Counter */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#151B32] border border-pink-500/40 shadow-[0_0_12px_rgba(232,62,140,0.25)]">
            <Trophy className="w-3.5 h-3.5 text-yellow-400" />
            <span className="font-mono text-xs sm:text-sm font-black text-white">
              {score} <span className="text-[10px] font-normal text-pink-300">PTS</span>
            </span>
          </div>

          <span className="font-mono text-xs font-semibold text-slate-400 min-w-[36px] text-right">
            {progressPercent}%
          </span>
        </div>
      </div>

      {/* Progress Track */}
      <div className="relative w-full h-3 sm:h-3.5 rounded-full bg-[#151B32] border border-pink-500/20 p-0.5 overflow-hidden shadow-inner">
        {/* Animated Bar Fill */}
        <div
          className="h-full rounded-full bg-gradient-to-r from-pink-600 via-pink-400 to-fuchsia-400 transition-all duration-500 ease-out relative shadow-[0_0_12px_rgba(232,62,140,0.8)]"
          style={{ width: `${Math.max(5, progressPercent)}%` }}
        >
          {/* Animated Light Sweep Stripe */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/35 to-transparent animate-shimmer" />
        </div>
      </div>
    </div>
  );
};
