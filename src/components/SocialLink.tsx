import React, { useState, type MouseEvent, type ReactNode } from 'react';

interface SocialLinkProps {
  platform: string;
  url: string;
  icon: ReactNode;
}

interface Ripple {
  x: number;
  y: number;
  id: number;
}

const SocialLink: React.FC<SocialLinkProps> = ({ platform, url, icon }) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newRipple = { x, y, id: Date.now() };

    setRipples((prev) => [...prev, newRipple]);

    setTimeout(() => {
      setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
    }, 600); // Match animation duration
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="relative overflow-hidden group flex flex-col items-center justify-center w-full aspect-square p-6 bg-white border border-gray-100/50 rounded-2xl shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1"
      aria-label={`Visit our ${platform} page`}
    >
      {/* Ripple Container */}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          className="absolute rounded-full bg-primary/20 animate-ripple pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: 'translate(-50%, -50%)',
            width: '200%',
            paddingBottom: '200%',
          }}
        />
      ))}

      <div className="relative z-10 text-4xl text-primary mb-3 transition-colors duration-300 group-hover:text-primary/80">
        {icon}
      </div>
      <span className="relative z-10 text-base font-medium text-gray-900 transition-colors duration-300 group-hover:text-primary">
        {platform}
      </span>
    </a>
  );
};

export default SocialLink;
