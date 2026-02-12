export const exerciseLibrary = {
  // ==================== MOBILITY EXERCISES ====================

  "shoulder-cars": {
    id: "shoulder-cars",
    name: "Shoulder Cars",
    description:
      "Controlled Articular Rotations for the shoulder to improve joint mobility and stability through a full pain-free range.",
    equipment: null,
    steps: [
      "Stand with feet shoulder-width apart",
      "Raise one arm to the side at shoulder height",
      "Make large circles forward for specified reps",
      "Reverse direction and circle backward",
      "Keep core engaged and maintain proper posture",
    ],
    category: "mobility",
    muscleGroups: ["shoulders"],
    difficulty: "beginner",
    videoUrl: null,
  },

  "shoulder-dislocates": {
    id: "shoulder-dislocates",
    name: "Shoulder Dislocates",
    description: "These will help with tightness around your shoulder capsule.",
    equipment: "Surf leash, jump rope, or towel",
    steps: [
      "Stand tall holding the rope with both hands in front of your thighs.",
      "Start with a wide grip so the movement feels smooth and controlled.",
      "Keep your arms straight and shoulders packed (do not shrug).",
      "Slowly raise the rope overhead and continue moving it behind your body.",
      "Bring the rope as far back as comfortable without bending your elbows.",
      "Reverse the motion and return to the starting position with control.",
      "If the movement feels easy, gradually narrow your grip slightly.",
      "If you feel pain or pinching, widen your grip immediately.",
    ],
    category: "mobility",
    muscleGroups: ["shoulders", "chest"],
    difficulty: "beginner",
    videoUrl: null,
  },

  //   *** HIP MOBILITY ***

  "hip-cars": {
    id: "hip-cars",
    name: "Hip Cars",
    description:
      "Controlled Articular Rotations for the hip to improve joint mobility and stability through a full pain-free range.",
    equipment: null,
    steps: [
      "Stand on one leg with the other leg lifted",
      "Create large circles with your hip joint",
      "Move slowly and controlled through the full range",
      "Reverse direction after specified reps",
      "Switch legs and repeat",
    ],
    category: "mobility",
    muscleGroups: ["hips", "glutes"],
    difficulty: "beginner",
    videoUrl: null,
  },

  "hip-airplanes": {
    id: "hip-airplanes",
    name: "Hip Airplanes",
    description:
      "A single-leg stability drill that improves hip rotation, balance, and glute control for better stance stability and injury prevention.",
    equipment: "None (optional wall or chair for support)",
    steps: [
      "Stand tall and shift your weight onto one leg.",
      "Keep a slight bend in the standing knee and hinge your hips back slightly.",
      "Extend the opposite leg straight behind you for balance.",
      "Keeping your spine neutral, slowly rotate your hips open toward the ceiling.",
      "Pause briefly at the top without arching your lower back.",
      "Rotate your hips back down toward the floor with control.",
      "Keep your chest square to the ground and avoid twisting through your spine.",
      "Use light fingertip support on a wall if balance limits control.",
    ],
    category: "mobility",
    muscleGroups: ["hips", "glutes", "core"],
    difficulty: "intermediate",
    videoUrl: null,
  },

  "ninety-ninety-hip-mobility": {
    id: "ninety-ninety-hip-mobility",
    name: "90/90 Hip Mobility",
    description:
      "Improves internal and external hip rotation, helping with smoother pop-ups, stance control, and rotational power.",
    equipment: "None",
    steps: [
      "Sit on the floor with one leg bent in front of you at 90 degrees.",
      "Position the back leg behind you also bent at 90 degrees.",
      "Sit tall with your chest upright and spine neutral.",
      "Without using your hands if possible, rotate your knees to switch sides.",
      "Keep both hips in contact with the floor as you transition.",
      "Move slowly and with control—do not rush the rotation.",
      "If needed, use your hands lightly for support while maintaining posture.",
    ],
    category: "mobility",
    muscleGroups: ["hips", "glutes"],
    difficulty: "beginner",
    videoUrl: null,
  },

  "worlds-greatest-stretch": {
    id: "worlds-greatest-stretch",
    name: "World’s Greatest Stretch",
    description:
      "A dynamic full-body mobility drill that improves hip flexion, thoracic rotation, and hamstring mobility—ideal for pop-ups and athletic movement.",
    equipment: "None",
    steps: [
      "Start in a tall standing position.",
      "Step one foot forward into a deep lunge position.",
      "Place both hands on the floor inside your front foot.",
      "Lower your back knee gently to the ground if needed.",
      "Bring your inside elbow toward the instep of your front foot.",
      "Rotate your torso and reach that same arm toward the ceiling.",
      "Keep your chest open and eyes following your hand.",
      "Return your hand to the floor and step back to standing.",
      "Switch sides and repeat.",
    ],
    category: "mobility",
    muscleGroups: ["hips", "hamstrings", "thoracic spine", "shoulders"],
    difficulty: "beginner",
    videoUrl: null,
  },

  // ==================== STRENGTH EXERCISES ====================

  //   *** PUSH ****

  "push-ups": {
    id: "push-ups",
    name: "Push-ups",
    description:
      "Classic upper body pressing exercise for chest, shoulders, and triceps.",
    equipment: null,
    steps: [
      "Start in a plank position with hands slightly wider than shoulder-width",
      "Keep your body in a straight line from head to heels",
      "Lower your chest toward the ground by bending your elbows",
      "Push back up to the starting position",
      "Keep your core engaged throughout the movement",
    ],
    category: "push",
    muscleGroups: ["chest", "shoulders", "triceps", "core"],
    difficulty: "beginner",
    videoUrl: null,
  },

  "scap-push-up": {
    id: "scap-push-up",
    name: "Scap Push-Up",
    description:
      "Improves scapular control and shoulder stability by training protraction and retraction without bending the elbows.",
    equipment: "None",
    steps: [
      "Start in a high plank position with hands directly under your shoulders.",
      "Keep your arms completely straight throughout the movement.",
      "Brace your core and maintain a neutral spine.",
      "Slowly let your chest sink toward the floor by squeezing your shoulder blades together.",
      "Without bending your elbows, press the floor away and spread your shoulder blades apart.",
      "Keep your head neutral and avoid shrugging your shoulders toward your ears.",
      "Move slowly and focus on controlled shoulder blade motion.",
    ],
    category: ["push"],
    muscleGroups: ["shoulders", "scapular_control", "core"],
    difficulty: "beginner",
    videoUrl: null,
  },

  "ring-press": {
    id: "ring-press",
    name: "Ring Press",
    description:
      "Advanced unstable pressing movement that challenges shoulder and core stability.",
    equipment: "Gymnastics rings",
    steps: [
      "Set rings slightly below waist height.",
      "Lean forward into a ring support position.",
      "Lower chest between rings while keeping shoulders stable.",
      "Press back to the top while maintaining full-body tension.",
    ],
    category: "push",
    muscleGroups: ["chest", "shoulders", "triceps", "core", "scapular_control"],
    difficulty: "advanced",
    videoUrl: null,
  },

  "plyometric-push-up": {
    id: "plyometric-push-up",
    name: "Plyometric Push-Up",
    description: "Explosive push-up variation that develops upper-body power.",
    equipment: "None",
    steps: [
      "Lower into a push-up position.",
      "Explode upward forcefully.",
      "Allow hands to leave the ground briefly.",
      "Land softly and absorb impact.",
      "Reset before next rep.",
    ],
    category: "power",
    muscleGroups: ["chest", "shoulders", "triceps", "power"],
    difficulty: "advanced",
    videoUrl: null,
  },

  "medicine-ball-chest-pass": {
    id: "medicine-ball-chest-pass",
    name: "Medicine Ball Chest Pass",
    description: "Explosive horizontal pushing movement to develop power.",
    equipment: "Medicine ball",
    steps: [
      "Hold medicine ball at chest level.",
      "Brace your core and stand tall.",
      "Explosively throw ball forward.",
      "Catch and reset.",
    ],
    category: "power",
    muscleGroups: ["chest", "shoulders", "core", "power"],
    difficulty: "intermediate",
    videoUrl: null,
  },

  "handstand-hold": {
    id: "handstand-hold",
    name: "Handstand Hold",
    description:
      "Isometric overhead pressing position that builds shoulder stability and core control.",
    equipment: "Wall (optional)",
    steps: [
      "Kick up into a wall-supported handstand.",
      "Press actively through your shoulders.",
      "Keep ribs tucked and core braced.",
      "Hold steady without collapsing.",
    ],
    category: "isometric",
    muscleGroups: ["shoulders", "core", "scapular_control"],
    difficulty: "advanced",
    videoUrl: null,
  },

  "pike-push-up": {
    id: "pike-push-up",
    name: "Pike Push-Up",
    description:
      "Vertical pressing bodyweight movement that builds shoulder strength and prepares you for handstand progressions.",
    equipment: "None (optional box or bench for progression)",
    steps: [
      "Start in a push-up position and lift your hips toward the ceiling to form an inverted V shape.",
      "Place your hands shoulder-width apart and keep your arms straight at the top.",
      "Shift your weight slightly forward so your shoulders stack more over your hands.",
      "Bend your elbows and lower the top of your head toward the floor between your hands.",
      "Keep your core braced and avoid flaring your ribs.",
      "Press through your palms and return to the starting position with control.",
      "Move slowly and avoid collapsing through your shoulders.",
    ],
    category: "strength",
    muscleGroups: ["shoulders", "triceps", "upper_chest", "core"],
    difficulty: "intermediate",
    videoUrl: null,
  },

  "dive-bomber-push-up": {
    id: "dive-bomber-push-up",
    name: "Dive Bomber Push-Up",
    description:
      "Dynamic push-up variation that builds shoulder strength, chest mobility, and core control through a flowing range of motion. If this is too dificult do a pike-pushup or a regular pushup",
    equipment: "None",
    steps: [
      "Start in a pike position with hips high and hands shoulder-width apart.",
      "Lower your chest forward and down in a scooping motion toward the floor.",
      "Glide your chest through and finish in an upward-facing position with chest open.",
      "Keep shoulders active and avoid collapsing into the lower back.",
      "Reverse the movement by pushing back into the starting pike position.",
      "Move slowly and under control, focusing on smooth transitions.",
    ],
    category: "strength",
    muscleGroups: ["chest", "shoulders", "triceps", "core", "mobility"],
    difficulty: "intermediate",
    videoUrl: null,
  },

  //   *** PULL ***

  "pull-ups": {
    id: "pull-ups",
    name: "Pull-ups",
    description: "Upper body pulling exercise for back and biceps.",
    equipment: "Pull-up bar",
    steps: [
      "Hang from a pull-up bar with hands shoulder-width apart",
      "Engage your core and pull your shoulder blades down and back",
      "Pull yourself up until your chin is over the bar",
      "Lower yourself with control back to the starting position",
      "Avoid swinging or using momentum",
    ],
    category: "pull",
    muscleGroups: ["back", "biceps", "forearms"],
    difficulty: "intermediate",
    videoUrl: null,
  },

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

  // ==================== CORE EXERCISES ====================

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

  // ==================== SURF-SPECIFIC EXERCISES ====================

  "pop-up-practice": {
    id: "pop-up-practice",
    name: "Pop-up Practice",
    description:
      "Practice the surf pop-up movement on land to build muscle memory and explosiveness.",
    equipment: null,
    steps: [
      "Lie flat on your stomach with hands under your chest",
      "In one explosive motion, push up and bring your feet under you",
      "Land in your surf stance with knees bent",
      "Focus on speed and fluidity of the movement",
      "Reset and repeat",
    ],
    category: "surf-specific",
    muscleGroups: ["full-body", "core", "legs"],
    difficulty: "beginner",
    videoUrl: null,
  },

  // Add more exercises as you need them...
};

// Helper function to get exercises by category
export const getExercisesByCategory = (category) => {
  return Object.values(exerciseLibrary).filter(
    (exercise) => exercise.category === category,
  );
};

// Helper function to get exercises by muscle group
export const getExercisesByMuscleGroup = (muscleGroup) => {
  return Object.values(exerciseLibrary).filter((exercise) =>
    exercise.muscleGroups.includes(muscleGroup),
  );
};

// Helper function to search exercises
export const searchExercises = (query) => {
  const lowerQuery = query.toLowerCase();
  return Object.values(exerciseLibrary).filter(
    (exercise) =>
      exercise.name.toLowerCase().includes(lowerQuery) ||
      exercise.description.toLowerCase().includes(lowerQuery),
  );
};
