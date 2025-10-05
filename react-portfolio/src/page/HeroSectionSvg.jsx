import { useState, useEffect } from "react";

const gradients = [
  // 1️⃣ Purple → Pink → Orange
  [
    { offset: 0, color: "#8e2de2" },
    { offset: 0.5, color: "#4a00e0" },
    { offset: 1, color: "#ff416c", opacity: 0.5 },
  ],
  // 2️⃣ Ocean Blue → Cyan
  [
    { offset: 0, color: "#1595B6" },
    { offset: 1, color: "#1595B6", opacity: 0.5 },
  ],
  // 3️⃣ Sunset Orange → Pink
  [
    { offset: 0, color: "#ff512f" },
    { offset: 1, color: "#f09819", opacity: 0.5 },
  ],
  // 4️⃣ Neon Green → Cyan
  [
    { offset: 0, color: "#00ffbc" },
    { offset: 1, color: "#00d2ff", opacity: 0.5 },
  ],
  // 5️⃣ Gold Glow
  [
    { offset: 0, color: "#ffd700" },
    { offset: 1, color: "#ffd700", opacity: 0.5 },
  ],
  // 6️⃣ Soft Pink → Purple
  [
    { offset: 0, color: "#ff9a9e" },
    { offset: 1, color: "#fad0c4", opacity: 0.5 },
  ],
  // 7️⃣ Aqua → Blue
  [
    { offset: 0, color: "#43cea2" },
    { offset: 1, color: "#185a9d", opacity: 0.5 },
  ],
  // 8️⃣ Warm Sunset
  [
    { offset: 0, color: "#f7971e" },
    { offset: 1, color: "#ffd200", opacity: 0.5 },
  ],
  // 9️⃣ Red → Orange
  [
    { offset: 0, color: "#ff4b1f" },
    { offset: 1, color: "#ff9068", opacity: 0.5 },
  ],
  // 🔟 Electric Blue → Magenta
  [
    { offset: 0, color: "#396afc" },
    { offset: 1, color: "#2948ff", opacity: 0.5 },
  ],
];

export default function HeroSectionSvg() {
  const [currentGradient, setCurrentGradient] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGradient((prev) => (prev + 1) % gradients.length);
    }, 2000); // every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 406 368"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M314.899 203.5L314.899 349.43L162.5 209.053M314.899 203.5L283.037 203.586M314.899 203.5L337.881 203.586L381 171.109L314.899 171.109M162.5 209.053L118.044 170.96L157.5 171.109M162.5 209.053L65.5 301.465L20.5595 301.465L137.482 189.156M200.5 171.109L283.037 96.5L283.037 171.109M200.5 171.109L283.037 171.109M200.5 171.109L157.5 171.109M283.037 203.586L210.846 203.123L283.037 271.086L283.037 203.586ZM283.037 171.109L314.899 171.109M157.5 171.109L316.135 20.4322L314.899 171.109"
        stroke="url(#paint0_linear)"
        strokeWidth="10"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="205.549"
          y1="20.0169"
          x2="204.338"
          y2="342.461"
          gradientUnits="userSpaceOnUse"
        >
          {gradients[currentGradient].map((stop, i) => (
            <stop
              key={i}
              offset={stop.offset}
              stopColor={stop.color}
              stopOpacity={stop.opacity ?? 1}
            />
          ))}
        </linearGradient>
      </defs>
    </svg>
  );
}
