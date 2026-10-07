"use client";

import React, { useState } from "react";
import { QUIZ_QUESTIONS, Question } from "../data/questions";
import { ProgressBar } from "./ProgressBar";
import { QuestionCard } from "./QuestionCard";
import { ResultPage } from "./ResultPage";

interface QuizPageProps {
  onResetToHome: () => void;
}

export const QuizPage: React.FC<QuizPageProps> = ({ onResetToHome }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(
    new Array(QUIZ_QUESTIONS.length).fill(null)
  );
  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const currentQuestion: Question = QUIZ_QUESTIONS[currentIndex];

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
    if (currentIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setScore(0);
    setUserAnswers(new Array(QUIZ_QUESTIONS.length).fill(null));
    setIsCompleted(false);
  };

  if (isCompleted) {
    return (
      <ResultPage
        score={score}
        totalQuestions={QUIZ_QUESTIONS.length}
        questions={QUIZ_QUESTIONS}
        userAnswers={userAnswers}
        onRestart={handleRestart}
      />
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center py-2 sm:py-4">
      {/* Progress Bar & Status */}
      <ProgressBar
        currentIndex={currentIndex}
        totalQuestions={QUIZ_QUESTIONS.length}
        score={score}
        topic={currentQuestion.topic}
        difficulty={currentQuestion.difficulty}
      />

      {/* Main Question Card with Smooth Keyed Transition */}
      <QuestionCard
        key={currentQuestion.id}
        question={currentQuestion}
        questionNumber={currentIndex + 1}
        totalQuestions={QUIZ_QUESTIONS.length}
        onAnswerSelected={handleAnswerSelected}
        onNextQuestion={handleNextQuestion}
        isLastQuestion={currentIndex === QUIZ_QUESTIONS.length - 1}
      />
    </div>
  );
};
