import { Instagram, Twitter, Linkedin, Github } from 'lucide-react';

const Socials = () => {
  const socials = [
    {
      name: 'Instagram',
      icon: <Instagram size={20} />,
      href: 'https://instagram.com/vivek._02_',
      hoverColor: 'hover:text-pink-500',
    },
    {
      name: 'Twitter',
      icon: <Twitter size={20} />,
      href: 'https://x.com/Vivek__010',
      hoverColor: 'hover:text-blue-400',
    },
    {
      name: 'LinkedIn',
      icon: <Linkedin size={20} />,
      href: 'https://linkedin.com/in/vivek-jadhav-4b33b72a7',
      hoverColor: 'hover:text-[#0a66c2]',
    },
    {
      name: 'Github',
      icon: <Github size={20} />,
      href: 'https://github.com/vivek1504',
      hoverColor: 'hover:text-[#238636]',
    },
  ];

  return (
    <div className="flex space-x-3">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className={`w-12 h-12 cursor-none cursor-target flex items-center justify-center bg-[#1a1a1a] text-white transition-all duration-300 hover:scale-110 ${social.hoverColor}`}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
