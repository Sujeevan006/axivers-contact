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
    <div className="min-h-screen flex flex-col justify-between top-0 px-4 py-20 font-body selection:bg-orange-500/30 selection:text-orange-200 relative overflow-hidden">
      <BackgroundParticles />

      {/* Main Content Container - Centered */}
      <div className="grow flex flex-col items-center justify-center w-full max-w-sm mx-auto relative z-10">
        {/* Header */}
        <header className="flex flex-col items-center mb-10 text-center animate-fade-in-down w-full">
          {/* Logo & Name */}
          <div className="mb-2 flex items-center justify-center gap-4">
            <img src={logoNav} alt="Axivers Logo" className="h-10 w-auto" />
            <h1 className="text-5xl font-display font-medium tracking-tight text-white pb-2">
              axivers
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-gray-200 font-medium tracking-[0.2em] uppercase text-xs">
            Innovate with Intension
          </p>
        </header>

        {/* Social Link Buttons */}
        <main className="w-full grid grid-cols-2 gap-4 max-w-md p-4 mx-auto animate-fade-in-up">
          {socialLinks.map((link) => (
            <SocialLink
              key={link.platform}
              platform={link.platform}
              url={link.url}
              icon={link.icon}
            />
          ))}
        </main>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-center animate-fade-in relative z-10">
        <p className="text-sm text-gray-400 font-medium">
          &copy; 2025 Axivers. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default App;
