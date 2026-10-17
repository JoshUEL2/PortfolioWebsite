import { PROJECTS, CATEGORIES } from './portfolioData';

const CATEGORY_LABEL_MAP = Object.fromEntries(
  CATEGORIES.map((c) => [c.id, c.label])
);

export const ALL_PROJECTS = PROJECTS.map((proj) => ({
  ...proj,
  role: proj.discipline || 'Solo Developer',
  categoryLabel: CATEGORY_LABEL_MAP[proj.category] || proj.discipline || 'Game Development'
}));

export const GAME_FILTER_DISCIPLINES = [
  { id: 'all', label: `All ${ALL_PROJECTS.length} Projects`, count: ALL_PROJECTS.length },
  {
    id: 'gameplay',
    label: 'Gameplay & Systems',
    count: ALL_PROJECTS.filter((p) => p.category === 'gameplay').length
  },
  {
    id: 'vr-physics',
    label: 'VR & Physics',
    count: ALL_PROJECTS.filter((p) => p.category === 'vr-physics').length
  },
  {
    id: 'shaders-art',
    label: 'Shaders & Tech Art',
    count: ALL_PROJECTS.filter((p) => p.category === 'shaders-art').length
  },
  {
    id: 'level-design',
    label: 'Level Design',
    count: ALL_PROJECTS.filter((p) => p.category === 'level-design').length
  },
  {
    id: 'narrative',
    label: 'Narrative & Scripts',
    count: ALL_PROJECTS.filter((p) => p.category === 'narrative').length
  },
  {
    id: 'marketing',
    label: 'Interactive Companion Websites',
    count: ALL_PROJECTS.filter((p) => Boolean(p.marketingSite)).length
  },
  {
    id: 'playable',
    label: 'Playable Builds & Demos',
    count: ALL_PROJECTS.filter((p) => Boolean(p.links?.itch || p.links?.demo)).length
  }
];
