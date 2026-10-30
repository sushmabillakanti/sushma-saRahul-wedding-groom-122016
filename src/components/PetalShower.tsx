import React, { useEffect, useRef, useState } from 'react';

interface Petal {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  rotation: number;
  rotationSpeed: number;
  color: string;
  shape: 'marigold' | 'rose' | 'jasmine';
  opacity: number;
}

export const PetalShower: React.FC<{ active?: boolean; onToggle?: () => void }> = ({
  active = true,
  onToggle
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const petalsRef = useRef<Petal[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const [isEnabled, setIsEnabled] = useState<boolean>(active);

  useEffect(() => {
    setIsEnabled(active);
  }, [active]);

  const handleToggle = () => {
    const nextState = !isEnabled;
    setIsEnabled(nextState);
    if (onToggle) onToggle();
  };

  const burstPetals = (count = 40) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const colors = [
      '#F59E0B', // Marigold Gold
      '#EA580C', // Deep Saffron Orange
      '#DC2626', // Crimson Rose
      '#F43F5E', // Pink Rose
      '#FEF08A'  // Pale Yellow Jasmine
    ];

    for (let i = 0; i < count; i++) {
      petalsRef.current.push({
        x: Math.random() * canvas.width,
        y: -20 - Math.random() * 50,
        size: 10 + Math.random() * 12,
        speedX: -1.5 + Math.random() * 3,
        speedY: 2 + Math.random() * 3,
        rotation: Math.random() * 360,
        rotationSpeed: -3 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        shape: Math.random() > 0.4 ? 'marigold' : 'rose',
        opacity: 0.8 + Math.random() * 0.2
      });
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Initial petals
    const colors = ['#F59E0B', '#EA580C', '#E11D48', '#FECDD3', '#FEF08A'];
    petalsRef.current = Array.from({ length: 30 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 9 + Math.random() * 11,
      speedX: -1 + Math.random() * 2,
      speedY: 1 + Math.random() * 2,
      rotation: Math.random() * 360,
      rotationSpeed: -2 + Math.random() * 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: Math.random() > 0.4 ? 'marigold' : 'rose',
      opacity: 0.75 + Math.random() * 0.25
    }));

    const render = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (isEnabled) {
        petalsRef.current.forEach((petal) => {
          ctx.save();
          ctx.translate(petal.x, petal.y);
          ctx.rotate((petal.rotation * Math.PI) / 180);
          ctx.globalAlpha = petal.opacity;

          ctx.fillStyle = petal.color;
          ctx.beginPath();

          if (petal.shape === 'marigold') {
            // Teardrop marigold petal
            ctx.ellipse(0, 0, petal.size * 0.5, petal.size, 0, 0, Math.PI * 2);
          } else {
            // Heart/soft curved rose petal
            ctx.moveTo(0, 0);
            ctx.bezierCurveTo(
              -petal.size * 0.5,
              -petal.size * 0.4,
              -petal.size * 0.5,
              petal.size * 0.5,
              0,
              petal.size
            );
            ctx.bezierCurveTo(
              petal.size * 0.5,
              petal.size * 0.5,
              petal.size * 0.5,
              -petal.size * 0.4,
              0,
              0
            );
          }
          ctx.fill();
          ctx.restore();

          petal.y += petal.speedY;
          petal.x += Math.sin(petal.y * 0.01) * 0.8 + petal.speedX * 0.5;
          petal.rotation += petal.rotationSpeed;

          // Recycle when fallen below screen
          if (petal.y > canvas.height + 20) {
            petal.y = -20;
            petal.x = Math.random() * canvas.width;
          }
        });
      }

      animationFrameRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      window.removeEventListener('resize', resize);
    };
  }, [isEnabled]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30"
      aria-hidden="true"
    />
  );
};
