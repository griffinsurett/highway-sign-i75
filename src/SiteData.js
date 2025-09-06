// src/SiteData.js - Compatible with both Astro and React
const siteDomain = import.meta.env.PUBLIC_SITE_DOMAIN;
import Logo from "@/assets/i75logo.webp";

export const course = "CPA";

export const SiteData = {
  title: `i75 ${course} Review`,
  legalName: `i75 ${course} Review LLC`,
  Logo: Logo,
  tagline:
    "Get On i-75 with Darius Clark, because The Right Teacher Makes All The Difference!",
  description:
    `Welcome to i75 ${course} Review, your clear and direct road to passing the ${course} exam. Led by Darius Clark, our course is designed to simplify complex topics and offer focused, practical insights that help you efficiently prepare for success. Whether you've struggled with other courses or are just starting your ${course} journey, i75 ${course} Review is here to guide you every step of the way.`,
    mainCTAText: `Get On The Right Road To ${course}!`,
    mainCTAurl: "/",
  domain: siteDomain,
  url: `https://${siteDomain}`,
};

// Contact items using Font Awesome solid icons
export const contactItems = [
  {
    type: "email",
    label: "darius@i75courses.com",
    href: "mailto:darius@i75courses.com",
    icon: "fa6-solid:envelope",
  },
  {
    type: "phone",
    label: "(904) 800-7751",
    href: "tel:904-800-7751",
    icon: "fa6-solid:phone",
  },
  {
    type: "location",
    label: "Monmouth County, NJ",
    href: null,
    icon: "fa6-solid:map-pin",
  },
];

// Social media links using Font Awesome brands icons
export const socialMediaLinks = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/darius.clark.54",
    icon: "fa6-brands:facebook",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/i75/",
    icon: "fa6-brands:linkedin",
  },
  {
    name: "Youtube",
    href: "https://www.youtube.com/c/DariusClarkcpaexamtutoring",
    icon: "fa6-brands:youtube",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/i75cpareview/",
    icon: "fa6-brands:instagram",
  },
];
