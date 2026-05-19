import { useEffect, useRef } from 'react';

const PARTICLE_COUNT = 70;
const CONNECT_DIST   = 150;
const MOUSE_DIST     = 180;
const MOUSE_PUSH     = 110;
const MAX_SPEED      = 1.4;

interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  r: number; a: number;
}

function makeParticle(w: number, h: number): Particle {
  return {
    x:  Math.random() * w,
    y:  Math.random() * h,
    vx: (Math.random() - 0.5) * 0.45,
    vy: (Math.random() - 0.5) * 0.45,
    r:  Math.random() * 2.5 + 1.5,
    a:  Math.random() * 0.45 + 0.35,
  };
}

export function ParticleBackground({ darkMode }: { darkMode: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const darkRef   = useRef(darkMode);

  useEffect(() => { darkRef.current = darkMode; }, [darkMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize, { passive: true });

    const mouse = { x: -9999, y: -9999 };
    const onMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onLeave = () => { mouse.x = -9999; mouse.y = -9999; };
    window.addEventListener('mousemove', onMove,  { passive: true });
    window.addEventListener('mouseleave', onLeave, { passive: true });

    const pts: Particle[] = Array.from({ length: PARTICLE_COUNT }, () =>
      makeParticle(canvas.width, canvas.height)
    );

    let raf: number;

    function tick() {
      const W = canvas.width;
      const H = canvas.height;
      const dark = darkRef.current;

      ctx.clearRect(0, 0, W, H);

      for (let i = 0; i < pts.length; i++) {
        const p = pts[i];

        // mouse repulsion
        const mdx = p.x - mouse.x;
        const mdy = p.y - mouse.y;
        const md  = Math.sqrt(mdx * mdx + mdy * mdy);
        if (md < MOUSE_PUSH && md > 0) {
          const f = ((MOUSE_PUSH - md) / MOUSE_PUSH) * 0.018;
          p.vx += (mdx / md) * f;
          p.vy += (mdy / md) * f;
        }

        // speed cap + damping
        const spd = Math.sqrt(p.vx * p.vx + p.vy * p.vy);
        if (spd > MAX_SPEED) { p.vx = (p.vx / spd) * MAX_SPEED; p.vy = (p.vy / spd) * MAX_SPEED; }
        p.vx *= 0.992;
        p.vy *= 0.992;

        p.x += p.vx;
        p.y += p.vy;

        // wrap
        if (p.x < 0) p.x = W;
        else if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        else if (p.y > H) p.y = 0;

        // particle–particle lines
        for (let j = i + 1; j < pts.length; j++) {
          const q   = pts[j];
          const dx  = p.x - q.x;
          const dy  = p.y - q.y;
          const d   = Math.sqrt(dx * dx + dy * dy);
          if (d < CONNECT_DIST) {
            const op = (1 - d / CONNECT_DIST) * (dark ? 0.35 : 0.18);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(192,123,62,${op})`;
            ctx.lineWidth   = 0.8;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.stroke();
          }
        }

        // particle–mouse lines
        if (md < MOUSE_DIST) {
          const op = (1 - md / MOUSE_DIST) * (dark ? 0.6 : 0.35);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(192,123,62,${op})`;
          ctx.lineWidth   = 1.1;
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }

        // dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(192,123,62,${dark ? p.a : p.a * 0.8})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(tick);
    }

    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
}
