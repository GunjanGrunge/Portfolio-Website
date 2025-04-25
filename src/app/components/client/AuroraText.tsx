'use client';

export function AuroraText({ text }: { text: string }) {
  return (
    <div className="relative">
      <div className="absolute -inset-x-20 -top-40 -bottom-40 overflow-hidden">
        <div className="aurora-blob" />
        <div className="aurora-blob animation-delay-1000" />
        <div className="aurora-blob animation-delay-2000" />
      </div>
      <h1 className="relative z-10 bg-gradient-to-b from-black to-neutral-600 bg-clip-text text-transparent">
        {text}
      </h1>
    </div>
  );
}
