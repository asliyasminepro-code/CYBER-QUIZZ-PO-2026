"use client";

import React, { useState, useEffect } from "react";
import { QuizCategory, Question } from "../data/questions";
import { pickQuestionsForCategory, getRotationProgress } from "../utils/rotation";
import { ProgressBar } from "./ProgressBar";
import { QuestionCard } from "./QuestionCard";
import { ResultPage } from "./ResultPage";

interface QuizPageProps {
  category: QuizCategory;
  onResetToHome: () => void;
  onChangeCategory: () => void;
}

export const QuizPage: React.FC<QuizPageProps> = ({
  category,
  onResetToHome,
  onChangeCategory
}) => {
  // The set of questions selected for THIS attempt (after rotation logic)
  const [selectedQuestions, setSelectedQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const [rotationInfo, setRotationInfo] = useState<{ seen: number; total: number } | null>(null);

  // Pick questions when the component mounts or when a new attempt starts
  const startNewAttempt = React.useCallback(() => {
    const allIds = category.questions.map(q => q.id);
    const selectedIds = pickQuestionsForCategory(category.id, allIds);

    // Map IDs back to full Question objects, preserving selected order
    const questions = selectedIds
      .map(id => category.questions.find(q => q.id === id))
      .filter((q): q is Question => q !== undefined);

    setSelectedQuestions(questions);
    setCurrentIndex(0);
    setScore(0);
    setUserAnswers(new Array(questions.length).fill(null));
    setIsCompleted(false);

    // Update rotation info display
    setRotationInfo(getRotationProgress(category.id, allIds));
  }, [category]);

  useEffect(() => {
    startNewAttempt();
  }, [startNewAttempt]);

  const currentQuestion: Question | undefined = selectedQuestions[currentIndex];

  const handleAnswerSelected = (selectedIndex: number, isCorrect: boolean) => {
    setUserAnswers(prev => {
      const updated = [...prev];
      updated[currentIndex] = selectedIndex;
      return updated;
    });
    if (isCorrect) {
      setScore(prev => prev + 100);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex < selectedQuestions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  // Replay = new rotation attempt (does NOT reset history)
  const handleRestart = () => {
    startNewAttempt();
  };

  // Loading state while questions are being selected (client-side localStorage)
  if (selectedQuestions.length === 0 || !currentQuestion) {
    return (
      <div className="w-full flex flex-col items-center justify-center py-16">
        <div className="w-8 h-8 border-4 border-pink-500/30 border-t-pink-500 rounded-full animate-spin" />
        <p className="mt-4 text-sm text-slate-400 font-mono">Chargement du quiz…</p>
      </div>
    );
  }

  if (isCompleted) {
    return (
      <ResultPage
        score={score}
        totalQuestions={selectedQuestions.length}
        questions={selectedQuestions}
        userAnswers={userAnswers}
        category={category}
        rotationInfo={rotationInfo}
        onRestart={handleRestart}
        onChangeCategory={onChangeCategory}
      />
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center py-2 sm:py-4">
      {/* Progress Bar & Status */}
      <ProgressBar
        currentIndex={currentIndex}
        totalQuestions={selectedQuestions.length}
        score={score}
        categoryTitle={category.title}
        topic={currentQuestion.topic}
        difficulty={currentQuestion.difficulty}
        rotationInfo={rotationInfo}
        bankTotal={category.questions.length}
      />

      {/* Main Question Card with Smooth Keyed Transition */}
      <QuestionCard
        key={currentQuestion.id}
        question={currentQuestion}
        questionNumber={currentIndex + 1}
        totalQuestions={selectedQuestions.length}
        onAnswerSelected={handleAnswerSelected}
        onNextQuestion={handleNextQuestion}
        isLastQuestion={currentIndex === selectedQuestions.length - 1}
      />
    </div>
  );
};
