// ==================== CORE EXERCISES ====================

export const coreLibrary = {
  plank: {
    id: "plank",
    name: "Plank",
    description: "Isometric core exercise for overall stability.",
    equipment: null,
    steps: [
      "Start in a forearm plank position with elbows under shoulders",
      "Keep your body in a straight line from head to heels",
      "Engage your core and squeeze your glutes",
      "Avoid letting your hips sag or pike up",
      "Hold for the specified time while breathing steadily",
    ],
    category: "core",
    muscleGroups: ["abs", "core", "shoulders"],
    difficulty: "beginner",
    videoUrl: null,
  },

  "renegade-row": {
    id: "renegade-row",
    name: "Renegade Row",
    description:
      "Plank-based rowing movement that builds upper-back strength, anti-rotation core stability, and shoulder control.",
    equipment: "Dumbbells or kettlebells",
    steps: [
      "Start in a high plank position with hands gripping dumbbells or kettlebells.",
      "Place feet slightly wider than hip-width for stability.",
      "Brace your core and keep your spine neutral.",
      "Row one weight toward your hip while keeping your torso square.",
      "Avoid rotating or shifting your hips.",
      "Lower the weight under control.",
      "Alternate sides while maintaining plank tension throughout.",
    ],
    category: "core",
    muscleGroups: ["lats", "upper_back", "core", "shoulders", "anti_rotation"],
    difficulty: "intermediate",
    videoUrl: null,
  },

  "l-sit": {
    id: "l-sit",
    name: "L-Sit",
    description:
      "Isometric core and hip flexor hold that builds compression strength, shoulder stability, and total-body tension.",
    equipment: "Parallettes, dip bars, rings, or floor (advanced)",
    steps: [
      "Place your hands on parallettes, dip bars, or the floor beside your hips.",
      "Press down firmly through your hands and lift your body off the ground.",
      "Extend your legs straight out in front of you.",
      "Keep knees locked and toes pointed upward.",
      "Maintain a tall chest and avoid rounding excessively.",
      "Brace your core and hold the position steadily.",
      "Lower with control when finished.",
    ],
    category: "isometric",
    muscleGroups: [
      "core",
      "hip_flexors",
      "shoulders",
      "triceps",
      "compression",
    ],
    difficulty: "advanced",
    videoUrl: null,
  },
};
