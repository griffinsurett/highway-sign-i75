// src/components/ButtonVariants.js
import StraightArrow from "@/assets/straight-arrow.png";

const baseButtonClasses =
  "inline-flex items-center justify-center transition-all duration-600 hover:pulseGlow cursor-pointer";

const buttonClasses = `${baseButtonClasses} rounded-xl px-6 lg:px-8 py-5 uppercase h4 font-bold`;

const mainButtonClasses = `${buttonClasses} border-2 border-primary bg-primary text-light-primary`;

export const ButtonVariants = {
  primary: {
    buttonClasses: `${buttonClasses} ${mainButtonClasses} hover:border-light-primary hover:bg-transparent`,
    iconDefaults: {
      src: StraightArrow.src,
      hoverOnly: true,
      position: "left",
      className: "w-4 h-6 transition-all duration-600 ease-in-out",
    },
  },
  secondary: {
    buttonClasses: `${buttonClasses} ${mainButtonClasses}`,
    iconDefaults: {
      src: StraightArrow.src,
      position: "left",
      className: "w-4 h-6 px-2 transition-all duration-600 ease-in-out",
    },
  },
  tertiary: {
    buttonClasses: `${buttonClasses} bg-light-primary text-primary hover:text-light-primary hover:bg-primary hover:border-primary`,
    iconDefaults: {
      src: StraightArrow.src,
      hoverOnly: true,
      position: "left",
      className: "w-4 h-6 px-2 transition-all duration-600 ease-in-out",
    },
  },
  borderWhite: {
    buttonClasses: `${buttonClasses} border-2 border-light-primary bg-transparent text-light-primary hover:text-light-primary hover:bg-transparent hover:border-light-primary`,
    iconDefaults: {
      src: StraightArrow.src,
      position: "left",
      className: "w-4 h-6 px-2 transition-all duration-600 ease-in-out",
    },
  },
  borderPrimary: {
    buttonClasses: `${buttonClasses} border-2 border-primary bg-transparent text-primary`,
  },
  underline: {
    buttonClasses: `${baseButtonClasses} underline text-base lg:text-xl text-center`,
  },
  link: {
    buttonClasses: `${baseButtonClasses}`,
  },
};
