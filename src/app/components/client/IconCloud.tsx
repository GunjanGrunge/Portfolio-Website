'use client';

interface IconCloudProps {
  images?: string[];
}

const defaultSlugs = [
  "typescript",
  "javascript",
  "python",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "mongodb",
  "docker",
  "kubernetes",
  "tensorflow"
];

export function IconCloud({ images }: IconCloudProps) {
  const icons = (images || defaultSlugs.map(slug => `https://cdn.simpleicons.org/${slug}`));

  return (
    <div className="relative flex min-h-[450px] items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative h-full w-full max-w-xl">
          {icons.map((icon, index) => {
            const angle = (360 / icons.length) * index;
            const radius = Math.random() * 100 + 100;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);
            
            return (
              <div
                key={index}
                className="absolute transition-transform duration-[2000ms] hover:scale-110"
                style={{
                  transform: `translate(${x}px, ${y}px) scale(${Math.random() * 0.3 + 0.7})`,
                  animation: `float ${Math.random() * 5 + 5}s infinite`,
                }}
              >
                <img 
                  src={icon} 
                  alt="" 
                  className="h-8 w-8"
                  style={{ filter: 'brightness(0.8)' }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
