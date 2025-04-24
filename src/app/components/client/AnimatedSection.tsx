'use client';

import { useEffect, useRef } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
}

export default function AnimatedSection({ children }: AnimatedSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate__animated', 'animate__fadeIn');
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="opacity-0">
      {children}
    </div>
  );
}