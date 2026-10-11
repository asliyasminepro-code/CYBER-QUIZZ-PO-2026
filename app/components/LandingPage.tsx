"use client";

import React, { useRef } from "react";
import { OctoberRoseRibbon } from "./OctoberRoseRibbon";
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Network,
  Bug,
  Cpu,
  Trophy,
  Zap,
  Users,
  CheckCircle2,
  ChevronDown
} from "lucide-react";
import { soundManager } from "../utils/sound";
import { QUIZ_CATEGORIES, CategoryId, QuizCategory } from "../data/questions";

interface LandingPageProps {
  selectedCategoryId: CategoryId;
  onSelectCategory: (id: CategoryId) => void;
  onStartQuiz: (id: CategoryId) => void;
}

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  Network: <Network className="w-6 h-6" />,
  Bug: <Bug className="w-6 h-6" />,
  Cpu: <Cpu className="w-6 h-6" />
};

export const LandingPage: React.FC<LandingPageProps> = ({
  selectedCategoryId,
  onSelectCategory,
  onStartQuiz
}) => {
  const categorySectionRef = useRef<HTMLDivElement>(null);

  const selectedCategory = QUIZ_CATEGORIES.find(c => c.id === selectedCategoryId) || QUIZ_CATEGORIES[0];

  const handleSelect = (category: QuizCategory) => {
    soundManager.playClick();
    onSelectCategory(category.id);
  };

  const handleStart = () => {
    soundManager.playClick();
    onStartQuiz(selectedCategoryId);
  };

  const scrollToCategories = () => {
    soundManager.playClick();
    categorySectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center text-center gap-10 py-4 sm:py-8 animate-fade-in">
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
            Le Cyber Quiz du CSI • Portes Ouvertes 2026
          </span>
          <Sparkles className="w-4 h-4 text-pink-400" />
        </div>

        {/* Catchy Description */}
        <p className="max-w-xl text-slate-300 text-sm sm:text-base md:text-lg font-normal leading-relaxed mt-2 px-4">
          Teste tes réflexes, relève nos 4 défis technologiques et découvre si tu as l&apos;étoffe d&apos;un Cyber Expert !
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

      {/* Primary CTA & Quick Anchor */}
      <div className="flex flex-col items-center gap-3 w-full max-w-md px-4">
        <button
          onClick={handleStart}
          type="button"
          className="group relative w-full py-4 sm:py-5 px-8 rounded-2xl font-black text-base sm:text-lg tracking-wide uppercase text-white bg-gradient-to-r from-pink-600 via-pink-500 to-fuchsia-500 hover:from-pink-500 hover:to-fuchsia-400 shadow-[0_0_35px_rgba(232,62,140,0.6)] hover:shadow-[0_0_50px_rgba(255,45,146,0.9)] transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center gap-3"
        >
          <Zap className="w-5 h-5 text-yellow-300 fill-yellow-300 animate-pulse" />
          <span>LANCER LE QUIZ : {selectedCategory.title}</span>
          <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
          
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </button>

        <button
          onClick={scrollToCategories}
          type="button"
          className="text-xs sm:text-sm font-mono text-pink-300/80 hover:text-pink-300 flex items-center gap-1.5 transition-colors cursor-pointer py-1"
        >
          <span>Ou choisis un autre univers ci-dessous</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </button>
      </div>

      {/* Category Selection Section (Requirement 5) */}
      <div ref={categorySectionRef} className="w-full pt-6 scroll-mt-20 flex flex-col items-center gap-6">
        <div className="flex flex-col items-center gap-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/15 border border-pink-500/30 text-pink-300 text-xs font-mono font-bold tracking-wider uppercase">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            4 Catégories • Rotation de Questions
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-white">
            CHOISIS TON DÉFI CYBER
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl font-normal">
            Quatre univers, 100 questions en banque. 10 questions différentes à chaque partie grâce à la rotation !
          </p>
        </div>

        {/* 4 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 w-full px-2 sm:px-4 text-left">
          {QUIZ_CATEGORIES.map((cat) => {
            const isSelected = selectedCategoryId === cat.id;

            return (
              <div
                key={cat.id}
                onClick={() => handleSelect(cat)}
                className={`group relative rounded-3xl p-5 sm:p-6 transition-all duration-300 cursor-pointer border flex flex-col justify-between gap-4 backdrop-blur-xl ${
                  isSelected
                    ? "bg-[#151B32] border-pink-400 shadow-[0_0_30px_rgba(232,62,140,0.45)] scale-[1.01]"
                    : "bg-[#151B32]/70 border-slate-800 hover:border-pink-500/40 hover:bg-[#151B32]/90 hover:shadow-[0_0_20px_rgba(232,62,140,0.2)]"
                }`}
              >
                {/* Active Indicator Top Glow */}
                {isSelected && (
                  <div
                    className="absolute -top-12 left-1/2 -translate-x-1/2 w-40 h-20 blur-2xl rounded-full pointer-events-none"
                    style={{ backgroundColor: cat.glowColor }}
                  />
                )}

                {/* Card Header: Icon + Difficulty + Selected Checkmark */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="p-3 rounded-2xl border transition-colors"
                      style={{
                        backgroundColor: isSelected ? "rgba(232, 62, 140, 0.2)" : "rgba(21, 27, 50, 0.8)",
                        borderColor: isSelected ? cat.accentColor : "rgba(232, 62, 140, 0.3)",
                        color: cat.accentColor
                      }}
                    >
                      {CATEGORY_ICONS[cat.icon] || <ShieldCheck className="w-6 h-6" />}
                    </div>

                    <div>
                      <h3 className="text-lg sm:text-xl font-black text-white tracking-wide group-hover:text-pink-200 transition-colors">
                        {cat.title}
                      </h3>
                      <span className="text-xs font-mono text-slate-400">
                        {cat.questions.length} questions en banque • 1000 pts
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
                        cat.difficultyLabel === "Débutant"
                          ? "bg-emerald-950/50 text-emerald-300 border-emerald-500/30"
                          : cat.difficultyLabel === "Intermédiaire"
                          ? "bg-purple-950/50 text-purple-300 border-purple-500/30"
                          : "bg-pink-950/50 text-pink-300 border-pink-500/30"
                      }`}
                    >
                      {cat.difficultyLabel}
                    </span>

                    {isSelected && (
                      <div className="w-6 h-6 rounded-full bg-pink-500 flex items-center justify-center text-white shadow-[0_0_10px_rgba(255,45,146,0.8)] animate-scale-in">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                </div>

                {/* French Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {cat.shortDescription}
                </p>

                {/* Card Action Footer */}
                <div className="pt-2 border-t border-slate-700/40 flex items-center justify-between text-xs font-mono">
                  <span className="text-slate-400">
                    {isSelected ? (
                      <span className="text-pink-300 font-bold flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-pink-400 animate-ping" />
                        Prêt à jouer
                      </span>
                    ) : (
                      "Clique pour sélectionner"
                    )}
                  </span>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSelect(cat);
                      onStartQuiz(cat.id);
                    }}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-bold transition-all ${
                      isSelected
                        ? "bg-pink-600 hover:bg-pink-500 text-white shadow-[0_0_15px_rgba(232,62,140,0.5)]"
                        : "bg-slate-800 hover:bg-pink-950/50 hover:text-pink-300 text-slate-300 border border-slate-700"
                    }`}
                  >
                    <span>Lancer ce défi</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 3 Quick Game Features Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 w-full px-2 sm:px-4 mt-4">
        <div className="p-4 rounded-2xl bg-[#151B32]/70 border border-pink-500/20 backdrop-blur-xl flex flex-col items-center text-center gap-2 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(232,62,140,0.2)] transition-all">
          <div className="p-2.5 rounded-xl bg-pink-500/20 text-pink-400 border border-pink-500/30">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-sm text-white">100 Questions en Banque</h3>
          <p className="text-xs text-slate-400">
            25 par catégorie avec rotation — chaque partie propose 10 nouvelles questions.
          </p>
        </div>

        <div className="p-4 rounded-2xl bg-[#151B32]/70 border border-pink-500/20 backdrop-blur-xl flex flex-col items-center text-center gap-2 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(232,62,140,0.2)] transition-all">
          <div className="p-2.5 rounded-xl bg-pink-500/20 text-pink-400 border border-pink-500/30">
            <Trophy className="w-5 h-5" />
          </div>
          <h3 className="font-bold text-sm text-white">Score & Trophées CSI</h3>
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
