import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  baseX: number;
  baseY: number;
  vx: number;
  vy: number;
  opacity: number;
  hue: number;
  twinkleSpeed: number;
}

export function useParticles(canvasRef: React.RefObject<HTMLCanvasElement>) {
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0, radius: 150 });
  const initializedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const init = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const particleCount = Math.min(60, Math.floor((canvas.width * canvas.height) / 20000));
      const particles: Particle[] = [];

      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particles.push({
          x,
          y,
          baseX: x,
          baseY: y,
          size: Math.random() * 1.5 + 0.5,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.5 + 0.1,
          hue: Math.random() > 0.5 ? 186 : 263, // Cyan or Violet
          twinkleSpeed: Math.random() * 0.02 + 0.005,
        });
      }
      particlesRef.current = particles;
    };

    const drawLine = (p1: Particle, p2: Particle, distance: number) => {
      const opacity = (1 - distance / 130) * 0.15;
      if (opacity <= 0) return;

      ctx.beginPath();
      ctx.moveTo(p1.x, p1.y);
      ctx.lineTo(p2.x, p2.y);
      ctx.setLineDash([2, 4]); // Stylized dashed lines
      ctx.strokeStyle = `hsla(${p1.hue}, 80%, 70%, ${opacity})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
      ctx.setLineDash([]); // Reset
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      const particles = particlesRef.current;
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Mouse Interaction (Push)
        const dx = mouseRef.current.x - p.x;
        const dy = mouseRef.current.y - p.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < mouseRef.current.radius) {
          const force = (mouseRef.current.radius - dist) / mouseRef.current.radius;
          const angle = Math.atan2(dy, dx);
          p.x -= Math.cos(angle) * force * 2;
          p.y -= Math.sin(angle) * force * 2;
        }

        // Screen Wrap
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Twinkle Effect
        p.opacity += p.twinkleSpeed;
        if (p.opacity > 0.6 || p.opacity < 0.1) p.twinkleSpeed *= -1;

        // Draw Glow
        ctx.beginPath();
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 5);
        g.addColorStop(0, `hsla(${p.hue}, 80%, 60%, ${p.opacity})`);
        g.addColorStop(1, 'transparent');
        ctx.fillStyle = g;
        ctx.arc(p.x, p.y, p.size * 5, 0, Math.PI * 2);
        ctx.fill();

        // Draw Core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue}, 100%, 80%, ${p.opacity + 0.2})`;
        ctx.fill();

        // Connect nearby particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const d = Math.sqrt((p.x - p2.x) ** 2 + (p.y - p2.y) ** 2);
          if (d < 130) drawLine(p, p2, d);
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleResize = () => {
      init();
    };

    init();
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [canvasRef]);
}
