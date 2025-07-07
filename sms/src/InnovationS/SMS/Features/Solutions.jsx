import React, { useState, useRef, useMemo } from "react";
import { motion } from "framer-motion";

/* —————————————————————————————————————————— */
/*  Helper functions for the donut chart      */
/* —————————————————————————————————————————— */
const degToRad = (deg) => (Math.PI * deg) / 180;
const polarToCartesian = (cx, cy, r, angleDeg) => {
  const angleRad = degToRad(angleDeg);
  return { x: cx + r * Math.cos(angleRad), y: cy + r * Math.sin(angleRad) };
};
const describeArc = (cx, cy, rOuter, rInner, startDeg, endDeg) => {
  const outerStart = polarToCartesian(cx, cy, rOuter, endDeg);
  const outerEnd = polarToCartesian(cx, cy, rOuter, startDeg);
  const innerStart = polarToCartesian(cx, cy, rInner, startDeg);
  const innerEnd = polarToCartesian(cx, cy, rInner, endDeg);
  const largeArc = endDeg - startDeg <= 180 ? 0 : 1;

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${rOuter} ${rOuter} 0 ${largeArc} 0 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerStart.x} ${innerStart.y}`,
    `A ${rInner} ${rInner} 0 ${largeArc} 1 ${innerEnd.x} ${innerEnd.y}`,
    "Z",
  ].join(" ");
};

/* —————————————————————————————————————————— */
/*  Main component                            */
/* —————————————————————————————————————————— */
function Solutions({
  size = 260,
  innerRadiusRatio = 0.55,
  gapDeg = 2,
  hoverScale = 1.06,
  segments = [
    {
      label: "Seamless student enrollment",
      value: 1,
      color: "#c62828",
      description:
        "Easily admit students with automated verification and centralized data entry.",
    },
    {
      label: "Real-time attendance tracking",
      value: 1,
      color: "#283593",
      description:
        "Monitor and update attendance live from classrooms or mobile devices.",
    },
    {
      label: "Automated fee management",
      value: 1,
      color: "#1565c0",
      description:
        "Collect, track, and manage student fees with reminders and payment logs.",
    },
    {
      label: "Grade and performance reporting",
      value: 1,
      color: "#2e7d32",
      description:
        "Generate dynamic report cards and analytics on academic progress.",
    },
    {
      label: "Personalized dashboards for each user",
      value: 1,
      color: "#f9a825",
      description:
        "Each role gets a customized dashboard tailored to their specific needs.",
    },
    {
      label: "Teachers with easy academic tools",
      value: 1,
      color: "#ef6c00",
      description:
        "Help teachers manage assessments, feedback, and class records effortlessly.",
    },
  ],
}) {
  /* ——— state & refs ——— */
  const [tooltip, setTooltip] = useState({ show: false });
  const svgRef = useRef(null);

  /* ——— build arc paths ——— */
  const paths = useMemo(() => {
    const total = segments.reduce((t, s) => t + s.value, 0);
    const outer = size / 2;
    const inner = outer * innerRadiusRatio;
    let cursor = -90; // start at top

    return segments.map((seg) => {
      const sliceDeg = (seg.value / total) * 360;
      const start = cursor + gapDeg / 2;
      const end = cursor + sliceDeg - gapDeg / 2;
      cursor += sliceDeg;

      return {
        ...seg,
        d: describeArc(outer, outer, outer, inner, start, end),
        percent: ((seg.value / total) * 100).toFixed(1),
      };
    });
  }, [segments, size, innerRadiusRatio, gapDeg]);

  /* ——— tooltip handlers ——— */
  const showTip = (seg, e) => {
    positionTip(seg, e);
  };
  const positionTip = (seg, e) => {
    const bounds = svgRef.current.getBoundingClientRect();
    const tooltipW = 260;
    const tooltipH = 120;
    const rawX = e.clientX - bounds.left;
    const rawY = e.clientY - bounds.top;
    const x =
      rawX + tooltipW + 20 > bounds.width ? rawX - tooltipW - 10 : rawX + 10;
    const y =
      rawY + tooltipH + 20 > bounds.height ? rawY - tooltipH - 10 : rawY + 10;
    setTooltip({
      show: true,
      label: seg.label,
      description: seg.description,
      x,
      y,
    });
  };
  const moveTip = (e) => tooltip.show && positionTip(tooltip, e);
  const hideTip = () => setTooltip({ show: false });

  /* ——— JSX ——— */
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-purple-50 to-indigo-100 py-20 px-6">
      {/* ---------------- Main flex row (text + chart) -------------- */}
      <div className="mx-auto flex max-w-7xl flex-col gap-10 lg:flex-row lg:items-center">
        {/* ① Text column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <h2 className="mb-4 text-4xl font-extrabold leading-tight text-indigo-600 sm:text-5xl">
            Student Management System
          </h2>
          <p className="mb-10 max-w-xl text-base leading-relaxed text-gray-700 sm:text-lg">
            Our advanced Student Management System is designed to automate,
            simplify, and intelligently enhance the way educational institutions
            operate. With AI‑driven features and a clean, user‑friendly
            interface, schools can now manage everything from admissions to
            analytics seamlessly.
          </p>

          {/* CTA anchored at the bottom of text */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            href="/request-demo"
            className="inline-block rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-3 text-lg font-semibold text-white shadow-lg transition-shadow hover:shadow-2xl"
          >
            Request a Demo
          </motion.a>
        </motion.div>

        {/* ② Donut chart */}
        <div className="relative mx-auto w-full max-w-[340px]">
          <h1 className="text-2xl font-bold text-center  text-indigo-700">
            Features
          </h1>
          <svg
            ref={svgRef}
            viewBox={`-20 -20 ${size + 40} ${size + 40}`}
            className="h-auto w-full"
          >
            {paths.map((seg, i) => (
              <path
                key={i}
                d={seg.d}
                fill={seg.color}
                onMouseEnter={(e) => showTip(seg, e)}
                onMouseMove={moveTip}
                onMouseLeave={hideTip}
                style={{
                  transformOrigin: "50% 50%",
                  transformBox: "fill-box",
                  transition: "transform 0.3s ease",
                }}
                className="cursor-pointer hover:[transform:scale(1.04)] mb-28"
              />
            ))}
          </svg>
          {/* center label */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <span className="mt-8 text-xl font-bold text-indigo-800">SMS</span>
          </div>
          {/* tooltip */}
          {tooltip.show && (
            <div
              className="pointer-events-none absolute z-50 w-64 rounded-xl border border-gray-200 bg-white/90 p-4 text-gray-900 shadow-2xl backdrop-blur-md"
              style={{ left: tooltip.x, top: tooltip.y }}
            >
              <p className="mb-1 text-lg font-semibold">{tooltip.label}</p>
              <p className="text-sm text-gray-600">{tooltip.description}</p>
            </div>
          )}
        </div>
      </div>

      {/* ------------------- Feature cards grid --------------------- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
        className="mx-auto mt-16 grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {segments.map((seg, idx) => (
          <div
            key={idx}
            className="group relative overflow-hidden rounded-3xl border border-indigo-100 bg-white/60 p-6 shadow-lg backdrop-blur-lg transition hover:-translate-y-1 hover:shadow-2xl"
          >
            {/* accent circle */}
            <span
              className="absolute -top-3 -left-3 h-12 w-12 rounded-full opacity-30"
              style={{ background: seg.color }}
            />
            <h3 className="relative z-10 mb-2 text-lg font-bold text-gray-800">
              {seg.label}
            </h3>
            <p className="relative z-10 text-sm text-gray-600">
              {seg.description}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}

export default Solutions;
