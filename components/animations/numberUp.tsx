"use client";

import { motion, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function NumberUp({
  start = 0,
  end,
  duration = 1000,
  useref,
}: {
  start?: number;
  end: number;
  duration?: number;
  useref: boolean;
}) {
  if (!useref) return;
  const [displayValue, setDisplayValue] = useState(start);
  const springValue = useSpring(start, {
    duration,
    bounce: 0,
  });

  springValue.on("change", (value) => {
    setDisplayValue(Math.round(value));
  });
  useEffect(() => {
    springValue.set(end);
  }, []);

  return <span>{displayValue}</span>;
}
