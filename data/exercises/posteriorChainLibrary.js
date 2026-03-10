// ==================== POSTERIOR CHAIN EXERCISES ====================

export const posteriorChainLibrary = {
  "kettlebell-swing": {
    id: "kettlebell-swing",
    name: "Kettlebell Swing",
    description:
      "Explosive hip hinge movement that builds posterior-chain power, conditioning, and strong hip extension.",
    equipment: "Kettlebell",
    steps: [
      "Stand with feet slightly wider than hip-width apart and the kettlebell in front of you.",
      "Hinge at the hips with a neutral spine and grip the kettlebell with both hands.",
      "Hike the kettlebell back between your legs to load your hips.",
      "Drive powerfully through your hips and extend tall.",
      "Allow the kettlebell to float to chest height from hip momentum.",
      "Keep arms relaxed and shoulders packed—do not lift with your arms.",
      "Let the kettlebell swing back between your legs and repeat smoothly.",
      "Maintain a neutral spine and avoid squatting the movement.",
    ],
    category: "power",
    muscleGroups: ["glutes", "hamstrings", "posterior_chain", "core", "grip"],
    difficulty: "intermediate",
    videoUrl: null,
  },

  "single-kettlebell-swing": {
    id: "single-kettlebell-swing",
    name: "Single Kettlebell Swing",
    description:
      "Explosive hip hinge movement using one kettlebell that builds posterior-chain power, conditioning, and core stability.",
    equipment: "Kettlebell",
    steps: [
      "Stand with feet slightly wider than hip-width apart and the kettlebell in front of you.",
      "Hinge at the hips and grip the kettlebell with both hands.",
      "Hike the kettlebell back between your legs to load your hips.",
      "Drive powerfully through your hips and extend tall.",
      "Allow the kettlebell to float to chest height from hip momentum.",
      "Keep arms relaxed and shoulders packed—do not lift with your arms.",
      "Let the kettlebell swing back between your legs and repeat smoothly.",
      "Maintain a neutral spine and avoid squatting the movement.",
    ],
    category: "power",
    muscleGroups: ["glutes", "hamstrings", "posterior_chain", "core", "grip"],
    difficulty: "intermediate",
    videoUrl: null,
  },

  "kettlebell-two-hand-clean-heavy": {
    id: "kettlebell-two-hand-clean-heavy",
    name: "Kettlebell Two-Hand Clean (Heavy)",
    description:
      "Explosive hip-driven clean using a single heavy kettlebell. Builds total-body power, posterior-chain strength, and strong front rack control.",
    equipment: "Single heavy kettlebell",
    steps: [
      "Stand with feet hip-width apart and the kettlebell positioned slightly in front of you.",
      "Hinge at the hips with a neutral spine and grip the kettlebell handle with both hands.",
      "Pull the kettlebell back slightly between your legs to load the hips.",
      "Drive forcefully through your hips and extend tall.",
      "Guide the kettlebell upward using hip power, not your arms.",
      "Catch the kettlebell close to your chest in a tight front rack position with both hands.",
      "Keep elbows close to your body and core braced at the top.",
      "Lower the kettlebell back down under control and reset before the next rep.",
      "Avoid curling the kettlebell—power should come from the hips.",
    ],
    category: "power",
    muscleGroups: [
      "glutes",
      "hamstrings",
      "posterior_chain",
      "core",
      "shoulders",
      "grip",
    ],
    difficulty: "advanced",
    videoUrl: null,
  },

  "glute-bridge": {
    id: "glute-bridge",
    name: "Glute Bridge",
    description:
      "Strengthens the glutes and posterior chain while reinforcing proper hip extension and spinal control.",
    equipment: "None (optional dumbbell or kettlebell for added load)",
    steps: [
      "Lie on your back with knees bent and feet flat on the floor, hip-width apart.",
      "Place your arms by your sides with palms facing down.",
      "Brace your core gently and press your lower back lightly into the floor.",
      "Drive through your heels and lift your hips toward the ceiling.",
      "Squeeze your glutes at the top without arching your lower back.",
      "Keep ribs down and avoid flaring the chest.",
      "Lower your hips slowly and with control back to the floor.",
      "Reset and repeat.",
    ],
    category: "strength",
    muscleGroups: ["glutes", "hamstrings", "core"],
    difficulty: "beginner",
    videoUrl: null,
  },

  "kettlebell-hip-thrust": {
    id: "kettlebell-hip-thrust",
    name: "Kettlebell Hip Thrust",
    description:
      "Direct glute strengthening exercise emphasizing full hip extension.",
    equipment: "Kettlebell and bench",
    steps: [
      "Sit on the ground with upper back supported on a bench.",
      "Place kettlebell on hips.",
      "Drive through heels and lift hips upward.",
      "Squeeze glutes at the top.",
      "Lower with control.",
    ],
    category: "strength",
    muscleGroups: ["glutes", "hamstrings"],
    difficulty: "intermediate",
    videoUrl: null,
  },

  "kettlebell-romanian-deadlift": {
    id: "kettlebell-romanian-deadlift",
    name: "Kettlebell Romanian Deadlift",
    description:
      "Hip hinge movement that strengthens the hamstrings and glutes while reinforcing proper posterior-chain mechanics.",
    equipment: "Kettlebell",
    steps: [
      "Stand tall holding the kettlebell with both hands.",
      "Slightly bend your knees and hinge your hips backward.",
      "Keep your spine neutral and chest proud.",
      "Lower the kettlebell until you feel tension in your hamstrings.",
      "Drive through your heels and squeeze your glutes to return to standing.",
      "Avoid rounding your lower back.",
    ],
    category: "strength",
    muscleGroups: ["glutes", "hamstrings", "posterior_chain"],
    difficulty: "beginner",
    videoUrl: null,
  },

  "single-leg-rdl": {
    id: "single-leg-rdl",
    name: "Single-Leg Romanian Deadlift",
    description:
      "Unilateral hinge movement that builds balance, glute strength, and hip stability.",
    equipment: "Dumbbell or kettlebell",
    steps: [
      "Stand on one leg holding weight in the opposite hand.",
      "Hinge at the hips while extending the free leg behind you.",
      "Keep hips square and spine neutral.",
      "Lower until torso is nearly parallel to the ground.",
      "Drive through the standing heel to return upright.",
      "Maintain balance and control throughout.",
    ],
    category: "strength",
    muscleGroups: ["glutes", "hamstrings", "balance", "core"],
    difficulty: "intermediate",
    videoUrl: null,
  },

  "staggered-stance-rdl": {
    id: "staggered-stance-rdl",
    name: "Staggered Stance RDL",
    description:
      "Hinge variation that emphasizes one leg while maintaining stability.",
    equipment: "Dumbbell or kettlebell",
    steps: [
      "Stand with one foot slightly behind the other.",
      "Keep most of your weight on the front leg.",
      "Hinge at the hips while keeping spine neutral.",
      "Lower the weight until hamstrings are loaded.",
      "Drive through the front heel to return upright.",
    ],
    category: "strength",
    muscleGroups: ["glutes", "hamstrings", "core"],
    difficulty: "intermediate",
    videoUrl: null,
  },

  "kettlebell-clean": {
    id: "kettlebell-clean",
    name: "Kettlebell Clean",
    description:
      "Explosive hip-driven lift that transitions the kettlebell into the rack position.",
    equipment: "Kettlebell",
    steps: [
      "Start in a hinge position with kettlebell between your legs.",
      "Drive hips forward explosively.",
      "Guide kettlebell upward close to your body.",
      "Catch in a strong front rack position.",
      "Lower with control and repeat.",
    ],
    category: "power",
    muscleGroups: ["glutes", "hamstrings", "core", "shoulders"],
    difficulty: "advanced",
    videoUrl: null,
  },

  "suitcase-deadlift": {
    id: "suitcase-deadlift",
    name: "Suitcase Deadlift",
    description:
      "Unilateral loaded hinge that builds anti-rotation core strength.",
    equipment: "Kettlebell or dumbbell",
    steps: [
      "Place weight beside one foot.",
      "Hinge and grip the weight with one hand.",
      "Keep chest square and spine neutral.",
      "Drive through heels to stand tall.",
      "Avoid leaning toward the loaded side.",
    ],
    category: "strength",
    muscleGroups: ["glutes", "hamstrings", "core", "obliques"],
    difficulty: "intermediate",
    videoUrl: null,
  },

  "kettlebell-snatch": {
    id: "kettlebell-snatch",
    name: "Kettlebell Snatch",
    description:
      "Explosive full-body movement that drives the kettlebell overhead in one fluid motion, building power, coordination, and shoulder stability.",
    equipment: "Kettlebell",
    steps: [
      "Stand with feet hip-width apart and the kettlebell in front of you.",
      "Hinge at the hips and grip the kettlebell with one hand.",
      "Hike the kettlebell back between your legs to load the hips.",
      "Drive forcefully through your hips and extend tall.",
      "Pull the kettlebell upward close to your body.",
      "Punch your hand through at the top to lock the kettlebell overhead.",
      "Keep your arm straight and shoulder packed at the top.",
      "Lower the kettlebell under control and repeat.",
    ],
    category: "power",
    muscleGroups: [
      "glutes",
      "hamstrings",
      "posterior_chain",
      "core",
      "shoulders",
      "grip",
    ],
    difficulty: "advanced",
    videoUrl: null,
  },
};
