"use client";

import React, { useState, useEffect } from "react";
import { Question } from "../data/questions";
import { AnswerButton } from "./AnswerButton";
import { 
  KeyRound, 
  Fish, 
  ShieldCheck, 
  Shield,
  Wifi, 
  Bug, 
  UserX, 
  Share2, 
  Globe, 
  MessageSquareWarning, 
  HardDrive,
  RefreshCw,
  Layers,
  Server,
  Binary,
  Lock,
  Network,
  Activity,
  Radio,
  Database,
  Terminal,
  Zap,
  Sliders,
  Users,
  Code2,
  Layout,
  Bot,
  AlertCircle,
  AlertTriangle,
  Cpu,
  Sparkles,
  ArrowRight,
  Lightbulb,
  CheckCircle
} from "lucide-react";
import { soundManager } from "../utils/sound";
import { triggerCorrectAnswerConfetti } from "../utils/confetti";

interface QuestionCardProps {
  question: Question;
  questionNumber: number;
  totalQuestions: number;
  onAnswerSelected: (selectedIndex: number, isCorrect: boolean) => void;
  onNextQuestion: () => void;
  isLastQuestion: boolean;
}

const TOPIC_ICONS: Record<string, React.ReactNode> = {
  KeyRound: <KeyRound className="w-5 h-5 text-pink-400" />,
  Fish: <Fish className="w-5 h-5 text-pink-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-pink-400" />,
  Shield: <Shield className="w-5 h-5 text-pink-400" />,
  Wifi: <Wifi className="w-5 h-5 text-pink-400" />,
  Bug: <Bug className="w-5 h-5 text-pink-400" />,
  UserX: <UserX className="w-5 h-5 text-pink-400" />,
  Share2: <Share2 className="w-5 h-5 text-pink-400" />,
  Globe: <Globe className="w-5 h-5 text-pink-400" />,
  MessageSquareWarning: <MessageSquareWarning className="w-5 h-5 text-pink-400" />,
  HardDrive: <HardDrive className="w-5 h-5 text-pink-400" />,
  RefreshCw: <RefreshCw className="w-5 h-5 text-pink-400" />,
  Layers: <Layers className="w-5 h-5 text-pink-400" />,
  Server: <Server className="w-5 h-5 text-pink-400" />,
  Binary: <Binary className="w-5 h-5 text-pink-400" />,
  Lock: <Lock className="w-5 h-5 text-pink-400" />,
  Network: <Network className="w-5 h-5 text-pink-400" />,
  Activity: <Activity className="w-5 h-5 text-pink-400" />,
  Radio: <Radio className="w-5 h-5 text-pink-400" />,
  Database: <Database className="w-5 h-5 text-pink-400" />,
  Terminal: <Terminal className="w-5 h-5 text-pink-400" />,
  Zap: <Zap className="w-5 h-5 text-pink-400" />,
  Sliders: <Sliders className="w-5 h-5 text-pink-400" />,
  Users: <Users className="w-5 h-5 text-pink-400" />,
  Code2: <Code2 className="w-5 h-5 text-pink-400" />,
  Layout: <Layout className="w-5 h-5 text-pink-400" />,
  Bot: <Bot className="w-5 h-5 text-pink-400" />,
  AlertCircle: <AlertCircle className="w-5 h-5 text-pink-400" />,
  AlertTriangle: <AlertTriangle className="w-5 h-5 text-pink-400" />,
  Cpu: <Cpu className="w-5 h-5 text-pink-400" />,
  Sparkles: <Sparkles className="w-5 h-5 text-pink-400" />
};

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  questionNumber,
  totalQuestions,
  onAnswerSelected,
  onNextQuestion,
  isLastQuestion
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  // Reset state when question changes
  useEffect(() => {
    setSelectedAnswer(null);
    setIsAnswered(false);
  }, [question.id]);

  const handleSelect = (index: number) => {
    if (isAnswered) return;

    setSelectedAnswer(index);
    setIsAnswered(true);
    const isCorrect = index === question.correctAnswer;

    if (isCorrect) {
      soundManager.playCorrect();
      triggerCorrectAnswerConfetti();
    } else {
      soundManager.playWrong();
    }

    onAnswerSelected(index, isCorrect);
  };

  const handleNext = () => {
    soundManager.playClick();
    onNextQuestion();
  };

  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="w-full max-w-3xl mx-auto flex flex-col gap-5 animate-fade-in">
      {/* Main Question Card */}
      <div className="relative rounded-3xl border border-pink-500/25 bg-[#151B32]/85 backdrop-blur-xl p-5 sm:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Subtle Decorative Glows */}
        <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-pink-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />

        {/* Question Header: Topic & Difficulty */}
        <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-700/50">
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded-lg bg-pink-950/60 border border-pink-500/30">
              {TOPIC_ICONS[question.topicIcon] || <KeyRound className="w-5 h-5 text-pink-400" />}
            </div>
            <span className="text-xs sm:text-sm font-semibold text-pink-300 font-mono tracking-wide">
              {question.topic}
            </span>
          </div>

          <span
            className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${
              question.difficulty === "Très facile"
                ? "bg-emerald-950/50 text-emerald-300 border-emerald-500/30"
                : question.difficulty === "Facile"
                ? "bg-cyan-950/50 text-cyan-300 border-cyan-500/30"
                : question.difficulty === "Intermédiaire"
                ? "bg-purple-950/50 text-purple-300 border-purple-500/30"
                : "bg-rose-950/50 text-rose-300 border-rose-500/30"
            }`}
          >
            {question.difficulty}
          </span>
        </div>

        {/* Question Text */}
        <h2 className="text-base sm:text-lg md:text-xl font-bold text-white leading-relaxed mb-6">
          {question.question}
        </h2>

        {/* Answers List */}
        <div className="flex flex-col gap-3">
          {question.answers.map((answer, index) => (
            <AnswerButton
              key={index}
              index={index}
              text={answer}
              selected={selectedAnswer === index}
              isCorrect={index === question.correctAnswer}
              isAnswered={isAnswered}
              showCorrectHighlight={isAnswered && !isCorrect && index === question.correctAnswer}
              onSelect={handleSelect}
              disabled={isAnswered}
            />
          ))}
        </div>
      </div>

      {/* Interactive Explanation Box (Expands when answered) */}
      {isAnswered && (
        <div
          className={`rounded-3xl border p-5 sm:p-6 backdrop-blur-xl shadow-xl animate-slide-up flex flex-col gap-4 ${
            isCorrect
              ? "bg-gradient-to-br from-emerald-950/40 via-[#151B32]/90 to-emerald-950/30 border-emerald-500/40 shadow-[0_0_20px_rgba(52,211,153,0.15)]"
              : "bg-gradient-to-br from-rose-950/40 via-[#151B32]/90 to-pink-950/30 border-pink-500/40 shadow-[0_0_20px_rgba(232,62,140,0.15)]"
          }`}
        >
          {/* Status Header */}
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div className="flex items-center gap-2.5">
              {isCorrect ? (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400 text-emerald-300 text-xs sm:text-sm font-bold">
                  <CheckCircle className="w-4 h-4" />
                  <span>Bien joué ! 🔐 +100 PTS</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400 text-rose-300 text-xs sm:text-sm font-bold">
                  <AlertCircle className="w-4 h-4" />
                  <span>
                    Bonne réponse : Option {["A", "B", "C", "D"][question.correctAnswer]}
                  </span>
                </div>
              )}
            </div>

            <div className="text-xs text-slate-400 font-mono">
              Question {questionNumber} sur {totalQuestions}
            </div>
          </div>

          {/* Explanation Text */}
          <div className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-[#0B1020]/60 p-4 rounded-2xl border border-slate-700/50">
            <div className="flex items-start gap-2 mb-1.5 text-pink-300 font-semibold">
              <Lightbulb className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
              <span>Pourquoi cette réponse ?</span>
            </div>
            <p className="text-slate-300">{question.explanation}</p>
          </div>

          {/* Security Tip Box */}
          {question.securityTip && (
            <div className="text-xs sm:text-sm text-pink-200/90 leading-relaxed bg-pink-950/30 p-3.5 rounded-2xl border border-pink-500/30 flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-pink-400 flex-shrink-0 mt-0.5" />
              <div>
                <span className="font-bold text-pink-300">Astuce Cyber CSI : </span>
                <span>{question.securityTip}</span>
              </div>
            </div>
          )}

          {/* Action CTA Button */}
          <div className="flex justify-end pt-2">
            <button
              onClick={handleNext}
              type="button"
              className="group relative inline-flex items-center gap-2.5 px-6 sm:px-8 py-3.5 rounded-2xl font-bold text-sm sm:text-base text-white bg-gradient-to-r from-pink-600 via-pink-500 to-fuchsia-500 hover:from-pink-500 hover:to-fuchsia-400 shadow-[0_0_25px_rgba(232,62,140,0.5)] hover:shadow-[0_0_35px_rgba(255,45,146,0.8)] transition-all duration-200 active:scale-95 cursor-pointer"
            >
              <span>{isLastQuestion ? "Voir mon résultat final" : "Question suivante"}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
