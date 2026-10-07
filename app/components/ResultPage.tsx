"use client";

import React, { useState, useEffect } from "react";
import { Question, getQuizRank } from "../data/questions";
import { OctoberRoseRibbon } from "./OctoberRoseRibbon";
import { AnswersReviewModal } from "./AnswersReviewModal";
import { 
  Trophy, 
  RotateCcw, 
  Share2, 
  Eye, 
  CheckCircle2, 
  XCircle, 
  Percent, 
  Sparkles,
  Copy,
  Check,
  ShieldCheck,
  Award
} from "lucide-react";
import { soundManager } from "../utils/sound";
import { triggerVictoryConfetti } from "../utils/confetti";

interface ResultPageProps {
  score: number;
  totalQuestions: number;
  questions: Question[];
  userAnswers: (number | null)[];
  onRestart: () => void;
}

export const ResultPage: React.FC<ResultPageProps> = ({
  score,
  totalQuestions,
  questions,
  userAnswers,
  onRestart
}) => {
  const [animatedScore, setAnimatedScore] = useState(0);
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [copiedToast, setCopiedToast] = useState(false);

  const correctCount = userAnswers.reduce<number>((acc, ans, idx) => {
    return ans === questions[idx]?.correctAnswer ? acc + 1 : acc;
  }, 0);

  const wrongCount = totalQuestions - correctCount;
  const percentage = Math.round((correctCount / totalQuestions) * 100);
  const rank = getQuizRank(score);

  // Score Counting animation & Victory fanfare
  useEffect(() => {
    soundManager.playVictory();
    triggerVictoryConfetti();

    let start = 0;
    const duration = 1200; // ms
    const stepTime = 20;
    const steps = duration / stepTime;
    const increment = score / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= score) {
        setAnimatedScore(score);
        clearInterval(timer);
      } else {
        setAnimatedScore(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [score]);

  // Share score logic
  const handleShare = async () => {
    soundManager.playClick();
    const shareText = `J'ai obtenu ${score}/1000 (${rank.title} ${rank.badge}) au CYBER PINK du CSI ! 🎀🔐\nEt toi, quel est ton niveau en cybersécurité ?`;
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";

    if (navigator.share) {
      try {
        await navigator.share({
          title: "CYBER PINK - Quiz Cybersécurité CSI",
          text: shareText,
          url: shareUrl
        });
        return;
      } catch {
        // user cancelled or share failed, fallback to copy
      }
    }

    // Fallback: Copy to clipboard
    try {
      await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
      setCopiedToast(true);
      setTimeout(() => setCopiedToast(false), 3000);
    } catch {
      // Fallback manual copy alert
    }
  };

  const handleReplay = () => {
    soundManager.playClick();
    onRestart();
  };

  const handleOpenReview = () => {
    soundManager.playClick();
    setShowReviewModal(true);
  };

  // SVG Circular progress radius & stroke
  const radius = 68;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-6 animate-fade-in py-2">
      {/* Toast Notification */}
      {copiedToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 px-5 py-3 rounded-2xl bg-pink-600 text-white font-bold text-sm shadow-[0_0_30px_rgba(232,62,140,0.8)] border border-pink-400 animate-bounce-short">
          <Check className="w-4 h-4" />
          <span>Score et message copiés dans le presse-papier ! 🎀</span>
        </div>
      )}

      {/* Main Results Card */}
      <div className="relative rounded-3xl border border-pink-500/30 bg-[#151B32]/90 backdrop-blur-2xl p-6 sm:p-9 shadow-[0_0_50px_rgba(232,62,140,0.25)] flex flex-col items-center text-center overflow-hidden">
        {/* Ambient Top Light */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-pink-500/20 blur-3xl -z-10" />

        {/* Celebration Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/15 border border-pink-500/40 text-pink-300 font-mono text-xs sm:text-sm font-bold tracking-wider mb-4 shadow-[0_0_15px_rgba(232,62,140,0.3)]">
          <Sparkles className="w-4 h-4 text-pink-400" />
          <span>QUIZ TERMINÉ !</span>
          <Sparkles className="w-4 h-4 text-pink-400" />
        </div>

        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
          Ton Bilan Cyber Sécurité
        </h1>

        {/* Circular Animated Progress & Score Meter */}
        <div className="relative w-44 h-44 sm:w-52 sm:h-52 flex items-center justify-center my-2">
          <svg className="w-full h-full -rotate-90 transform" viewBox="0 0 160 160">
            {/* Background Ring Track */}
            <circle
              cx="80"
              cy="80"
              r={radius}
              stroke="#1F293D"
              strokeWidth="12"
              fill="none"
            />
            {/* Glowing Gradient Progress Stroke */}
            <circle
              cx="80"
              cy="80"
              r={radius}
              stroke="url(#scoreGradient)"
              strokeWidth="12"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              strokeLinecap="round"
              className="transition-all duration-1000 ease-out"
            />
            <defs>
              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FF2D92" />
                <stop offset="50%" stopColor="#E83E8C" />
                <stop offset="100%" stopColor="#A855F7" />
              </linearGradient>
            </defs>
          </svg>

          {/* Center Score Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-3xl sm:text-4xl font-black font-mono tracking-tight text-white drop-shadow-[0_0_12px_rgba(232,62,140,0.6)]">
              {animatedScore}
            </span>
            <span className="text-xs sm:text-sm font-mono text-pink-300 font-semibold">
              / 1000 PTS
            </span>
            <span className="text-[11px] font-mono text-slate-400 mt-0.5">
              {percentage}% de réussite
            </span>
          </div>
        </div>

        {/* Rank Badge Card */}
        <div 
          className="w-full max-w-md my-6 p-4 sm:p-5 rounded-2xl border backdrop-blur-xl flex flex-col items-center gap-2 transition-all shadow-lg"
          style={{
            borderColor: rank.color,
            boxShadow: `0 0 25px ${rank.glowColor}`,
            background: "rgba(11, 16, 32, 0.75)"
          }}
        >
          <div className="flex items-center gap-2">
            <span className="text-2xl sm:text-3xl">{rank.badge}</span>
            <h2 className="text-xl sm:text-2xl font-extrabold tracking-wide" style={{ color: rank.color }}>
              {rank.title}
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-200 font-medium max-w-sm">
            {rank.description}
          </p>
        </div>

        {/* Performance Statistics Grid */}
        <div className="w-full grid grid-cols-3 gap-2 sm:gap-4 mb-6">
          <div className="p-3 sm:p-4 rounded-2xl bg-[#0B1020]/70 border border-emerald-500/30 flex flex-col items-center justify-center gap-1">
            <div className="flex items-center gap-1 text-emerald-400 text-xs font-bold">
              <CheckCircle2 className="w-4 h-4" />
              <span className="hidden sm:inline">Bonnes réponses</span>
              <span className="sm:hidden">Correct</span>
            </div>
            <span className="text-lg sm:text-2xl font-mono font-black text-white">
              {correctCount} / {totalQuestions}
            </span>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-[#0B1020]/70 border border-rose-500/30 flex flex-col items-center justify-center gap-1">
            <div className="flex items-center gap-1 text-rose-400 text-xs font-bold">
              <XCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Erreurs</span>
              <span className="sm:hidden">Erreurs</span>
            </div>
            <span className="text-lg sm:text-2xl font-mono font-black text-white">
              {wrongCount}
            </span>
          </div>

          <div className="p-3 sm:p-4 rounded-2xl bg-[#0B1020]/70 border border-pink-500/30 flex flex-col items-center justify-center gap-1">
            <div className="flex items-center gap-1 text-pink-400 text-xs font-bold">
              <Percent className="w-4 h-4" />
              <span>Précision</span>
            </div>
            <span className="text-lg sm:text-2xl font-mono font-black text-pink-300">
              {percentage}%
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full flex flex-col sm:flex-row gap-3 items-stretch justify-center">
          {/* Replay */}
          <button
            onClick={handleReplay}
            type="button"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-pink-600 via-pink-500 to-fuchsia-500 hover:from-pink-500 hover:to-fuchsia-400 shadow-[0_0_20px_rgba(232,62,140,0.5)] transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>REJOUER</span>
          </button>

          {/* Review Answers */}
          <button
            onClick={handleOpenReview}
            type="button"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-bold text-sm sm:text-base text-slate-200 bg-[#0B1020] hover:bg-[#151B32] border border-pink-500/40 hover:border-pink-400 hover:text-white shadow-md transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <Eye className="w-4 h-4 text-pink-400" />
            <span>VOIR LES BONNES RÉPONSES</span>
          </button>

          {/* Share */}
          <button
            onClick={handleShare}
            type="button"
            className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl font-bold text-sm sm:text-base text-pink-300 bg-pink-950/40 hover:bg-pink-900/50 border border-pink-500/60 hover:border-pink-400 shadow-[0_0_15px_rgba(232,62,140,0.3)] transition-all duration-200 active:scale-95 cursor-pointer"
          >
            <Share2 className="w-4 h-4 text-pink-400" />
            <span>PARTAGER MON SCORE</span>
          </button>
        </div>
      </div>

      {/* Octobre Rose Awareness Banner (Section 8) */}
      <div className="rounded-3xl border border-pink-500/30 bg-[#151B32]/70 backdrop-blur-xl p-5 sm:p-6 flex items-center gap-4 text-left shadow-lg">
        <OctoberRoseRibbon size="md" animated={true} />
        <div className="flex-1">
          <h3 className="text-sm sm:text-base font-bold text-pink-300 flex items-center gap-1.5 mb-1">
            <span>Octobre Rose 2026</span>
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Le <strong className="text-white">CSI (Club Scientifique Informatique)</strong> soutient la sensibilisation et l&apos;importance de l&apos;information et de la prévention.
          </p>
        </div>
      </div>

      {/* Answers Review Modal */}
      <AnswersReviewModal
        isOpen={showReviewModal}
        onClose={() => setShowReviewModal(false)}
        questions={questions}
        userAnswers={userAnswers}
      />
    </div>
  );
};
