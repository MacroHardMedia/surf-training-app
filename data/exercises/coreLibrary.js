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

  "mountain-climbers": {
    id: "mountain-climbers",
    name: "Mountain Climbers (Knee to Chest)",
    description:
      "Builds core strength, hip flexor power, and conditioning while reinforcing knee-to-chest compression—key for fast, explosive pop-ups and tight body control in surfing.",
    equipment: null,
    steps: [
      "Start in a high plank position with hands under shoulders and body in a straight line",
      "Engage your core and squeeze your glutes to stabilize your hips",
      "Drive one knee forward toward your chest as far as possible",
      "Aim to make contact (or get close) between your knee and chest",
      "Quickly switch legs, bringing the opposite knee toward your chest",
      "Keep your hips low and stable throughout the movement",
      "Move at a controlled pace first, then increase speed while maintaining form",
      "Continue alternating for reps or time",
    ],
    category: "conditioning",
    muscleGroups: ["core", "hip_flexors", "shoulders", "quads"],
    difficulty: "beginner",
    tips: [
      "Think 'knee to chest', not just 'knee forward'",
      "Keep your shoulders stacked over your hands for stability",
      "Maintain a strong plank—don’t let your hips bounce up and down",
      "Start slow to build control before adding speed",
    ],
    commonMistakes: [
      "Only bringing the knee halfway forward",
      "Letting hips rise too high or sag too low",
      "Bouncing excessively instead of staying controlled",
      "Losing core tension and arching the lower back",
    ],
    regressions: [
      "Slow mountain climbers (step instead of switch)",
      "Elevated hands (on a bench or box) to reduce load",
      "Hold plank and perform single knee drives with pauses",
    ],
    progressions: [
      "Fast tempo mountain climbers with full knee-to-chest range",
      "Cross-body climbers (knee to opposite chest/shoulder)",
      "Slider or towel climbers for constant tension",
      "Add a push-up between every few reps",
    ],
    videoUrl: null,
  },

  "plank-step-throughs": {
    id: "plank-step-throughs",
    name: "Plank Step-Throughs",
    description:
      "Develops rotational core strength, hip mobility, and dynamic control by stepping the foot through toward the opposite side—mimicking the mechanics of surf pop-ups and stance transitions.",
    equipment: null,
    steps: [
      "Start in a high plank position with hands under shoulders and body in a straight line",
      "Engage your core and keep your hips level",
      "Step one foot forward and across your body toward the opposite hand",
      "Aim to bring your foot as close to your hand as mobility allows",
      "Allow your hips to rotate naturally as you step through",
      "Pause briefly in the stepped-through position with control",
      "Return the foot back to plank position",
      "Repeat on the opposite side in a smooth, controlled rhythm",
    ],
    category: "conditioning",
    muscleGroups: ["core", "hips", "shoulders", "glutes"],
    difficulty: "intermediate",
    tips: [
      "Think 'step through and rotate', not just 'step forward'",
      "Keep your hands firmly planted and shoulders stable",
      "Move with control—don’t rush the step-through",
      "Breathe out as you step through to improve mobility and control",
    ],
    commonMistakes: [
      "Only stepping forward instead of across the body",
      "Rushing the movement and losing control",
      "Letting the shoulders collapse or shift too far forward",
      "Not using full range of motion through the hips",
    ],
    regressions: [
      "Step forward only (no cross-body movement)",
      "Reduce range of motion and step halfway through",
      "Elevate hands on a box or bench for easier control",
    ],
    progressions: [
      "Add a rotation reach (reach opposite arm upward during step-through)",
      "Increase tempo while maintaining control",
      "Add a pause or hold in the step-through position",
      "Combine with push-ups between reps",
    ],
    videoUrl: null,
  },
};
