// src/components/Button/ButtonIcon.jsx
import React from "react";

export default function ButtonIcon({
  showIcon,
  element,
  src,
  hoverOnly,
  animateIcon,
  position,
  iconCustomClass = ""
}) {
  if (!showIcon) return null;

  let containerClasses = "";
  if (hoverOnly) {
    containerClasses = animateIcon
      ? position === "right"
        ? "hidden transform -translate-x-4 transition-all duration-300 ease-in-out group-hover:inline-flex group-hover:ml-2 group-hover:translate-x-0"
        : "hidden transform translate-x-4 transition-all duration-300 ease-in-out group-hover:inline-flex group-hover:mr-2 group-hover:translate-x-0"
      : position === "right"
      ? "hidden transition-all duration-300 ease-in-out group-hover:inline-flex group-hover:ml-2"
      : "hidden transition-all duration-300 ease-in-out group-hover:inline-flex group-hover:mr-2";
  } else {
    containerClasses = position === "right" ? "ml-2 inline-flex" : "inline-flex";
  }

  // Base icon classes - apply iconCustomClass to the actual icon
  const iconClasses = `h-4 w-auto ${iconCustomClass}`.trim();

  // Inline element override
  if (element) {
    const CustomIcon = typeof element === "function" ? element : () => element;
    return (
      <span className={containerClasses}>
        <CustomIcon className={iconClasses} />
      </span>
    );
  }

  // Explicit src override (static fallback)
  if (src) {
    return (
      <span className={containerClasses}>
        <img src={src} alt="" className={iconClasses} loading="lazy" />
      </span>
    );
  }

  // Neither supplied
  return null;
}