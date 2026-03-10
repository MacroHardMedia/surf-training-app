// ==================== LEGS EXERCISES ====================

export const legsLibrary = {
  squats: {
    id: "squats",
    name: "Squats",
    description: "Fundamental lower body exercise for legs and glutes.",
    equipment: null,
    steps: [
      "Stand with feet shoulder-width apart, toes slightly out",
      "Keep your chest up and core engaged",
      "Lower your hips back and down as if sitting in a chair",
      "Go as low as comfortable while maintaining good form",
      "Push through your heels to return to standing",
    ],
    category: "legs",
    muscleGroups: ["quads", "glutes", "hamstrings"],
    difficulty: "beginner",
    videoUrl: null,
  },

  "cossack-squat": {
    id: "cossack-squat",
    name: "Cossack Squat",
    description:
      "Lateral squat variation that improves hip mobility and posterior-chain strength.",
    equipment: "Bodyweight or kettlebell",
    steps: [
      "Stand with feet wide apart.",
      "Shift weight to one side and lower into a lateral squat.",
      "Keep opposite leg straight with toes up.",
      "Stay tall through the chest.",
      "Drive back to center and switch sides.",
    ],
    category: "strength",
    muscleGroups: ["glutes", "adductors", "hamstrings", "hips"],
    difficulty: "intermediate",
    videoUrl: null,
  },

  "box-single-leg-step-up": {
    id: "box-single-leg-step-up",
    name: "Box Single-Leg Step-Up",
    description:
      "Unilateral lower-body exercise that builds leg strength, hip stability, and balance for improved stance control and pop-up drive.",
    equipment:
      "Box or sturdy elevated surface (optional dumbbells or kettlebells)",
    steps: [
      "Stand facing a box or elevated surface.",
      "Place one foot fully on top of the box.",
      "Keep your chest tall and core braced.",
      "Drive through the heel of the front foot to stand up.",
      "Avoid pushing off excessively with the back foot.",
      "Control the descent back to the starting position.",
      "Maintain knee alignment over toes throughout the movement.",
      "Complete reps on one side before switching.",
    ],
    category: "strength",
    muscleGroups: ["glutes", "quads", "hamstrings", "balance", "core"],
    difficulty: "beginner",
    videoUrl: null,
  },
};
