export const exerciseCategories = {
  mobility: {
    id: "mobility",
    name: "Mobility & Flexibility",
    description: "Exercises to improve joint mobility and flexibility",
    icon: "🤸",
  },
  push: {
    id: "push",
    name: "Push",
    description: "Pushing movements for chest, shoulders, and triceps",
    icon: "💪",
  },
  pull: {
    id: "pull",
    name: "Pull",
    description: "Pulling movements for back and biceps",
    icon: "🏋️",
  },
  legs: {
    id: "legs",
    name: "Legs",
    description: "Lower body exercises for legs and glutes",
    icon: "🦵",
  },
  core: {
    id: "core",
    name: "Core & Stability",
    description: "Core strengthening and stability exercises",
    icon: "💎",
  },
  cardio: {
    id: "cardio",
    name: "Cardiovascular",
    description: "Cardio and conditioning exercises",
    icon: "❤️",
  },
  plyometric: {
    id: "plyometric",
    name: "Plyometric & Power",
    description: "Explosive power and jump training",
    icon: "⚡",
  },
  "surf-specific": {
    id: "surf-specific",
    name: "Surf-Specific",
    description: "Exercises specifically for surf performance",
    icon: "🏄",
  },
  balance: {
    id: "balance",
    name: "Balance & Coordination",
    description: "Exercises for balance and coordination",
    icon: "🧘",
  },
};

// Get all category IDs
export const getCategoryIds = () => Object.keys(exerciseCategories);

// Get category by ID
export const getCategoryById = (id) => exerciseCategories[id];

// Get category name
export const getCategoryName = (id) => exerciseCategories[id]?.name || id;
