"use client";

import React from "react";
import { Question } from "../data/questions";
import { X, CheckCircle2, XCircle, Lightbulb, Shield, Sparkles } from "lucide-react";
import { soundManager } from "../utils/sound";

interface AnswersReviewModalProps {
  questions: Question[];
  userAnswers: (number | null)[];
  isOpen: boolean;
  onClose: () => void;
  categoryTitle?: string;
}

export const AnswersReviewModal: React.FC<AnswersReviewModalProps> = ({
  questions,
  userAnswers,
  isOpen,
  onClose,
  categoryTitle
}) => {
  if (!isOpen) return null;

  const handleClose = () => {
    soundManager.playClick();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl border border-pink-500/30 bg-[#0E1428] shadow-[0_0_50px_rgba(232,62,140,0.3)] overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-pink-500/20 bg-[#151B32]">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-pink-500/20 border border-pink-500/40">
              <Shield className="w-5 h-5 text-pink-400" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                <span>Récapitulatif des Réponses</span>
                {categoryTitle && (
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-pink-950/60 text-pink-300 border border-pink-500/30">
                    {categoryTitle}
                  </span>
                )}
              </h2>
              <p className="text-xs text-slate-400">
                10 questions analysées avec solutions détaillées et astuces CSI
              </p>
            </div>
          </div>

          <button
            onClick={handleClose}
            type="button"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            title="Fermer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Questions List */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {questions.map((q, idx) => {
            const userAnswer = userAnswers[idx];
            const isCorrect = userAnswer === q.correctAnswer;
            const letters = ["A", "B", "C", "D"];

            return (
              <div
                key={q.id}
                className={`p-4 sm:p-5 rounded-2xl border transition-all ${
                  isCorrect
                    ? "bg-[#151B32]/70 border-emerald-500/30"
                    : "bg-[#151B32]/70 border-rose-500/30"
                }`}
              >
                {/* Question Title Bar */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-pink-950/60 text-pink-300 border border-pink-500/30">
                      Q{idx + 1}
                    </span>
                    <span className="text-xs font-medium text-slate-400 font-mono">
                      {q.topic}
                    </span>
                  </div>

                  {isCorrect ? (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-500/30">
                      <CheckCircle2 className="w-3.5 h-3.5" /> +100 pts
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-rose-400 bg-rose-950/60 px-2.5 py-0.5 rounded-full border border-rose-500/30">
                      <XCircle className="w-3.5 h-3.5" /> 0 pt
                    </span>
                  )}
                </div>

                <h4 className="text-sm sm:text-base font-semibold text-white mb-3 leading-snug">
                  {q.question}
                </h4>

                {/* Answers Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-3">
                  {q.answers.map((ans, ansIdx) => {
                    const isUserChoice = userAnswer === ansIdx;
                    const isTrueCorrect = ansIdx === q.correctAnswer;

                    let bgStyle = "bg-[#0B1020]/60 border-slate-800 text-slate-400";
                    if (isTrueCorrect) {
                      bgStyle = "bg-emerald-950/40 border-emerald-500/50 text-emerald-200 font-medium";
                    } else if (isUserChoice && !isTrueCorrect) {
                      bgStyle = "bg-rose-950/40 border-rose-500/50 text-rose-200";
                    }

                    return (
                      <div
                        key={ansIdx}
                        className={`p-2.5 rounded-xl border text-xs flex items-start gap-2 ${bgStyle}`}
                      >
                        <span className="font-mono font-bold">{letters[ansIdx]}.</span>
                        <span className="flex-1">{ans}</span>
                        {isTrueCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />}
                        {isUserChoice && !isTrueCorrect && <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />}
                      </div>
                    );
                  })}
                </div>

                {/* Explanation */}
                <div className="text-xs text-slate-300 bg-[#0B1020]/70 p-3 rounded-xl border border-slate-700/40 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-pink-300 font-semibold">
                    <Lightbulb className="w-3.5 h-3.5 text-pink-400" />
                    <span>Explication :</span>
                  </div>
                  <p>{q.explanation}</p>
                  {q.securityTip && (
                    <div className="pt-1 text-pink-200/80 flex items-start gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-pink-400 flex-shrink-0 mt-0.5" />
                      <span>{q.securityTip}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-pink-500/20 bg-[#151B32] flex justify-end">
          <button
            onClick={handleClose}
            type="button"
            className="px-6 py-2.5 rounded-xl bg-pink-600 hover:bg-pink-500 text-white font-bold text-sm transition-colors shadow-[0_0_15px_rgba(232,62,140,0.4)] cursor-pointer"
          >
            Fermer le récapitulatif
          </button>
        </div>
      </div>
    </div>
  );
};
