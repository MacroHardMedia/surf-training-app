const surfBeginnerMonth1 = {
  id: "month1-beginner-surf",
  title: "Beginner Surf Fitness - Month 1 (Foundation)",
  durationWeeks: 4,
  frequencyPerWeek: 3,
  recommendedDays: ["Mon", "Wed", "Fri"],
  sessionDurationMinutes: { min: 45, max: 60 },
  description:
    "Build consistency, movement quality, mobility, basic strength, surf-specific conditioning, and balance.",
  structure: {
    warmUpMinutes: { min: 5, max: 10 },
    strengthMinutes: { min: 25, max: 30 },
    conditioningMinutes: { min: 10, max: 15 },
    coolDownMinutes: { min: 5, max: 10 },
  },

  warmUp: [
    {
      type: "cardio",
      description:
        "Light cardio to raise heart rate (rowing, jump rope, light jog, or 'shadow paddling')",
      durationMinutes: 2, // suggested
    },
    {
      type: "mobilityFlow",
      description:
        "Dynamic mobility: arm circles, cat-cow, hip openers, inchworms, thoracic rotations",
      durationMinutes: 3,
    },
  ],

  workouts: {
    // Three alternating workouts A / B / C
    A: {
      name: "Workout A",
      focus: ["squat pattern", "push", "pull", "glute", "core", "balance"],
      exercises: [
        {
          name: "Squat to Box (or Bodyweight Squat)",
          sets: 3,
          reps: 10,
          notes:
            "Use a box/bench to learn depth and form. Progress to goblet squat later.",
        },
        {
          name: "Incline Push-Up",
          sets: 3,
          reps: "8-10",
          notes: "Hands on bench/wall if needed; focus on scapular control",
        },
        {
          name: "Band Row (or Seated Cable Row)",
          sets: 3,
          reps: 10,
          notes: "Squeeze shoulder blades; slow eccentric",
        },
        {
          name: "Glute Bridge (bodyweight)",
          sets: 3,
          reps: 12,
          notes: "Hold top 1s; focus on glute drive",
        },
        {
          name: "Dead Bug",
          sets: 3,
          reps: "8 per side",
          notes: "Slow, controlled core anti-extension pattern",
        },
        {
          name: "Single-Leg Stand (balance)",
          sets: 3,
          durationSeconds: "20-30",
          notes: "Progress: close eyes or increase time",
        },
      ],
    },

    B: {
      name: "Workout B",
      focus: [
        "hip hinge",
        "overhead control",
        "pull",
        "single-leg",
        "core",
        "balance",
      ],
      exercises: [
        {
          name: "Hip Hinge with Dowel (learn deadlift pattern)",
          sets: 3,
          reps: 10,
          notes: "Keep neutral spine; practice hinging at hips",
        },
        {
          name: "Half-Kneeling Overhead Press (light DB or band)",
          sets: 3,
          reps: "8 per side",
          notes: "Emphasize core stability and scapular control",
        },
        {
          name: "Lat Pulldown (or assisted band pull-up)",
          sets: 3,
          reps: 10,
          notes: "Full range, avoid shrugging",
        },
        {
          name: "Step-Ups (bodyweight onto low step)",
          sets: 3,
          reps: "8 per leg",
          notes: "Drive through heel; control descent",
        },
        {
          name: "Side Plank",
          sets: 3,
          durationSeconds: 20,
          notes: "Knees bent if needed",
        },
        {
          name: "Lunge Position Hold (balance)",
          sets: 3,
          durationSeconds: "20-30 per leg",
          notes: "Tall torso, knee aligned over foot",
        },
      ],
    },

    C: {
      name: "Workout C",
      focus: [
        "squat strength",
        "push",
        "pull",
        "glute strength",
        "core stability",
        "balance",
      ],
      exercises: [
        {
          name: "Goblet Squat (light KB/DB)",
          sets: 3,
          reps: 8,
          notes: "Keep chest up; use light load to learn movement",
        },
        {
          name: "Push-Up (modified if needed)",
          sets: 3,
          reps: "8-10",
          notes: "Knees on ground or incline to regress",
        },
        {
          name: "Dumbbell or Band Row",
          sets: 3,
          reps: 10,
          notes: "Build pulling strength for paddling",
        },
        {
          name: "Hip Thrust (bench-supported)",
          sets: 3,
          reps: 12,
          notes: "Pause top 1s; progressive load as technique permits",
        },
        {
          name: "Bird Dog",
          sets: 3,
          reps: "8 per side",
          notes: "Slow and controlled; focus on anti-rotation",
        },
        {
          name: "Single-Leg Reach (bodyweight)",
          sets: 3,
          reps: 8,
          notes: "Mini single-leg deadlift to train balance and hinge",
        },
      ],
    },
  },

  conditioningOptions: {
    description:
      "Choose one conditioning method after strength work each session to simulate paddling bursts and recovery.",
    options: [
      {
        name: "Rowing intervals",
        protocol: "20s hard / 40s easy",
        rounds: 6,
        notes: "Increase rounds to 6-8 as capacity improves",
      },
      {
        name: "Swimming intervals",
        protocol: "25m fast / 25m easy",
        rounds: 8,
        notes: "Excellent surf carryover when available",
      },
      {
        name: "Jump rope intervals",
        protocol: "30s fast / 30s rest",
        rounds: 8,
        notes: "Easy to do at home or warm-up area",
      },
    ],
  },

  coolDown: [
    {
      name: "Shoulder stretch (wall)",
      durationMinutes: 1,
      notes: "Open chest and pecs",
    },
    {
      name: "Hip flexor stretch",
      durationMinutes: 1,
      notes: "Hold 30s per side",
    },
    {
      name: "Cat-Cow + thoracic openers",
      durationMinutes: 1,
      notes: "Controlled mobility",
    },
    {
      name: "Forward fold (hamstrings)",
      durationMinutes: 1,
      notes: "Breathe into the stretch",
    },
    {
      name: "Breathing practice",
      durationMinutes: 1,
      notes: "Box breathing or cadence breathing to improve surf calmness",
    },
  ],

  progressionGuidelines: {
    principle:
      "Start with bodyweight/light load and prioritize form. Progress load, volume, or complexity every 1-2 weeks as technique and comfort improve.",
    examples: [
      "Once you can do all sets/reps with perfect form, increase load slightly (5-10%).",
      "Add 1-2 more intervals to conditioning every 2 weeks.",
      "Progress balance drills by closing eyes, reducing support, or adding hold time.",
    ],
  },

  expectationsAtEndOfMonth: [
    "Comfort with basic gym movements and improved movement quality.",
    "Noticeable improvements in balance and posture.",
    "Reduced soreness during/after surfing due to stronger hips, shoulders, and core.",
    "Improved paddling stamina and conditioning.",
    "Established a consistent training habit (3x/week).",
  ],

  safetyNotes: [
    "Always warm up before lifting and cool down after sessions.",
    "Prioritize technique; avoid heavy loads until movement quality is solid.",
    "Allow rest and recovery—do not train to failure as a beginner.",
    "If you have pre-existing injuries or medical conditions, consult a healthcare professional before starting.",
  ],

  extrasToEnhanceProgram: {
    mobilityAndFlexibility: [
      "Dedicated short daily mobility routine (5-10 min) for hips, thoracic spine, and shoulders.",
    ],
    breathWork: [
      "Weekly apnea/breath-hold practice or cadence breathing drills.",
    ],
    proprioception: [
      "Incorporate a balance board or regular single-leg stability progressions.",
    ],
    nutritionBasics: [
      "Focus on hydration, balanced meals with adequate protein, and recovery fueling post-workout.",
    ],
    mindsetAndTracking: [
      "Keep a simple log (date, workout done, RPE, notes) and set small weekly goals.",
    ],
  },
};

export default surfBeginnerMonth1;
