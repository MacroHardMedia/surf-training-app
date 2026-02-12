export const surfMonth3 = {
  title: "Power Generation",
  description:
    "Explosive surf performance session combining strength + plyometrics, animal flow movement, surf-specific core, and optional Tabata finisher.",
  difficulty: "Intermediate",
  duration: "45–60 min",
  instructions: [
    "Alternate between A and B blocks on workout days.",
    "Power work first: stop if you lose speed or crisp landings.",
    "Strength sets should feel heavy but clean (leave 1–2 reps in reserve).",
    "Keep rest periods honest—this is performance training, not fatigue training.",
    "Optional Tabata is only if athlete feels good and recovery is strong.",
  ],
  sections: [
    {
      group: "Warm-up",
      exercises: [
        {
          name: "Jump Rope",
          description:
            "Light, rhythmic jumps emphasizing quick ankles, upright posture, and relaxed shoulders.",
          sets: 2,
          reps: "30–60s",
          tempo: "Rhythmic",
          rest: "30s",
        },
        {
          name: "Shoulder CARs",
          description:
            "Slow shoulder circles through pain-free range. Keep ribs down and spine neutral.",
          sets: 2,
          reps: "5–8 each side",
          tempo: "Slow and controlled",
          rest: "30s",
        },
        {
          name: "Hip CARs",
          description:
            "Controlled hip circles focusing on rotation and pelvic control.",
          sets: 2,
          reps: "5–8 each side",
          tempo: "Slow and controlled",
          rest: "30s",
        },
        {
          name: "World’s Greatest Stretch",
          description:
            "Deep lunge with elbow-to-instep and thoracic rotation. Smooth breathing.",
          sets: 2,
          reps: "4–6 each side",
          tempo: "Controlled",
          rest: "30s",
        },
        {
          name: "Beast Hold (Animal Flow)",
          description:
            "Hands under shoulders, knees under hips, hover knees 1–2 inches off floor. Brace core and pack shoulders.",
          sets: 2,
          reps: "20–30s hold",
          tempo: "Isometric",
          rest: "30s",
        },
        {
          name: "Crab Reach (Animal Flow)",
          description:
            "Open hips and shoulders. Drive through hand/foot and reach up and back.",
          sets: 2,
          reps: "4–6 each side",
          tempo: "Smooth",
          rest: "30s",
        },
        {
          name: "Pogo Hops",
          description:
            "Quick ankle rebounds—tall posture, minimal knee bend, quiet landings.",
          sets: 2,
          reps: "15–25 reps",
          tempo: "Explosive",
          rest: "45s",
        },
      ],
    },

    {
      program: "A",
      group: "(A) Power Surf Combo Block",
      exercises: [
        {
          name: "Goblet Squat",
          description:
            "Heavy but clean squat reps. Full range of motion, core braced, knees track over toes.",
          sets: 4,
          reps: "4–6",
          rest: "2 min",
          pairId: "a-pair-1",
        },
        {
          name: "Box Jumps",
          description:
            "Explode up, land quietly, step down. Stop if jump height or speed drops.",
          sets: 4,
          reps: "3–5",
          rest: "90s",
          pairId: "a-pair-1",
        },
        {
          name: "Romanian Deadlift",
          description:
            "Hip hinge strength—neutral spine, big hamstring stretch, squeeze glutes at top.",
          sets: 3,
          reps: "4–6",
          rest: "2–3 min",
          pairId: "a-pair-2",
        },
        {
          name: "Kettlebell Swings",
          description:
            "Explosive hip hinge power. Snap the hips forward, keep a neutral spine, and let the bell float—do not squat the swing.",
          sets: 3,
          reps: "10-20 reps",
          rest: "60-90s",
          pairId: "a-pair-2",
        },
        {
          name: "Overhead Press",
          description:
            "Vertical pressing strength with stacked posture. Avoid flared ribs.",
          sets: 3,
          reps: "5–8",
          rest: "90s",
          pairId: "a-pair-3",
        },
        {
          name: "Medicine Ball Slams",
          description:
            "Explosive total-body power. Slam hard, stay athletic, reset fast.",
          sets: 3,
          reps: "6–10",
          rest: "60–90s",
          pairId: "a-pair-3",
        },
      ],
    },

    {
      program: "B",
      group: "(B) Power Surf Combo Block",
      exercises: [
        {
          name: "Bulgarian Split Squat",
          description:
            "Unilateral strength for surf stance stability. Stay tall and controlled through full range.",
          sets: 3,
          reps: "6–8 each leg",
          rest: "90s",
          pairId: "b-pair-1",
        },
        {
          name: "Skater Hops",
          description:
            "Explosive lateral power. Stick landings quietly and maintain athletic posture.",
          sets: 3,
          reps: "4–6 each side",
          rest: "60–90s",
          pairId: "b-pair-1",
        },
        {
          name: "Kettlebell Deadlift",
          description:
            "Posterior chain strength with perfect hinge mechanics. Drive through heels and squeeze glutes.",
          sets: 4,
          reps: "4–6",
          rest: "2 min",
          pairId: "b-pair-2",
        },
        {
          name: "Tuck Jumps",
          description:
            "Explosive vertical power. Jump fast, land soft, reset between reps.",
          sets: 4,
          reps: "3–5",
          rest: "90s",
          pairId: "b-pair-2",
        },
        {
          name: "Ring Row (Hard Angle)",
          description:
            "Upper-back strength and scap control. Pull chest to rings, squeeze at the top.",
          sets: 3,
          reps: "6–10",
          rest: "90s",
          pairId: "b-pair-3",
        },
        {
          name: "Medicine Ball Rotational Throw",
          description:
            "Rotate aggressively and throw with intent. Control the reset—train surf turning power.",
          sets: 3,
          reps: "6–8 each side",
          rest: "60–90s",
          pairId: "b-pair-3",
        },
      ],
    },

    {
      group: "Core Training",
      exercises: [
        {
          name: "Pallof Press",
          description:
            "Anti-rotation strength to stabilize trunk during turns and stance changes.",
          sets: 3,
          reps: "10–12 each side",
          rest: "30s",
        },
        {
          name: "Standing Cable or Band Rotation",
          description:
            "Powerful rotation with controlled return—turns and drive transfer for surfing.",
          sets: 3,
          reps: "8–10 each side",
          rest: "45s",
        },
        {
          name: "Side Plank",
          description:
            "QL endurance and lateral core stability for surf stance control.",
          sets: 2,
          reps: "30–45s each side",
          rest: "30s",
        },
      ],
    },

    {
      group: "Optional Finisher (HIIT Tabata)",
      exercises: [
        {
          name: "Tabata: Pop-Up Burpees",
          description:
            "20s ON / 10s OFF x 8 rounds. Crisp pop-ups into surf stance—stop if form breaks.",
          sets: 1,
          reps: "4 minutes total",
          rest: "None",
        },
      ],
    },

    {
      group: "Cooldown (Mobility Reset)",
      exercises: [
        {
          name: "90/90 Hip Stretch",
          description:
            "Rotate hips side-to-side with controlled transitions and tall posture.",
          sets: 2,
          reps: "6–10 transitions",
          rest: "20–30s",
        },
        {
          name: "Child’s Pose to Downward Dog",
          description:
            "Full-body recovery flow for hips, shoulders, and spine.",
          sets: 2,
          reps: "5–8 transitions",
          rest: "20–30s",
        },
      ],
    },
  ],
};
