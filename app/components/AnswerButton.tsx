"use client";

import React from "react";
import { CheckCircle2, XCircle, Sparkles } from "lucide-react";

interface AnswerButtonProps {
  index: number; // 0, 1, 2, 3
  text: string;
  selected: boolean;
  isCorrect: boolean;
  isAnswered: boolean;
  showCorrectHighlight: boolean; // if user got wrong, highlight the real correct answer
  onSelect: (index: number) => void;
  disabled: boolean;
}

const LETTERS = ["A", "B", "C", "D"];

export const AnswerButton: React.FC<AnswerButtonProps> = ({
  index,
  text,
  selected,
  isCorrect,
  isAnswered,
  showCorrectHighlight,
  onSelect,
  disabled
}) => {
  const letter = LETTERS[index] || String.fromCharCode(65 + index);

  let stateClasses = "bg-[#151B32]/70 border-slate-700/60 text-slate-200 hover:border-pink-400 hover:bg-[#1C2442] hover:shadow-[0_0_20px_rgba(232,62,140,0.25)] hover:scale-[1.01]";
  let letterBadgeClasses = "bg-slate-800/90 text-slate-300 border-slate-600 group-hover:border-pink-400 group-hover:text-pink-300";
  let iconElement = null;

  if (isAnswered) {
    if (selected) {
      if (isCorrect) {
        // Selected and CORRECT
        stateClasses = "bg-emerald-950/50 border-emerald-400 text-white shadow-[0_0_25px_rgba(52,211,153,0.45)] ring-2 ring-emerald-400/50 scale-[1.02] animate-bounce-short";
        letterBadgeClasses = "bg-emerald-500 text-black border-emerald-300 font-black";
        iconElement = (
          <div className="flex items-center gap-1 text-emerald-400 font-bold text-xs sm:text-sm animate-scale-in">
            <CheckCircle2 className="w-5 h-5" />
            <span className="hidden sm:inline">Correct !</span>
          </div>
        );
      } else {
        // Selected and WRONG
        stateClasses = "bg-rose-950/60 border-rose-500 text-rose-100 shadow-[0_0_25px_rgba(244,63,94,0.45)] ring-2 ring-rose-500/50 animate-shake";
        letterBadgeClasses = "bg-rose-600 text-white border-rose-400 font-black";
        iconElement = (
          <div className="flex items-center gap-1 text-rose-400 font-bold text-xs sm:text-sm animate-scale-in">
            <XCircle className="w-5 h-5" />
            <span className="hidden sm:inline">Erreur</span>
          </div>
        );
      }
    } else if (showCorrectHighlight) {
      // Not selected, but is the TRUE correct answer revealed
      stateClasses = "bg-emerald-950/30 border-emerald-500/80 text-emerald-100 shadow-[0_0_18px_rgba(52,211,153,0.3)] ring-1 ring-emerald-500/40";
      letterBadgeClasses = "bg-emerald-600 text-white border-emerald-400 font-black";
      iconElement = (
        <div className="flex items-center gap-1 text-emerald-400 font-medium text-xs sm:text-sm animate-fade-in">
          <CheckCircle2 className="w-5 h-5" />
          <span className="hidden sm:inline">Bonne réponse</span>
        </div>
      );
    } else {
      // Disabled / Other unselected option
      stateClasses = "bg-[#111629]/40 border-slate-800/60 text-slate-500 opacity-60";
      letterBadgeClasses = "bg-slate-900/60 text-slate-600 border-slate-800";
    }
  }

  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      disabled={disabled}
      aria-label={`Option ${letter}: ${text}`}
      className={`group relative w-full p-3.5 sm:p-4 rounded-2xl border backdrop-blur-md flex items-center justify-between gap-3 text-left transition-all duration-200 cursor-pointer disabled:cursor-default focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400 ${stateClasses}`}
    >
      <div className="flex items-center gap-3 sm:gap-4 flex-1">
        {/* Letter Pill */}
        <div
          className={`flex-shrink-0 w-8 h-8 sm:w-9 sm:h-9 rounded-xl border flex items-center justify-center font-mono font-bold text-xs sm:text-sm transition-all duration-200 shadow-sm ${letterBadgeClasses}`}
        >
          {letter}
        </div>

        {/* Answer Text */}
        <span className="font-sans text-xs sm:text-sm md:text-base font-medium leading-snug flex-1">
          {text}
        </span>
      </div>

      {/* Status Icon / Feedback */}
      {iconElement && <div className="flex-shrink-0 ml-2">{iconElement}</div>}
    </button>
  );
};
