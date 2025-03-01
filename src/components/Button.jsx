import clsx from "clsx";
import './GlitchButton.css'; // Make sure this file is correctly imported

const Button = ({ id, title, rightIcon, leftIcon, containerClass }) => {
  return (
      <button
          id={id}
          className={clsx(
              "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-gradient-to-tl from-violet-800 to-white px-7 py-3 text-black transition-transform duration-300 hover:scale-110 border-2 border-purple-950 glitch-button",  // 👈 Add 'glitch-button' here
              containerClass
          )}
      >
        {leftIcon}

        <span className="relative inline-flex font-general text-xs uppercase">
          <span className="relative z-10 transition-opacity duration-300 group-hover:opacity-0">
            {title}
          </span>

          {/* Glitch Layer - Red offset */}
          <span className="absolute left-0 top-0 w-full text-red-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:-translate-x-[2px] group-hover:-translate-y-[2px]">
            {title}
          </span>

          {/* Glitch Layer - Blue offset */}
          <span className="absolute left-0 top-0 w-full text-blue-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:translate-x-[2px] group-hover:translate-y-[2px]">
            {title}
          </span>

          {/* Optional Flicker Layer */}
          <span className="absolute left-0 top-0 w-full text-white opacity-0 transition-opacity duration-150 group-hover:opacity-100 group-hover:animate-pulse">
            {title}
          </span>
        </span>

        {rightIcon}
      </button>
  );
};

export default Button;
