import React, { type ReactNode } from 'react';

interface SocialLinkProps {
  platform: string;
  url: string;
  icon: ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ platform, url, icon }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="relative overflow-hidden group flex flex-col items-center justify-center w-full aspect-square p-6 bg-white border border-gray-100/50 rounded-2xl shadow-sm hover:shadow-2xl hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1"
      aria-label={`Visit our ${platform} page`}
    >
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
