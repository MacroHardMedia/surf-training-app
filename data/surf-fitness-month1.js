export const surfMonth1 = {
  title: "Month 1: Foundation",
  description:
    "Build basic strength, mobility, and surf-specific movement patterns.",
  difficulty: "Beginner",
  duration: "Atleast 4 weeks, 3-4 sessions per week",
  instructions: [
    "Form over how much weight you can do",
    "Start with bodyweight movements and progress with resistance when the exercise is too easy.",
    "Always warm up to avoid injuries and to prime your body.",
    "Listen to your body and allow adequate recovery between sessions",
    "Aim for consistency.",
    "Challenge yourself.",
  ],
  structure: {
    split: "Full body sessions with movement pattern focus",
    weekExample: [
      "Mon — Workout A",
      "Tue — Cardio, mobility and/or surf",
      "Wed — Workout B",
      "Thu — Mobility or cardio and/or surf",
      "Fri — Workout A",
      "Sat — Mobility or cardio and/or surf",
      "Sun — Rest",
    ],
  },
  sections: [
    {
      group: "Warm-up",
      exercises: [
        {
          name: "Shoulder CARs",
          description:
            "Perform slow, controlled circular movements through the largest pain-free range of motion. Keep ribs down and spine neutral while maintaining tension through the arm.",
          sets: 2,
          reps: "5–8 each side",
          tempo: "Slow and controlled",
          rest: "30–45s",
        },
        {
          name: "Hip CARs",
          description:
            "Move the hip through full internal and external rotation while locking the pelvis and spine in place. Emphasize control through weak or restricted ranges.",
          sets: 2,
          reps: "5–8 each side",
          tempo: "Slow and controlled",
          rest: "30–45s",
        },
        {
          name: "Scap Push-Ups",
          description:
            "Keep arms straight and move only through the shoulder blades. Emphasize protraction and retraction control.",
          sets: 2,
          reps: "8–12 reps",
          tempo: "2s up / 2s down",
          rest: "30s",
        },
        {
          name: "World’s Greatest Stretch",
          description:
            "Step into a deep lunge, reach elbow toward the instep, then rotate the torso upward. Focus on smooth movement and controlled breathing.",
          sets: 2,
          reps: "4–6 each side",
          tempo: "Controlled",
          rest: "30s",
        },
        {
          name: "Pop-up Burpee",
          description:
            "Practice the surf pop-up movement slowly and controlled. Focus on a smooth movement.",
          sets: "3",
          reps: "5-8 Each side",
          rest: "60s",
        },
        {
          name: "Jump Rope",
          description:
            "Light, rhythmic jumps emphasizing quick ankles, upright posture, and relaxed shoulders.",
          sets: 2,
          reps: "30–60s",
          tempo: "Rhythmic",
          rest: "30s",
        },
      ],
    },

    {
      program: "A",
      group: "Day A: Movement Foundations",
      exercises: [
        {
          name: "Squats",
          description:
            "Build foundational leg strength, hip mobility, and squat mechanics using full, controlled range of motion. Don't let the knees cave in.",
          focus: ["legs", "hips", "mobility", "posture"],
          sets: 3,
          reps: "10-15",
          rest: "60s",
          progression:
            "Progress to weighted squats once full depth, form is perfect, and too easy.",
        },
        {
          name: "Push-Up",
          description:
            "Develop upper-body pushing strength and trunk stability to support strong pop-ups.",
          focus: ["chest", "shoulders", "core", "trunk_stability"],
          sets: 3,
          reps: "8-12",
          rest: "60s",
          progression:
            "Progress from incline to diamond push-ups before adding tempo or repetitions.",
        },
        {
          name: "Ring Row",
          description:
            "Strengthen the upper back and shoulders to improve paddling endurance and shoulder health.",
          focus: ["upper_back", "lats", "scapular_control"],
          sets: 3,
          reps: "5-10",
          rest: "90s",
          progression:
            "Increase body angle or add a pause at the top before increasing reps.",
        },
        {
          name: "Kettlebell Deadlift",
          description:
            "Activate glutes and strengthen the posterior chain while reinforcing proper hip hinge mechanics.",
          focus: ["glutes", "hamstrings", "posterior_chain", "spine_control"],
          sets: 3,
          reps: "12-15",
          rest: "45s",
          progression:
            "Progress to Romanian deadlifts once spinal control is consistent.",
        },
      ],
    },
    {
      program: "B",
      group: "Day B: Movement Foundations",
      exercises: [
        {
          name: "Split Squat",
          description:
            "Build unilateral leg strength, hip stability, and balance for improved board control.",
          focus: ["legs", "hips", "balance", "unilateral_strength"],
          sets: 3,
          reps: "8-12 each leg",
          rest: "60s",
          progression:
            "Progress to goblet split squats or Bulgarian split squats.",
        },
        {
          name: "Overhead Press",
          description:
            "Build vertical pushing strength and shoulder stability while maintaining a braced core and stacked posture.",
          focus: ["shoulders", "upper_body", "core", "trunk_stability"],
          sets: 3,
          reps: "6-10",
          rest: "75-90s",
          progression:
            "Start with dumbbells for control, then progress load only while maintaining rib-down, neutral posture.",
        },
        {
          name: "Pull-up",
          description:
            "Improve unilateral pulling strength and shoulder stability to balance paddling mechanics.",
          focus: ["upper_back", "lats", "scapular_stability"],
          sets: 3,
          reps: "6-8 each side",
          rest: "90s",
          progression:
            "Slow the eccentric or add a pause before increasing reps.",
        },
        {
          name: "Single-Leg Romanian Deadlift",
          description:
            "Reinforce hip dominance, balance, and posterior-chain control through single-leg loading.",
          focus: ["glutes", "hamstrings", "balance", "posterior_chain"],
          sets: 3,
          reps: "8-12",
          rest: "60s",
          progression:
            "Add load only once balance and spinal control are consistent.",
        },
      ],
    },
    {
      group: "Core & Stability",
      exercises: [
        {
          name: "Dead Bug",
          description:
            "Train rectus abdominis control and anti-extension while coordinating opposite limbs.",
          focus: ["rectus_abdominis", "anti_extension", "coordination"],
          sets: 3,
          reps: "8-12 each side",
          rest: "30s",
          progression:
            "Slow the tempo or extend the legs lower once spinal control is maintained.",
        },
        {
          name: "Side Plank",
          description:
            "Develop isometric lateral core strength and quadratus lumborum (QL) endurance.",
          focus: ["QL", "anti_lateral_flexion", "isometric"],
          sets: 3,
          reps: "20-40s each side",
          rest: "30s",
          progression:
            "Progress by lifting the top leg or extending hold duration.",
        },
        {
          name: "Pallof Press",
          description:
            "Build anti-rotation strength to improve trunk stability during dynamic movements.",
          focus: ["anti_rotation", "core_stability"],
          sets: 3,
          reps: "10-12 each side",
          rest: "30s",
          progression:
            "Increase band tension or add a pause at full extension.",
        },
        {
          name: "Standing Cable or Band Rotation",
          description:
            "Develop controlled trunk rotation and transverse plane strength for surfing movements.",
          focus: ["rotation", "obliques", "power_control"],
          sets: 3,
          reps: "8-12 each side",
          rest: "30s",
          progression: "Slow the eccentric phase before increasing resistance.",
        },
        {
          name: "Front Plank",
          description:
            "Reinforce isometric core endurance and anti-extension strength.",
          focus: ["rectus_abdominis", "isometric", "anti_extension"],
          sets: 2,
          reps: "30-60s",
          rest: "45s",
          progression:
            "Add shoulder taps or increase hold time once alignment is consistent.",
        },
      ],
    },
  ],
};
