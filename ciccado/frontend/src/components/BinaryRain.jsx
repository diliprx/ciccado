import { useBinaryRain } from "../hooks/useBinaryRain";

export const BinaryRain = () => {
  const drops = useBinaryRain();

  return (
    <div className="fixed inset-0 opacity-20 pointer-events-none overflow-hidden">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute font-mono text-red-500"
          style={{
            left: `${drop.x}px`,
            top: `${drop.y}px`,
            fontSize: "14px",
            lineHeight: "20px",
            textShadow: "0 0 5px rgba(239, 68, 68, 0.5)",
          }}
        >
          {drop.chars.map((char, i) => (
            <div key={i} style={{ opacity: Math.max(0, 1 - i * 0.05) }}>
              {char}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};