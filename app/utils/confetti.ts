import confetti from "canvas-confetti";

export const triggerCorrectAnswerConfetti = () => {
  try {
    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.75 },
      colors: ["#E83E8C", "#FF2D92", "#FFD6E8", "#A855F7", "#00F0FF", "#FFFFFF"],
      disableForReducedMotion: true,
      scalar: 0.9,
      ticks: 150
    });
  } catch {
    // Canvas confetti gracefully caught if unavailable
  }
};

export const triggerVictoryConfetti = () => {
  try {
    const duration = 3000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 100, zIndex: 9999 };

    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // Shoot from both left and right edges for dramatic effect
      confetti({
        ...defaults,
        particleCount,
        origin: { x: 0.15, y: Math.random() - 0.2 },
        colors: ["#E83E8C", "#FF2D92", "#FF65B2", "#FFD6E8", "#D946EF", "#FBBF24"]
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: 0.85, y: Math.random() - 0.2 },
        colors: ["#E83E8C", "#FF2D92", "#00F0FF", "#38BDF8", "#FFD6E8", "#F43F5E"]
      });
    }, 250);
  } catch {
    // Fallback handled
  }
};
