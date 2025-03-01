import { FaDiscord, FaTwitter } from "react-icons/fa";

const socialLinks = [
  { href: "https://discord.com", icon: <FaDiscord /> },
  { href: "https://x.com/Raidox_Games", icon: <FaTwitter /> },
];

const Footer = () => {
  return (
      <footer className="w-screen bg-gradient-to-br from-violet-950 to-black py-4 text-white">
        <div className="container  flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
          <p className="text-center text-sm  md:text-left font-light">
            ©Raidox 2024. All rights reserved
          </p>

          <div className="absolute right-5 flex justify-end gap-4 pr-3">
            {socialLinks.map((link, index) => (
                <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white transition-transform hover:scale-150 duration-300 "
                >
                  {link.icon}
                </a>
            ))}
          </div>


        </div>
      </footer>
  );
};

export default Footer;