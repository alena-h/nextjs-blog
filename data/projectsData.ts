import { Helios } from "../components/Helios";
import { LittleLemon } from "../components/LittleLemon";

export const SkillIcons = {
  CSS3: "css3_mbaxl2",
  HTML5: "html5_phmgkk",
  React: "react_yt0b62",
  JavaScript: "javascript_ymdldl",
  TypeScript: "typescript_rwqkdf",
  StyledComponents: "styled_components_andjsj",
  Tailwind: "tailwind_klvehs",
  Git: "git_ntw9hq",
  NPM: "npm_yszd9u",
  Storybook: "storybook_uqpdxl",
  Jest: "jest_cdhg7t",
  Figma: "figma_eblnzf",
  Photoshop: "photoshop_tsgxnn",
  Illustrator: "illustrator_u5dhzl",
  Next: "next_u46a92",
  Lightroom: "lr_knw86y",
  Thunkable: "thunkable_ouk45h",
  ClipStudioPaint: "csp_rvu339",
  GoogleForms: "forms_wcdx3j",
  Three: "threejs_uryxqy",
  GSAP: "gsap_vimjy9",
};

export const frontendProjects = [
  {
    title: "Helios",
    thumbnail: "frontend1_ipf3gd",
    technologies: [
      SkillIcons.HTML5,
      SkillIcons.CSS3,
      SkillIcons.Next,
      SkillIcons.TypeScript,
      SkillIcons.StyledComponents,
      SkillIcons.Storybook,
      SkillIcons.Jest,
      SkillIcons.Git,
    ],
    component: Helios,
  },
  {
    title: "Little Lemon",
    thumbnail: "frontend2_ccprdu",
    technologies: [
      SkillIcons.HTML5,
      SkillIcons.CSS3,
      SkillIcons.React,
      SkillIcons.JavaScript,
      SkillIcons.StyledComponents,
    ],
    component: LittleLemon,
  },
  {
    title: "My Portfolio",
    thumbnail: "",
    technologies: [
      SkillIcons.HTML5,
      SkillIcons.CSS3,
      SkillIcons.Next,
      SkillIcons.TypeScript,
      SkillIcons.Tailwind,
      SkillIcons.Git,
    ],
    component: null,
  },
  {
    title: "Project 4",
    thumbnail: "",
    technologies: [
      SkillIcons.JavaScript,
      SkillIcons.Figma,
      SkillIcons.Photoshop,
    ],
    component: null,
  },
];
export const uxProjects = [
  {
    title: "DogGo - App",
    thumbnail: "ux1_kgbrxh",
    technologies: [
      SkillIcons.Figma,
      SkillIcons.Illustrator,
      SkillIcons.Thunkable,
      SkillIcons.GoogleForms,
    ],
    component: null,
  },
  {
    title: "Druida - Dashboard",
    thumbnail: "ux2_kmc0y5",
    technologies: [SkillIcons.Figma],
    component: null,
  },
];

export const otherProjects = [
  {
    title: "Illustration",
    thumbnail: "art1_qx6nqh",
    technologies: [
      SkillIcons.Illustrator,
      SkillIcons.ClipStudioPaint,
      SkillIcons.Photoshop,
    ],
    component: null,
  },
  {
    title: "Photography",
    thumbnail: "photo1_kfl4yn",
    technologies: [SkillIcons.Photoshop, SkillIcons.Lightroom],
    component: null,
  },
];

export const experiences = [
  {
    date: "2024 Jan – present",
    title: "Junior Frontend Developer at Helios",
    link: "https://www.helios.sc/",
    description:
      "Successfully contributed to migrating a Vue.js project to React.js with Next.js, crafting efficient, reusable components using Styled Components and TypeScript. Played an active role in feature development, UX enhancements, and UI/UX design. Also maintained a streamlined component library in Storybook for efficient development and testing.",
  },
  {
    date: "2021 Jul – present",
    title: "Freelance Illustrator",
    link: "https://www.instagram.com/yunique.pawtrait/",
    description:
      "This is my creative outlet and a hobby that evolved into a side project. I primarily create pet portraits but also enjoy experimenting with different mediums and subjects.",
  },
  {
    date: "2019 - 2022",
    title:
      "Freelance Nutritionist at various wellness clinics, online consultations, and a football sports club",
    link: "",
    description:
      "Managed clients and provided personalized nutrition plans. Conducted body composition measurements and progress tracking. Created email newsletters on nutrition and health.",
  },
  {
    date: "2018 Jan - 2018 Jul",
    title: "Intern at ISPUP (Institute of Public Health University of Porto)",
    link: "https://ispup.up.pt/",
    description:
      "Conducted health interviews and collected data for epidemiological research. Cleaned and organized data.",
  },
  {
    date: "2017 Mar - 2017 Jul",
    title: "Intern at ITAU (food catering company)",
    link: "https://www.itau.pt/",
    description:
      "Menu Planing, internal audit for food quality and safety. Bachelor's thesis project on food waste and organization of an awareness campaign on the topic in a hospital unit.",
  },
];
