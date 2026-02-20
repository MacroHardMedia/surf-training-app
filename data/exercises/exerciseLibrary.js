/**
 * EXERCISE LIBRARY - Organized by Category
 *
 * This file contains all exercises organized into separate sub-libraries:
 *
 * - mobilityLibrary: Shoulder, hip, and spinal mobility exercises
 * - pushLibrary: Push-up variations and pressing movements
 * - pullLibrary: Pull-up variations and pulling movements
 * - legsLibrary: Squat variations and leg exercises
 * - posteriorChainLibrary: Glutes, hamstrings, and posterior chain exercises
 * - coreLibrary: Plank variations and core stability exercises
 * - surfSpecificLibrary: Surf-specific movements and drills
 *
 * The main 'exerciseLibrary' export combines all sub-libraries for backward compatibility.
 *
 * Usage:
 * - Import specific library: import { mobilityLibrary } from './exerciseLibrary'
 * - Import all exercises: import { exerciseLibrary } from './exerciseLibrary'
 * - Import multiple: import { pushLibrary, pullLibrary } from './exerciseLibrary'
 */

// ==================== MOBILITY EXERCISES ====================

export const mobilityLibrary = {
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

  "quadruped-shoulder-cars": {
    id: "quadruped-shoulder-cars",
    name: "Quadruped Shoulder CARs",
    description:
      "Controlled rotation drill that improves shoulder capsule mobility and stability.",
    equipment: "None",
    steps: [
      "Start on all fours in a tabletop position.",
      "Keep core braced and spine neutral.",
      "Lift one arm straight out in front of you.",
      "Slowly rotate the arm overhead and behind you.",
      "Keep hips and torso stable.",
      "Reverse the motion slowly.",
    ],
    category: "mobility",
    muscleGroups: ["shoulders", "scapular control"],
    difficulty: "intermediate",
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

  "thread-the-needle": {
    id: "thread-the-needle",
    name: "Thread the Needle",
    description:
      "Thoracic rotation mobility drill that improves upper-back movement and reduces shoulder and neck tension.",
    equipment: "None",
    steps: [
      "Start on all fours in a tabletop position with hands under shoulders and knees under hips.",
      "Keep your spine neutral and core lightly braced.",
      "Lift one hand off the floor and reach it underneath your body toward the opposite side.",
      "Allow your upper back to rotate while keeping your hips mostly square.",
      "Lower your shoulder and head toward the floor gently.",
      "Pause briefly while breathing deeply.",
      "Reverse the movement and rotate your arm upward toward the ceiling.",
      "Follow your hand with your eyes to encourage full thoracic rotation.",
      "Move slowly and avoid forcing the stretch.",
    ],
    category: "mobility",
    muscleGroups: ["thoracic_spine", "shoulders"],
    difficulty: "beginner",
    videoUrl: null,
  },

  "wall-slides": {
    id: "wall-slides",
    name: "Wall Slides",
    description:
      "Improves scapular upward rotation and thoracic extension for more efficient overhead paddling mechanics.",
    equipment: "Wall",
    steps: [
      "Stand with your back against a wall and ribs down.",
      "Place forearms against the wall at shoulder height.",
      "Keep wrists and elbows in contact with the wall.",
      "Slowly slide your arms upward overhead.",
      "Avoid arching your lower back or shrugging your shoulders.",
      "Lower back down with control.",
    ],
    category: "mobility",
    muscleGroups: ["shoulders", "scapular control", "thoracic_spine"],
    difficulty: "beginner",
    videoUrl: null,
  },

  "band-lat-stretch": {
    id: "band-lat-stretch",
    name: "Band Lat Stretch",
    description:
      "Opens the lats and shoulders to allow smoother overhead movement during paddling.",
    equipment: "Resistance band",
    steps: [
      "Anchor a band overhead.",
      "Grab the band and step back until arms are extended.",
      "Sit your hips back while keeping arms straight.",
      "Lower your chest toward the floor.",
      "Keep ribs down and avoid arching your lower back.",
      "Breathe deeply and relax into the stretch.",
    ],
    category: "mobility",
    muscleGroups: ["lats", "shoulders"],
    difficulty: "beginner",
    videoUrl: null,
  },

  "band-external-rotation": {
    id: "band-external-rotation",
    name: "Band External Rotation",
    description:
      "Strengthens the rotator cuff to support shoulder stability and paddling endurance.",
    equipment: "Resistance band",
    steps: [
      "Attach band at elbow height.",
      "Keep elbow tucked at your side at 90 degrees.",
      "Rotate your forearm outward while keeping elbow pinned.",
      "Move slowly and control the return.",
      "Avoid shrugging or twisting your torso.",
    ],
    category: "mobility",
    muscleGroups: ["rotator_cuff", "shoulders"],
    difficulty: "beginner",
    videoUrl: null,
  },

  "dead-hang": {
    id: "dead-hang",
    name: "Dead Hang",
    description:
      "Decompresses the shoulders and improves overhead joint tolerance for paddling volume.",
    equipment: "Pull-up bar",
    steps: [
      "Grip a pull-up bar with hands shoulder-width apart.",
      "Allow your body to hang freely.",
      "Relax your shoulders gently without collapsing.",
      "Optionally engage slightly by pulling shoulders down.",
      "Breathe steadily while hanging.",
    ],
    category: "mobility",
    muscleGroups: ["shoulders", "lats", "grip"],
    difficulty: "beginner",
    videoUrl: null,
  },

  "cat-cow": {
    id: "cat-cow",
    name: "Cat-Cow",
    description:
      "Spinal mobility drill that improves flexion and extension while reducing stiffness in the thoracic and lumbar spine.",
    equipment: "None",
    steps: [
      "Start on all fours with hands under shoulders and knees under hips.",
      "Inhale and slowly drop your belly toward the floor.",
      "Lift your chest and gently extend through your upper back (Cow position).",
      "Exhale and round your spine toward the ceiling.",
      "Tuck your chin slightly and draw your ribs inward (Cat position).",
      "Move slowly between positions with controlled breathing.",
      "Focus on segmental movement through the spine.",
    ],
    category: "mobility",
    muscleGroups: ["thoracic_spine", "lumbar_spine", "shoulders"],
    difficulty: "beginner",
    videoUrl: null,
  },

  //   *** HIP MOBILITY ***

  "deep-squat-stretch": {
    id: "deep-squat-stretch",
    name: "Deep Squat Stretch",
    description:
      "Improves ankle mobility, hip flexion, and thoracic posture in a deep squat position.",
    equipment: "None (optional support)",
    steps: [
      "Stand with feet slightly wider than shoulder-width apart.",
      "Lower into a deep squat with heels flat on the ground.",
      "Keep your chest upright and spine neutral.",
      "Place elbows inside your knees and gently press outward.",
      "Shift weight side to side slowly.",
      "Breathe deeply and relax into the position.",
    ],
    category: "mobility",
    muscleGroups: ["hips", "ankles", "thoracic_spine"],
    difficulty: "beginner",
    videoUrl: null,
  },

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

  "couch-stretch": {
    id: "couch-stretch",
    name: "Couch Stretch",
    description:
      "Deep hip flexor stretch that improves hip extension and posture.",
    equipment: "Wall, couch, or bench",
    steps: [
      "Place one knee on the floor close to a wall or couch.",
      "Position your back foot up against the wall with toes pointing upward.",
      "Step the opposite foot forward into a lunge position.",
      "Keep your chest tall and gently tuck your pelvis under.",
      "Squeeze your glute on the back leg.",
      "Hold while breathing slowly without arching your lower back.",
    ],
    category: "mobility",
    muscleGroups: ["hip_flexors", "quads"],
    difficulty: "intermediate",
    videoUrl: null,
  },

  //   ***** SPINAL MOBILITY *****

  "thoracic-spine-open-books": {
    id: "thoracic-spine-open-books",
    name: "Thoracic Spine Open Books",
    description:
      "Improves thoracic rotation and upper-back mobility for better turning mechanics.",
    equipment: "None",
    steps: [
      "Lie on your side with knees bent at 90 degrees.",
      "Extend both arms straight in front of you.",
      "Keep your knees stacked and stable.",
      "Slowly rotate your top arm open toward the opposite side.",
      "Follow your hand with your eyes as you rotate.",
      "Pause briefly at end range without forcing the stretch.",
      "Return to the starting position with control.",
    ],
    category: "mobility",
    muscleGroups: ["thoracic_spine", "shoulders"],
    difficulty: "beginner",
    videoUrl: null,
  },
};

// ==================== STRENGTH EXERCISES ====================

export const pushLibrary = {
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
    muscleGroups: ["shoulders", "scapular control", "core"],
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
    muscleGroups: ["chest", "shoulders", "triceps", "core", "scapular control"],
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
    category: ["isometric", "push"],
    muscleGroups: ["shoulders", "core", "scapular control"],
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
    category: "push",
    muscleGroups: ["shoulders", "triceps", "upper chest", "core"],
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
    category: "push",
    muscleGroups: ["chest", "push", "shoulders", "triceps", "core", "mobility"],
    difficulty: "intermediate",
    videoUrl: null,
  },

  dips: {
    id: "dips",
    name: "Dips",
    description:
      "Vertical pressing movement that builds triceps, chest, and shoulder strength for stronger pop-ups and upper-body power.",
    equipment: "Parallel bars, dip bars, or sturdy rings",
    steps: [
      "Grip the bars and support your body with arms fully extended.",
      "Keep shoulders packed and chest slightly lifted.",
      "Bend your elbows and lower your body under control.",
      "Descend until shoulders are just below elbows.",
      "Avoid shrugging or collapsing forward.",
      "Press through your palms and extend your elbows to return to the top.",
      "Keep core braced and legs controlled.",
    ],
    category: "strength",
    muscleGroups: ["chest", "triceps", "shoulders", "core"],
    difficulty: "intermediate",
    videoUrl: null,
  },

  "ring-support-hold": {
    id: "ring-support-hold",
    name: "Ring Support Hold",
    description:
      "Isometric stability exercise that builds shoulder control, scapular strength, and core tension.",
    equipment: "Gymnastics rings",
    steps: [
      "Set rings at hip height and grip them firmly.",
      "Press yourself up into a tall support position.",
      "Lock elbows and keep shoulders slightly depressed.",
      "Turn rings slightly outward if possible.",
      "Keep chest tall and core braced.",
      "Avoid shrugging or letting shoulders collapse.",
      "Hold steady while maintaining full-body tension.",
    ],
    category: "isometric",
    muscleGroups: ["shoulders", "triceps", "scapular_control", "core"],
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

  thruster: {
    id: "thruster",
    name: "Thruster",
    description:
      "Full-body compound movement that combines a front squat and overhead press to build strength, power, and conditioning.",
    equipment: "Dumbbells, barbell, kettlebells, or medicine ball",
    steps: [
      "Hold weights at shoulder height in a front rack position.",
      "Stand with feet shoulder-width apart.",
      "Lower into a controlled front squat.",
      "Keep chest tall and knees tracking over toes.",
      "Drive powerfully through your heels to stand up.",
      "As you stand, press the weights overhead in one fluid motion.",
      "Lock out overhead with ribs down and core braced.",
      "Lower weights back to shoulders and repeat.",
    ],
    category: ["push", "legs"],
    muscleGroups: ["quads", "glutes", "shoulders", "core", "triceps"],
    difficulty: "intermediate",
    videoUrl: null,
  },

  "plyo-push-up": {
    id: "plyo-push-up",
    name: "Plyometric Push-Up",
    description:
      "Explosive upper-body pushing movement that develops power, speed, and reactive strength.",
    equipment: "None",
    steps: [
      "Start in a strong push-up position with hands under shoulders.",
      "Brace your core and keep your body in a straight line.",
      "Lower your chest toward the floor under control.",
      "Explosively press through your palms.",
      "Allow your hands to leave the ground briefly.",
      "Land softly with elbows slightly bent to absorb force.",
      "Reset tension before the next repetition.",
    ],
    category: "power",
    muscleGroups: [
      "chest",
      "shoulders",
      "triceps",
      "core",
      "explosive_strength",
    ],
    difficulty: "advanced",
    videoUrl: null,
  },
};

export const pullLibrary = {
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

  "gorilla-kettlebell-rows": {
    id: "gorilla-kettlebell-rows",
    name: "Gorilla Kettlebell Rows",
    description:
      "Bent-over bilateral row variation that strengthens the lats, upper back, and posterior chain while reinforcing hip hinge mechanics.",
    equipment: "Two kettlebells",
    steps: [
      "Place two kettlebells on the floor slightly wider than shoulder-width apart.",
      "Stand with feet wider than hips and hinge at the hips.",
      "Grip each kettlebell with a neutral spine and chest slightly lifted.",
      "Keep hips back and knees slightly bent.",
      "Row one kettlebell toward your hip while keeping torso stable.",
      "Lower it under control and alternate sides.",
      "Avoid rotating your shoulders or twisting your torso.",
      "Maintain tension in your glutes and hamstrings throughout.",
    ],
    category: "strength",
    muscleGroups: ["lats", "upper_back", "posterior_chain", "core"],
    difficulty: "intermediate",
    videoUrl: null,
  },

  "muscle-up": {
    id: "muscle-up",
    name: "Muscle-Up",
    description:
      "Advanced compound movement combining a pull-up with a transition into a dip. Requires significant upper-body strength, explosive power, and coordination. Muscle-ups are amazing for paddling, and are one of the best exercises for a powerful paddle.",
    equipment: ["Pull-up bar", "Gymnastics rings"],
    steps: [
      "Hang from the bar with a false grip (thumbs over the bar) or regular grip.",
      "Generate momentum with a slight swing or kip if needed.",
      "Pull explosively upward, driving your chest toward the bar.",
      "As you reach chest height, lean forward and shift your weight over the bar.",
      "Transition quickly by rotating your wrists and elbows over the bar.",
      "Press down to full extension in a dip position at the top.",
      "Lower yourself back down with control to the starting hang position.",
      "Focus on a smooth, efficient transition—avoid excessive swinging.",
    ],
    category: ["pull", "push", "power"],
    muscleGroups: [
      "lats",
      "upper_back",
      "chest",
      "shoulders",
      "triceps",
      "core",
      "power",
    ],
    difficulty: "advanced",
    videoUrl: null,
  },
};

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
      "Drive through the heel of the foot that's on the box to stand up.",
      "Avoid pushing off excessively with the floor foot.",
      "Control the descent back to the starting position.",
      "Maintain knee alignment over toes throughout the movement.",
      "Complete reps on one side before switching.",
    ],
    category: "strength",
    muscleGroups: ["glutes", "quads", "hamstrings", "balance", "core"],
    difficulty: "beginner",
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

