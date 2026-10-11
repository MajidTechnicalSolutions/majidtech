// The hero's { } as a 3D wireframe, drawn on a canvas with no 3D library: each
// brace is a square tube along a curly-brace path, drawn as lines and dots in
// the brand orange with loose particles around it. It sways slowly and tilts
// toward the cursor. Loaded on demand by HeroBrackets.jsx; start() returns stop().

// Seeded random, so the mesh looks the same on every visit.
function random(seed) {
  return () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };
}

// The left brace's centre line in the original picture's 622 × 769 box, as
// cubic curves: top serif, down, the point, down, bottom serif.
const LEFT = [
  [[272, 42], [190, 30], [122, 62], [118, 165]],
  [[118, 165], [114, 270], [112, 330], [42, 385]],
  [[42, 385], [112, 440], [114, 500], [118, 605]],
  [[118, 605], [122, 708], [190, 740], [272, 728]],
];
const BOX = { w: 622, h: 769 };
const STEPS = 7; // samples per curve
const HALF_WIDTH = 38; // the tube's half-thickness across the stroke
const HALF_DEPTH = 30; // and front to back

const bezier = ([a, b, c, d], t) => {
  const u = 1 - t;
  const k = [u * u * u, 3 * u * u * t, 3 * u * t * t, t * t * t];
  return [0, 1].map((i) => k[0] * a[i] + k[1] * b[i] + k[2] * c[i] + k[3] * d[i]);
};

function centreLine(curves, mirror) {
  const points = [];
  curves.forEach((curve, n) => {
    for (let s = n === 0 ? 0 : 1; s <= STEPS; s++) {
      const [x, y] = bezier(curve, s / STEPS);
      points.push([mirror ? BOX.w - x : x, y]);
    }
  });
  return points;
}

// One brace: a ring of 4 corners at each point of its centre line, joined
// along the tube, around each ring and across each face (the triangles).
function brace(points, rand, vertices, edges) {
  const start = vertices.length;
  points.forEach(([x, y], i) => {
    const [px, py] = points[Math.max(0, i - 1)];
    const [nx, ny] = points[Math.min(points.length - 1, i + 1)];
    const len = Math.hypot(nx - px, ny - py) || 1;
    const normal = [-(ny - py) / len, (nx - px) / len];
    const corners = [
      [1, 1],
      [-1, 1],
      [-1, -1],
      [1, -1],
    ];
    corners.forEach(([a, b]) => {
      const jitter = () => (rand() - 0.5) * 14;
      vertices.push([
        x + normal[0] * a * HALF_WIDTH + jitter() - BOX.w / 2,
        y + normal[1] * a * HALF_WIDTH + jitter() - BOX.h / 2,
        b * HALF_DEPTH + jitter(),
        2.5 + rand() * 4.5, // joint size
      ]);
    });
  });
  for (let i = 0; i < points.length; i++) {
    for (let k = 0; k < 4; k++) {
      const v = start + i * 4 + k;
      const next = start + i * 4 + ((k + 1) % 4);
      edges.push([v, next]);
      if (i + 1 < points.length) {
        edges.push([v, v + 4]);
        if ((i + k) % 2 === 0) edges.push([v, next + 4]);
      }
    }
  }
}

function build() {
  const rand = random(20191);
  const vertices = [];
  const edges = [];
  const lines = [centreLine(LEFT, false), centreLine(LEFT, true)];
  lines.forEach((points) => brace(points, rand, vertices, edges));
  // Loose particles near the tubes, most around the ends and the points.
  const particles = [];
  const all = lines.flat();
  for (let i = 0; i < 150; i++) {
    const [x, y] = all[Math.floor(rand() * all.length)];
    const spread = 30 + rand() * 45;
    particles.push({
      x: x - BOX.w / 2 + (rand() - 0.5) * spread * 2,
      y: y - BOX.h / 2 + (rand() - 0.5) * spread * 2,
      z: (rand() - 0.5) * 120,
      r: 1 + rand() * 3.5,
      phase: rand() * Math.PI * 2,
    });
  }
  return { vertices, edges, particles };
}

const MAX_TILT = 0.35; // radians, about 20 degrees

