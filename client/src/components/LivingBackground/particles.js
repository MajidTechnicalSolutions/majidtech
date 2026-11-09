// Drifting dots on a canvas that join with thin lines when near each other and
// reach toward the mouse. Returns a stop function. Pauses while the tab is hidden;
// with `still` (reduced motion) it draws a single frame.

const LINK = 130; // px between dots before they connect
const MOUSE_LINK = 180;

export function startParticles(canvas, { still = false } = {}) {
  const ctx = canvas.getContext("2d");
  if (!ctx) return () => {};

  let width = 0;
  let height = 0;
  let dots = [];
  let frame = 0;
  const mouse = { x: -9999, y: -9999 };

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.max(24, Math.min(90, Math.floor((width * height) / 16000)));
    dots = Array.from({ length: count }, () => {
      const angle = Math.random() * Math.PI * 2;
      const speed = 0.12 + Math.random() * 0.22;
      return {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        r: 0.8 + Math.random() * 1.2,
      };
    });
    if (still) draw();
  };

  const draw = () => {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < dots.length; i++) {
      const a = dots[i];
      for (let j = i + 1; j < dots.length; j++) {
        const b = dots[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < LINK * LINK) {
          const alpha = (1 - Math.sqrt(d2) / LINK) * 0.22;
          ctx.strokeStyle = `rgba(165,165,166,${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }
      const mx = a.x - mouse.x;
      const my = a.y - mouse.y;
      const md = Math.sqrt(mx * mx + my * my);
      if (md < MOUSE_LINK) {
        ctx.strokeStyle = `rgba(253,90,30,${(1 - md / MOUSE_LINK) * 0.5})`;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
      ctx.fillStyle = "rgba(215,215,216,0.55)";
      ctx.beginPath();
      ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
      ctx.fill();
    }
  };

  const step = () => {
    for (const p of dots) {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -10) p.x = width + 10;
      else if (p.x > width + 10) p.x = -10;
      if (p.y < -10) p.y = height + 10;
      else if (p.y > height + 10) p.y = -10;
    }
    draw();
    frame = requestAnimationFrame(step);
  };

  const onMove = (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  };
  const onLeave = () => {
    mouse.x = -9999;
    mouse.y = -9999;
  };
  const onVisibility = () => {
    cancelAnimationFrame(frame);
    frame = 0;
    if (!document.hidden && !still) frame = requestAnimationFrame(step);
  };

  resize();
  window.addEventListener("resize", resize);
  if (!still) {
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);
    frame = requestAnimationFrame(step);
  }

  return () => {
    cancelAnimationFrame(frame);
    window.removeEventListener("resize", resize);
    window.removeEventListener("pointermove", onMove);
    document.documentElement.removeEventListener("pointerleave", onLeave);
    document.removeEventListener("visibilitychange", onVisibility);
  };
}