// ===================== Shoulder Strength Exercises ============

export const shoulderLibrary = {
  "dumbbell-overhead-press": {
    id: "dumbbell-overhead-press",
    name: "Dumbbell Overhead Press",
    description:
      "Vertical pressing movement that builds shoulder strength and trunk stability.",
    equipment: "Dumbbells",
    steps: [
      "Stand tall with dumbbells at shoulder height.",
      "Brace your core and keep ribs down.",
      "Press weights overhead without arching your lower back.",
      "Lower under control back to shoulders.",
    ],
    category: "strength",
    muscleGroups: ["shoulders", "triceps", "core"],
    difficulty: "intermediate",
    videoUrl: null,
  },

  "pike-push-up": {
    id: "pike-push-up",
    name: "Pike Push-Up",
    description:
      "Bodyweight vertical pressing movement that strengthens the shoulders.",
    equipment: "None",
    steps: [
      "Start in an inverted V position with hips high.",
      "Shift weight slightly forward.",
      "Lower the top of your head toward the floor.",
      "Press back up with control.",
    ],
    category: "strength",
    muscleGroups: ["shoulders", "triceps", "upper_chest", "core"],
    difficulty: "intermediate",
    videoUrl: null,
  },

  "ring-push-up": {
    id: "ring-push-up",
    name: "Ring Push-Up",
    description:
      "Unstable pressing movement that builds shoulder stability and control.",
    equipment: "Gymnastics rings",
    steps: [
      "Grip rings and assume a plank position.",
      "Lower chest between rings with control.",
      "Press back up while stabilizing shoulders.",
    ],
    category: "strength",
    muscleGroups: ["chest", "shoulders", "triceps", "core", "scapular_control"],
    difficulty: "intermediate",
    videoUrl: null,
  },

  "single-arm-cable-row": {
    id: "single-arm-cable-row",
    name: "Single Arm Cable Row",
    description:
      "Unilateral pulling movement that strengthens the lats and scapular stabilizers.",
    equipment: "Cable machine or resistance band",
    steps: [
      "Stand tall and grab handle with one hand.",
      "Pull elbow toward your hip.",
      "Keep chest proud and avoid rotating torso.",
      "Return with control.",
    ],
    category: "strength",
    muscleGroups: ["lats", "upper_back", "scapular_control"],
    difficulty: "intermediate",
    videoUrl: null,
  },

  "pull-up": {
    id: "pull-up",
    name: "Pull-Up",
    description:
      "Vertical pulling movement that builds lat strength and shoulder stability.",
    equipment: "Pull-up bar",
    steps: [
      "Grip bar slightly wider than shoulders.",
      "Engage shoulders before pulling.",
      "Pull chest toward bar.",
      "Lower under control.",
    ],
    category: "strength",
    muscleGroups: ["lats", "upper_back", "shoulders"],
    difficulty: "intermediate",
    videoUrl: null,
  },

  "face-pull": {
    id: "face-pull",
    name: "Face Pull",
    description:
      "Strengthens rear delts and improves scapular retraction and shoulder health.",
    equipment: "Cable machine or resistance band",
    steps: [
      "Anchor band or rope at face height.",
      "Pull toward your face with elbows high.",
      "Squeeze shoulder blades together.",
      "Return slowly.",
    ],
    category: "strength",
    muscleGroups: ["rear_delts", "upper_back", "scapular_control"],
    difficulty: "beginner",
    videoUrl: null,
  },

  "band-external-rotation": {
    id: "band-external-rotation",
    name: "Band External Rotation",
    description:
      "Strengthens the rotator cuff to improve shoulder stability and resilience.",
    equipment: "Resistance band",
    steps: [
      "Attach band at elbow height.",
      "Keep elbow pinned to your side.",
      "Rotate forearm outward.",
      "Return slowly.",
    ],
    category: "strength",
    muscleGroups: ["rotator_cuff", "shoulders"],
    difficulty: "beginner",
    videoUrl: null,
  },

  "scap-pull-up": {
    id: "scap-pull-up",
    name: "Scap Pull-Up",
    description:
      "Teaches scapular depression and improves shoulder stability before full pull-ups.",
    equipment: "Pull-up bar",
    steps: [
      "Hang from a bar with arms straight.",
      "Pull shoulders down without bending elbows.",
      "Lift body slightly.",
      "Lower with control.",
    ],
    category: "strength",
    muscleGroups: ["scapular_control", "lats", "shoulders"],
    difficulty: "beginner",
    videoUrl: null,
  },

  "lateral-raise": {
    id: "lateral-raise",
    name: "Dumbbell Lateral Raise",
    description:
      "Isolates the lateral deltoids to build shoulder width and endurance.",
    equipment: "Dumbbells",
    steps: [
      "Hold dumbbells at sides.",
      "Raise arms to shoulder height.",
      "Keep slight bend in elbows.",
      "Lower slowly.",
    ],
    category: "strength",
    muscleGroups: ["shoulders", "lateral_delts"],
    difficulty: "beginner",
    videoUrl: null,
  },

  "medicine-ball-slam": {
    id: "medicine-ball-slam",
    name: "Medicine Ball Slam",
    description:
      "Explosive overhead movement that builds power and shoulder endurance.",
    equipment: "Medicine ball",
    steps: [
      "Raise ball overhead.",
      "Engage core and explode downward.",
      "Slam ball into the ground.",
      "Reset quickly.",
    ],
    category: "power",
    muscleGroups: ["shoulders", "lats", "core", "power"],
    difficulty: "intermediate",
    videoUrl: null,
  },

  "turkish-get-up": {
    id: "turkish-get-up",
    name: "Turkish Get-Up",
    description:
      "Full-body movement pattern that develops strength, mobility, and stability through multiple planes of motion. This exercise is one of the most challenging to learn because there are so many movements needed to complete it.",
    equipment: ["Kettlebell", "Dumbbell"],
    steps: [
      "Lie on your back with kettlebell in right hand, arm extended overhead",
      "Bend right knee and place foot flat on floor",
      "Roll onto left elbow, then up to left hand",
      "Bridge hips up and sweep left leg back to half-kneeling position",
      "Stand up while keeping kettlebell stable overhead",
      "Reverse the movement with control to return to starting position",
      "Complete all reps on one side before switching",
    ],
    category: ["legs", "core", "mobility", "full-body"],
    muscleGroups: ["full_body", "shoulders", "core", "hips", "legs"],
    difficulty: "advanced",
    videoUrl: null,
  },
};

