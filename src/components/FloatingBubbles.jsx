import React, { useEffect, useRef } from "react";

export default function FloatingBubbles({
  count = 12,
  baseColor = "rgba(173, 216, 230, 0.45)", // default: light blue
  gradientFrom = "#d5eaff",
  gradientTo = "#ffffff",
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // clear any previous bubbles (important for hot reload)
    container.innerHTML = "";

    for (let i = 0; i < count; i++) {
      const bubble = document.createElement("div");
      bubble.className = "bubble";
      bubble.style.left = Math.random() * 100 + "%";
      bubble.style.top = Math.random() * 100 + "%";

      const size = 20 + Math.random() * 80;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.background = baseColor;
      bubble.style.animationDelay = `${Math.random() * 5}s`;

      container.appendChild(bubble);
    }
  }, [count, baseColor]);

  return (
    <div
      ref={containerRef}
      className="floating-bubbles absolute inset-0 overflow-hidden rounded-3xl"
      style={{
        background: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})`,
      }}
    />
  );
}
