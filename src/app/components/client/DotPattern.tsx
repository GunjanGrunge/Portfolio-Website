"use client";

import { cn } from "../../../lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useId, useRef, useState } from "react";

interface DotPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  cx?: number;
  cy?: number;
  cr?: number;
  className?: string;
  glow?: boolean;
  [key: string]: unknown;
}

export function DotPattern() {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full">
      <div
        className="absolute h-full w-full bg-blend-overlay"
        style={{
          backgroundImage: 'url("/images/halftone-bg.png")',
          backgroundSize: '100% auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'repeat',
          opacity: 0.2,
          mixBlendMode: 'multiply'
        }}
      />
    </div>
  );
}