// ==================== SURF-SPECIFIC EXERCISES ====================

export const surfSpecificLibrary = {
  "surf-stance": {
    id: "surf-stance",
    name: "Basic Surf Stance",
    description:
      "Foundational surf-specific position that builds balance, hip mobility, and stance control.",
    equipment: "None (optional BOSU, skateboard or balance board)",
    steps: [
      "Start standing tall with feet slightly further than hip-width apart.",
      "Step one foot back into your natural surf stance.",
      "Bend both knees slightly and lower your center of gravity.",
      "Keep your chest tall and eyes forward.",
      "Point the center of your chest, and knees toward the front of the surfboard as if you were about to bound for a sprint",
      "Distribute weight evenly between front and back foot.",
      "Engage your core and maintain a neutral spine.",
      "Hold the position without collapsing inward at the knees.",
      "Practice small weight shifts using your hips forward, backward, and side-to-side while staying stable.",
    ],
    category: "surf-specific",
    muscleGroups: ["glutes", "quads", "core", "ankles", "balance"],
    difficulty: "beginner",
    videoUrl: null,
  },

  "land-surf-popup": {
    id: "land-surf-popup",
    name: "Land Surf Pop-Up",
    description:
      "Surf-specific explosive movement that trains fast hip extension, upper-body push strength, and coordinated stance landing.",
    equipment: "None (optional yoga mat)",
    steps: [
      "Start lying prone on the floor with hands under your chest like a push-up.",
      "Engage your core and keep your elbows close to your body.",
      "Press explosively through your hands as if performing a powerful push-up.",
      "Simultaneously drive your front foot forward under your body.",
      "Land with your backfoot slightly before your front foot.",
      "Land in your surf stance with knees bent and chest tall.",
      "Keep weight centered and avoid landing stiff or upright.",
      "Reset back to prone with control before repeating.",
      "Alternate stance or train your natural stance only depending on goal.",
    ],
    category: "surf-specific",
    muscleGroups: [
      "chest",
      "shoulders",
      "core",
      "hips",
      "glutes",
      "coordination",
    ],
    difficulty: "intermediate",
    videoUrl: null,
  },

  "duck-dive-drill": {
    id: "duck-dive-drill",
    name: "Duck Dive Drill",
    description:
      "This drill will sharpen your duck dives. If doing this on your foot is too difficult do them on your knees. Duck diving with the foot will allow you to get deeper under the wave for larger waves.",
    equipment: "optional: yoga mat, surfboard, balance board or bosu ball",
    steps: [
      "Start in the prone position",
      "Place your hands on the floor or grab the rails of your surfboard.",
      "Keep your elbows close to your body",
      "Kick one leg up as you get into a pike push-up position",
      "Leave a foot or knee down. Using your knee will make this drill easier.",
      "Do a dive bomber pushup in a scooping motion.",
      "Return to the pike position.",
      "Switch legs.",
    ],
    category: "surf-specific",
    muscleGroups: ["shoulders", "chest", "core"],
    difficulty: "intermediate - advanced",
    videoUrl: null,
  },

  "bosu-ball-popup": {
    id: "bosu-ball-popup",
    name: "Bosu Ball Pop-up",
    description:
      "This drill will simulate landing on an unstable surface, and will develop the stabilizers needed to pop-up easier while out surfing. This is great to practice when there are no waves, and you need to keep your pop-ups sharp.",
    equipment: "optional: yoga mat, surfboard, balance board or bosu ball",
    steps: [
      "Start in the prone position on the bosu ball chest right over the center",
      "Place your hands on the deck or grab the rails of your bosu ball.",
      "Keep your elbows tucked and close",
      "Perform an explosive pushup",
      "As you're coming up drive your front knee toward your chest",
      "Place your backfoot on the rear of the bosu ball, and your front foot right under where your chest was.",
      "Stay compressed with eyes facing forward in your surf stance.",
      "Return to the prone position",
      "Practice both sides.",
    ],
    category: "surf-specific",
    muscleGroups: ["shoulders", "chest", "core"],
    difficulty: "intermediate - advanced",
    videoUrl: null,
  },
};

