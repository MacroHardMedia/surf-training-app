import { exerciseLibrary } from "../exercises/exerciseLibrary";

const buildExercise = ({ exerciseId, ...prescription }) => {
  const libraryExercise = exerciseId ? exerciseLibrary[exerciseId] : null;

  return {
    ...(libraryExercise ?? {}),
    exerciseId: exerciseId ?? null,
    ...prescription,
  };
};

export const surfMonth1 = {
  title: "Foundation",
  description:
    "This block will build your base to be able to perform more challenging exercises in the future!",
  difficulty: "Beginner",
  duration: "Atleast 4 weeks, 3-4 sessions per week",
  instructions: [
    "Always warm up to avoid injuries and to prime your body.",
    "Listen to your body and allow adequate recovery between sessions",
    "Focus on form first",
    "Challenge yourself. Make sure the weihgt you're using is heavy enough to challenege you while maintaining correct form.",
  ],
  section: {
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
        buildExercise({
          exerciseId: "shoulder-cars",
          sets: 2,
          reps: "5–8 each side",
          tempo: "Slow and controlled",
          rest: "30s",
        }),
        buildExercise({
          exerciseId: "hip-cars",
          sets: 2,
          reps: "5–8 each side",
          tempo: "Slow and controlled",
          rest: "30s",
        }),
        buildExercise({
          exerciseId: "scap-push-up",
          sets: 2,
          reps: "8–12",
          tempo: "2s up / 2s down",
          rest: "30s",
        }),
        buildExercise({
          exerciseId: "worlds-greatest-stretch",
          sets: 2,
          reps: "4–6 each side",
          tempo: "Controlled",
          rest: "30s",
        }),
        buildExercise({
          exerciseId: "quadruped-hover-hold",
          name: "Beast Hold (Animal Flow)",
          sets: 2,
          reps: "20–30s hold",
          tempo: "Isometric",
          rest: "30s",
        }),
        buildExercise({
          exerciseId: "reverse-tabletop-bridge",
          name: "Crab Reach (Animal Flow)",
          sets: 2,
          reps: "4–6 each side",
          tempo: "Smooth",
          rest: "30s",
        }),
        buildExercise({
          exerciseId: null,
          name: "Jump Rope",
          description:
            "Light, rhythmic jumps emphasizing quick ankles, upright posture, and relaxed shoulders.",
          category: "cardio",
          muscleGroups: ["calves", "cardio"],
          difficulty: "beginner",
          sets: 2,
          reps: "30–60s",
          tempo: "Rhythmic",
          rest: "30s",
        }),
        buildExercise({
          exerciseId: null,
          name: "Pogo Hops",
          description:
            "Quick ankle rebounds—tall posture, minimal knee bend, quiet landings.",
          category: "plyometric",
          muscleGroups: ["calves", "ankles", "power"],
          difficulty: "beginner",
          sets: 2,
          reps: "15–25 reps",
          tempo: "Explosive",
          rest: "45s",
        }),
      ],
    },

    {
      program: "A",
      group: "Day A: Movement Foundations",
      exercises: [
        buildExercise({
          exerciseId: "squats",
          name: "Box Squats",
          sets: 3,
          reps: "8-12",
          rest: "60s",
          progression:
            "Progress by lowering box height or adding load once control and depth are consistent.",
        }),
        buildExercise({
          exerciseId: "push-ups",
          sets: 3,
          reps: "8-12",
          rest: "60s",
          progression:
            "Progress from incline to different push-up variations before adding tempo or repetitions.",
        }),
        buildExercise({
          exerciseId: "single-arm-cable-row",
          name: "Dumbbell Row",
          equipment: "Dumbbell",
          sets: 3,
          reps: "8-12 each side",
          rest: "90s",
          progression:
            "Increase load gradually or add a brief pause at the top while maintaining strict form.",
        }),
        buildExercise({
          exerciseId: "suitcase-deadlift",
          name: "Kettlebell Deadlift",
          sets: 3,
          reps: "12-15",
          rest: "45s",
          progression:
            "Progress to Romanian deadlifts once spinal control is consistent.",
        }),
      ],
    },
    {
      program: "B",
      group: "Day B: Movement Foundations",
      exercises: [
        buildExercise({
          exerciseId: null,
          name: "Split Squat",
          description:
            "Build unilateral leg strength, hip stability, and balance for improved board control.",
          category: "legs",
          muscleGroups: ["legs", "hips", "balance", "unilateral_strength"],
          difficulty: "beginner",
          sets: 3,
          reps: "8-12 each leg",
          rest: "60s",
          progression:
            "Progress to goblet split squats or Bulgarian split squats.",
        }),
        buildExercise({
          exerciseId: "dumbbell-overhead-press",
          name: "Overhead Press",
          sets: 3,
          reps: "6-10",
          rest: "75-90s",
          progression:
            "Start with dumbbells for control, then progress load only while maintaining rib-down, neutral posture.",
        }),
        buildExercise({
          exerciseId: "pull-up",
          sets: 3,
          reps: "6-8 each side",
          rest: "90s",
          progression:
            "Slow the eccentric or add a pause before increasing reps.",
        }),
        buildExercise({
          exerciseId: "single-leg-rdl",
          name: "Single-Leg Romanian Deadlift",
          sets: 3,
          reps: "8-12",
          rest: "60s",
          progression:
            "Add load only once balance and spinal control are consistent.",
        }),
      ],
    },
    {
      group: "Core & Stability",
      exercises: [
        buildExercise({
          exerciseId: null,
          name: "Dead Bug",
          description:
            "Train rectus abdominis control and anti-extension while coordinating opposite limbs.",
          category: "core",
          muscleGroups: ["rectus_abdominis", "anti_extension", "coordination"],
          difficulty: "beginner",
          sets: 3,
          reps: "8-12 each side",
          rest: "30s",
          progression:
            "Slow the tempo or extend the legs lower once spinal control is maintained.",
        }),
        buildExercise({
          exerciseId: null,
          name: "Side Plank",
          description:
            "Develop isometric lateral core strength and quadratus lumborum (QL) endurance.",
          category: "core",
          muscleGroups: ["QL", "anti_lateral_flexion", "isometric"],
          difficulty: "beginner",
          sets: 3,
          reps: "20-40s each side",
          rest: "30s",
          progression:
            "Progress by lifting the top leg or extending hold duration.",
        }),
        buildExercise({
          exerciseId: null,
          name: "Pallof Press",
          description:
            "Build anti-rotation strength to improve trunk stability during dynamic movements.",
          category: "core",
          muscleGroups: ["anti_rotation", "core_stability"],
          difficulty: "beginner",
          sets: 3,
          reps: "10-12 each side",
          rest: "30s",
          progression:
            "Increase band tension or add a pause at full extension.",
        }),
        buildExercise({
          exerciseId: null,
          name: "Standing Cable or Band Rotation",
          description:
            "Develop controlled trunk rotation and transverse plane strength for surfing movements.",
          category: "core",
          muscleGroups: ["rotation", "obliques", "power_control"],
          difficulty: "beginner",
          sets: 3,
          reps: "8-12 each side",
          rest: "30s",
          progression: "Slow the eccentric phase before increasing resistance.",
        }),
        buildExercise({
          exerciseId: "plank",
          name: "Front Plank",
          sets: 2,
          reps: "30-60s",
          rest: "45s",
          progression:
            "Add shoulder taps or increase hold time once alignment is consistent.",
        }),
      ],
    },
  ],
};