export function start(canvas) {
  const { vertices, edges, particles } = build();
  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let scale = 1;
  let frame = 0;
  let running = false;
  let tilt = { x: 0, y: 0 };
  let target = { x: 0, y: 0 };
  const started = performance.now();

  const resize = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = canvas.clientWidth;
    height = canvas.clientHeight;
    canvas.width = Math.round(width * dpr);
    canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    // The canvas is 124% of the picture's box (HeroBrackets.jsx); draw at the picture's size.
    scale = (Math.min(width / BOX.w, height / BOX.h) / 1.24) * 0.98;
  };

  const project = (x, y, z, sinY, cosY, sinX, cosX) => {
    const x1 = x * cosY + z * sinY;
    const z1 = -x * sinY + z * cosY;
    const y1 = y * cosX - z1 * sinX;
    const z2 = y * sinX + z1 * cosX;
    const p = 900 / (900 - z2);
    return [width / 2 + x1 * p * scale, height / 2 + y1 * p * scale, z2];
  };

  const draw = (now) => {
    const t = (now - started) / 1000;
    tilt.x += (target.x - tilt.x) * 0.06;
    tilt.y += (target.y - tilt.y) * 0.06;
    const rotY = Math.sin(t * 0.35) * 0.3 + tilt.y;
    const rotX = Math.sin(t * 0.23) * 0.08 + tilt.x;
    const [sinY, cosY, sinX, cosX] = [Math.sin(rotY), Math.cos(rotY), Math.sin(rotX), Math.cos(rotX)];
    const points = vertices.map(([x, y, z]) => project(x, y, z, sinY, cosY, sinX, cosX));
    const depth = (z) => Math.max(0.25, Math.min(1, 0.6 + z / 160));

    ctx.clearRect(0, 0, width, height);
    ctx.lineCap = "round";
    // A soft glow under the lines, then the lines, then the joints.
    for (const [glow, widthPx] of [
      [true, 9],
      [false, 3],
    ]) {
      ctx.lineWidth = widthPx;
      for (const [a, b] of edges) {
        const pa = points[a];
        const pb = points[b];
        const d = depth((pa[2] + pb[2]) / 2);
        ctx.strokeStyle = glow ? `rgba(253, 110, 60, ${0.2 * d})` : `rgba(255, 172, 138, ${0.95 * d})`;
        ctx.beginPath();
        ctx.moveTo(pa[0], pa[1]);
        ctx.lineTo(pb[0], pb[1]);
        ctx.stroke();
      }
    }
    vertices.forEach(([, , , r], i) => {
      const [x, y, z] = points[i];
      ctx.fillStyle = `rgba(240, 92, 40, ${depth(z)})`;
      ctx.beginPath();
      ctx.arc(x, y, r * scale * 1.6, 0, Math.PI * 2);
      ctx.fill();
    });
    particles.forEach((p) => {
      const [x, y, z] = project(p.x, p.y + Math.sin(t * 0.6 + p.phase) * 6, p.z, sinY, cosY, sinX, cosX);
      ctx.fillStyle = `rgba(253, 110, 60, ${0.75 * depth(z)})`;
      ctx.beginPath();
      ctx.arc(x, y, p.r * scale * 1.4, 0, Math.PI * 2);
      ctx.fill();
    });
    if (running) frame = requestAnimationFrame(draw);
  };

  // Tilt toward the cursor, measured from the brackets' centre.
  const onPointer = (e) => {
    const rect = canvas.getBoundingClientRect();
    const dx = (e.clientX - (rect.left + rect.width / 2)) / window.innerWidth;
    const dy = (e.clientY - (rect.top + rect.height / 2)) / window.innerHeight;
    target = { x: Math.max(-1, Math.min(1, -dy * 2)) * MAX_TILT, y: Math.max(-1, Math.min(1, dx * 2)) * MAX_TILT };
  };
  const onLeave = () => (target = { x: 0, y: 0 });

  const play = () => {
    if (running) return;
    running = true;
    frame = requestAnimationFrame(draw);
  };
  const pause = () => {
    running = false;
    cancelAnimationFrame(frame);
  };

  // Only animate while the brackets are on screen and the tab is visible.
  let onScreen = true;
  const sync = () => (onScreen && !document.hidden ? play() : pause());
  const observer = new IntersectionObserver(([entry]) => {
    onScreen = entry.isIntersecting;
    sync();
  });
  observer.observe(canvas);
  document.addEventListener("visibilitychange", sync);
  window.addEventListener("pointermove", onPointer, { passive: true });
  document.documentElement.addEventListener("pointerleave", onLeave);
  window.addEventListener("resize", resize);
  resize();
  draw(performance.now());
  sync();

  return () => {
    pause();
    observer.disconnect();
    document.removeEventListener("visibilitychange", sync);
    window.removeEventListener("pointermove", onPointer);
    document.documentElement.removeEventListener("pointerleave", onLeave);
    window.removeEventListener("resize", resize);
  };
}