export const naturalMovementLibrary = {
  "quadruped-hover-hold": {
    id: "quadruped-hover-hold",
    name: "Quadruped Hover Hold",
    description:
      "Isometric bodyweight position that builds shoulder stability, core tension, and hip control.",
    equipment: "None",
    steps: [
      "Start on all fours with hands under shoulders and knees under hips.",
      "Brace your core and keep your spine neutral.",
      "Lift your knees 1–2 inches off the ground.",
      "Press firmly through the floor and keep shoulders active.",
      "Hold without shifting weight excessively.",
      "Breathe steadily while maintaining tension.",
    ],
    category: "naturalMovement",
    muscleGroups: ["shoulders", "core", "hips", "scapular_control"],
    difficulty: "beginner",
    videoUrl: null,
  },

  "quadruped-crawl": {
    id: "quadruped-crawl",
    name: "Quadruped Crawl",
    description:
      "Dynamic crawling movement that improves coordination, shoulder endurance, and core stability.",
    equipment: "None",
    steps: [
      "Start in a quadruped hover position.",
      "Move opposite hand and foot forward together.",
      "Keep hips low and spine neutral.",
      "Take slow, controlled steps.",
      "Avoid rocking side to side.",
    ],
    category: "naturalMovement",
    muscleGroups: ["shoulders", "core", "hips", "coordination"],
    difficulty: "intermediate",
    videoUrl: null,
  },

  "reverse-tabletop-bridge": {
    id: "reverse-tabletop-bridge",
    name: "Reverse Tabletop Bridge",
    description:
      "Hip extension and shoulder opening movement that strengthens the posterior chain.",
    equipment: "None",
    steps: [
      "Sit with hands behind you and feet flat on the floor.",
      "Press through hands and heels.",
      "Lift hips until torso is parallel to the ground.",
      "Squeeze glutes at the top.",
      "Lower under control.",
    ],
    category: "naturalMovement",
    muscleGroups: ["glutes", "shoulders", "posterior_chain"],
    difficulty: "beginner",
    videoUrl: null,
  },

  "lateral-deep-squat-shift": {
    id: "lateral-deep-squat-shift",
    name: "Lateral Deep Squat Shift",
    description:
      "Dynamic squat-based movement that improves hip mobility and lateral control.",
    equipment: "None",
    steps: [
      "Lower into a deep squat with heels grounded.",
      "Shift your weight slowly toward one side.",
      "Keep chest upright and knees tracking over toes.",
      "Move smoothly from side to side.",
      "Maintain control throughout.",
    ],
    category: "naturalMovement",
    muscleGroups: ["hips", "glutes", "adductors", "ankles"],
    difficulty: "beginner",
    videoUrl: null,
  },
};

// ==================== COMBINED LIBRARY ====================
// Merge all sub-libraries into the main exerciseLibrary for backward compatibility
export const exerciseLibrary = {
  ...mobilityLibrary,
  ...shoulderLibrary,
  ...pushLibrary,
  ...pullLibrary,
  ...legsLibrary,
  ...posteriorChainLibrary,
  ...coreLibrary,
  ...surfSpecificLibrary,
  ...naturalMovementLibrary,
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
