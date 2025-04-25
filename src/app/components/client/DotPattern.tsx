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

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  glow = false,
  ...props
}: DotPatternProps) {
  return (
    <div className="absolute inset-0 -z-10 h-full w-full bg-white">
      <div
        className="absolute h-full w-full"
        style={{
          backgroundImage: `radial-gradient(#e5e7eb 1px, transparent 1px)`,
          backgroundSize: '16px 16px',
        }}
      />
    </div>
  );
}
