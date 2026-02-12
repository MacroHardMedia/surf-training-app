export const muscleGroups = {
  // Upper Body
  chest: {
    id: "chest",
    name: "Chest",
    region: "upper-body",
    icon: "💪",
  },
  shoulders: {
    id: "shoulders",
    name: "Shoulders",
    region: "upper-body",
    icon: "💪",
  },
  back: {
    id: "back",
    name: "Back",
    region: "upper-body",
    icon: "💪",
  },
  biceps: {
    id: "biceps",
    name: "Biceps",
    region: "upper-body",
    icon: "💪",
  },
  triceps: {
    id: "triceps",
    name: "Triceps",
    region: "upper-body",
    icon: "💪",
  },
  forearms: {
    id: "forearms",
    name: "Forearms",
    region: "upper-body",
    icon: "💪",
  },

  // Core
  abs: {
    id: "abs",
    name: "Abs",
    region: "core",
    icon: "💎",
  },
  core: {
    id: "core",
    name: "Core",
    region: "core",
    icon: "💎",
  },
  obliques: {
    id: "obliques",
    name: "Obliques",
    region: "core",
    icon: "💎",
  },

  // Lower Body
  quads: {
    id: "quads",
    name: "Quadriceps",
    region: "lower-body",
    icon: "🦵",
  },
  hamstrings: {
    id: "hamstrings",
    name: "Hamstrings",
    region: "lower-body",
    icon: "🦵",
  },
  glutes: {
    id: "glutes",
    name: "Glutes",
    region: "lower-body",
    icon: "🦵",
  },
  calves: {
    id: "calves",
    name: "Calves",
    region: "lower-body",
    icon: "🦵",
  },
  hips: {
    id: "hips",
    name: "Hips",
    region: "lower-body",
    icon: "🦵",
  },

  // Full Body
  "full-body": {
    id: "full-body",
    name: "Full Body",
    region: "full-body",
    icon: "🔥",
  },
};

// Get muscle groups by region
export const getMuscleGroupsByRegion = (region) => {
  return Object.values(muscleGroups).filter((group) => group.region === region);
};

// Get all regions
export const getRegions = () => {
  return [...new Set(Object.values(muscleGroups).map((group) => group.region))];
};

// Get muscle group by ID
export const getMuscleGroupById = (id) => muscleGroups[id];

// Get muscle group name
export const getMuscleGroupName = (id) => muscleGroups[id]?.name || id;
