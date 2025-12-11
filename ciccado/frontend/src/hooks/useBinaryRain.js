import { useState, useEffect } from "react";

export const useBinaryRain = () => {
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    const numDrops = 40;
    const initialDrops = Array.from({ length: numDrops }, (_, i) => ({
      id: i,
      x: i * (window.innerWidth / numDrops),
      y: Math.random() * -500,
      speed: 2 + Math.random() * 3,
      chars: Array.from({ length: 20 }, () => (Math.random() > 0.5 ? "1" : "0")),
    }));
    setDrops(initialDrops);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDrops((prevDrops) =>
        prevDrops.map((drop) => {
          const newY = drop.y + drop.speed;
          return {
            ...drop,
            y: newY > window.innerHeight ? -100 : newY,
            chars: drop.chars.map(() => (Math.random() > 0.5 ? "1" : "0")),
          };
        })
      );
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return drops;
};