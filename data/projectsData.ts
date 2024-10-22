import { Helios } from "../components/Helios";
import { LittleLemon } from "../components/LittleLemon";
import { SkillIcons } from "../components/Skills";

export const frontendProjects = [
  {
    title: "Helios",
    thumbnail: "/frontend1.png",
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
    thumbnail: "/frontend2.png",
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
    thumbnail: "Description for Project 3",
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
    thumbnail: "Description for Project 4",
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
    thumbnail: "/ux1.png",
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
    thumbnail: "/ux2.png",
    technologies: [SkillIcons.Figma],
    component: null,
  },
];

export const otherProjects = [
  {
    title: "Illustration",
    thumbnail: "/art1.png",
    technologies: [
      SkillIcons.Illustrator,
      SkillIcons.ClipStudioPaint,
      SkillIcons.Photoshop,
    ],
    component: null,
  },
  {
    title: "Photography",
    thumbnail: "/photo1.png",
    technologies: [SkillIcons.Photoshop, SkillIcons.Lightroom],
    component: null,
  },
];
