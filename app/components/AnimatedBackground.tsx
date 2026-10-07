"use client";

import React, { useEffect, useRef } from "react";
import { 
  Shield, 
  Lock, 
  Terminal, 
  Wifi, 
  Fingerprint, 
  AlertTriangle, 
  Code2, 
  KeyRound, 
  Binary, 
  Cpu
} from "lucide-react";

export const AnimatedBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    // Particle nodes
    const particleCount = Math.min(Math.floor((width * height) / 18000), 45);
    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
      pulseSpeed: number;
      isPink: boolean;
    }

    const particles: Particle[] = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        isPink: Math.random() > 0.35
      });
    }

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // Draw particle connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            const lineAlpha = (1 - dist / 130) * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = particles[i].isPink
              ? `rgba(232, 62, 140, ${lineAlpha})`
              : `rgba(0, 240, 255, ${lineAlpha * 0.7})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }
      }

      // Draw and update particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        const dynamicAlpha = p.alpha + Math.sin(time * 2 + i) * 0.15;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isPink
          ? `rgba(255, 105, 180, ${Math.max(0.1, dynamicAlpha)})`
          : `rgba(56, 189, 248, ${Math.max(0.1, dynamicAlpha)})`;
        ctx.shadowBlur = p.isPink ? 8 : 4;
        ctx.shadowColor = p.isPink ? "#E83E8C" : "#00F0FF";
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 bg-[#0B1020]">
      {/* Deep Cyber Radial Gradients */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br from-pink-600/15 via-purple-900/10 to-transparent blur-[100px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[55vw] h-[55vw] rounded-full bg-gradient-to-tl from-pink-500/12 via-indigo-900/10 to-transparent blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] rounded-full bg-gradient-to-r from-pink-700/5 via-fuchsia-950/10 to-cyan-950/5 blur-[140px]" />

      {/* Cyber Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #E83E8C 1px, transparent 1px),
            linear-gradient(to bottom, #E83E8C 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px"
        }}
      />

      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Floating Cybersecurity Ambient Icons */}
      <div className="absolute top-[12%] left-[8%] text-pink-500/15 animate-float-slow hidden md:block">
        <Shield className="w-12 h-12 drop-shadow-[0_0_12px_rgba(232,62,140,0.3)]" />
      </div>
      <div className="absolute top-[28%] right-[7%] text-pink-400/20 animate-float-delayed hidden md:block">
        <Lock className="w-10 h-10 drop-shadow-[0_0_10px_rgba(255,105,180,0.3)]" />
      </div>
      <div className="absolute bottom-[20%] left-[6%] text-purple-400/15 animate-float hidden md:block">
        <Terminal className="w-14 h-14" />
      </div>
      <div className="absolute bottom-[25%] right-[10%] text-pink-500/20 animate-float-slow hidden md:block">
        <Wifi className="w-10 h-10" />
      </div>
      <div className="absolute top-[65%] left-[18%] text-cyan-400/15 animate-float-delayed hidden lg:block">
        <Fingerprint className="w-12 h-12" />
      </div>
      <div className="absolute top-[18%] right-[22%] text-pink-300/15 animate-float hidden lg:block">
        <Code2 className="w-10 h-10" />
      </div>
      <div className="absolute bottom-[10%] right-[30%] text-fuchsia-400/15 animate-float-slow hidden lg:block">
        <KeyRound className="w-9 h-9" />
      </div>
      <div className="absolute top-[45%] left-[4%] text-rose-400/15 animate-float hidden lg:block">
        <AlertTriangle className="w-8 h-8" />
      </div>
      <div className="absolute top-[80%] right-[5%] text-indigo-400/15 animate-float-delayed hidden lg:block">
        <Binary className="w-11 h-11" />
      </div>
      <div className="absolute top-[8%] left-[40%] text-pink-400/10 animate-float-slow hidden xl:block">
        <Cpu className="w-10 h-10" />
      </div>
    </div>
  );
};
