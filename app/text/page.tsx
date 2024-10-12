"use client";
import { useSpring } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function Page({
  start,
  end,
  duration,
}: {
  start: number;
  end: number;
  duration: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);
  const springValue = useSpring(start, {
    bounce: 0,
    duration,
  });

  springValue.on("change", (value) => {
    setDisplayValue(Math.round(value));
  });

  useEffect(() => {
    springValue.set(end);
  }, []);
  return <div className="text-3xl font-bold">{displayValue}</div>;
}
