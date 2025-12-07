import {
  FaGlobe,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaPinterestP,
  FaMediumM,
} from 'react-icons/fa';
import SocialLink from './components/SocialLink';

import logoNav from './assets/logo.png';
import BackgroundParticles from './components/BackgroundParticles';

function App() {
  const socialLinks = [
    {
      platform: 'Website',
      url: 'https://www.axivers.com',
      icon: <FaGlobe />,
    },
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/hello-axis-313455391/',
      icon: <FaLinkedinIn />,
    },
    {
      platform: 'Facebook',
      url: 'https://www.facebook.com/share/1FmzyuwpFe/',
      icon: <FaFacebookF />,
    },
    {
      platform: 'Instagram',
      url: 'https://www.instagram.com/axivers.tech/?utm_source=ig_web_button_share_sheet',
      icon: <FaInstagram />,
    },
    {
      platform: 'Pinterest',
      url: 'https://pin.it/1eFF03n2r',
      icon: <FaPinterestP />,
    },
    {
      platform: 'Medium',
      url: 'https://medium.com/@axivers',
      icon: <FaMediumM />,
    },
  ];

  return (
    <div className="h-screen flex flex-col items-center justify-center px-4 py-6 font-body selection:bg-orange-500/30 selection:text-orange-200 relative overflow-hidden">
      <BackgroundParticles />

      {/* Main Content Container - Centered */}
      <div className="w-full max-w-sm mx-auto relative z-10 flex flex-col items-center justify-center">
        {/* Header */}
        <header className="flex flex-col items-center mb-12 text-center animate-fade-in-down w-full">
          {/* Logo & Name */}
          <div className="mb-2 flex items-center justify-center gap-3">
            <img src={logoNav} alt="Axivers Logo" className="h-10 w-auto" />
            <h1 className="text-4xl font-display font-medium tracking-tight text-white pb-1">
              axivers
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-gray-200 font-medium tracking-[0.2em] uppercase text-xs">
            Innovate with Intension
          </p>
        </header>

        {/* Social Link Buttons */}
        <main className="w-full grid grid-cols-2 gap-3 max-w-md px-2 pb-10 mx-auto animate-fade-in-up">
          {socialLinks.map((link) => (
            <SocialLink
              key={link.platform}
              platform={link.platform}
              url={link.url}
              icon={link.icon}
            />
          ))}
        </main>

        {/* Footer */}
        <footer className="mt-6 text-center animate-fade-in relative z-10 mb-20">
          <p className="text-xs text-gray-400 font-medium opacity-80">
            &copy; 2025 Axivers. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
