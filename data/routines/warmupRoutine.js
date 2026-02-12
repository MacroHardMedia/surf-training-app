export const warmupRoutine = {
  title: "Surf Athlete Warm-up Routine",
  description:
    "Joint prep + mobility + light plyometrics to prime shoulders, hips, and core for strength training and surfing. Emphasis on control, range of motion, and elastic readiness.",
  difficulty: "Beginner–Intermediate",
  duration: "Use before every session (8–12 minutes)",
  instructions: [
    "Move slow and controlled on CARs (quality > quantity).",
    "Stay in pain-free ranges—no pinching or sharp pain.",
    "Keep plyometrics low volume and crisp (stop if landings get noisy/heavy).",
    "If you’re tight, spend extra time on the Mobility section and reduce plyo volume.",
  ],
  structure: {
    split: "3-part warm-up: Joint Prep → Mobility → Activation & Elastic Prep",
    weekExample: [
      "Use before every strength session and before surf if you feel stiff",
      "For power days: keep mobility brief and prioritize elastic prep",
      "For heavy strength days: emphasize joint prep + activation",
    ],
  },
  sections: [
    {
      group: "Joint Prep (CARs + Control)",
      exercises: [
        {
          name: "Shoulder CARs",
          description:
            "Slow controlled circles through the biggest pain-free range. Keep ribs down and avoid spine movement.",
          sets: 2,
          reps: "5-8 each side",
          rest: "20-30s",
        },
        {
          name: "Hip CARs",
          description:
            "Move the hip through internal/external rotation while keeping the pelvis and spine locked in place.",
          sets: 2,
          reps: "5-8 each side",
          rest: "20-30s",
        },
        {
          name: "Hip Airplanes",
          description:
            "Balance on one leg and rotate the pelvis open and closed while keeping the spine neutral. Move slowly and stay in control throughout the range.",
          sets: 2,
          reps: "3-5 each side",
          rest: "30-45s",
        },
        {
          name: "Scap Push-Ups",
          description:
            "Arms straight—move only the shoulder blades. Focus on smooth protraction and retraction.",
          sets: 2,
          reps: "8-12",
          rest: "20-30s",
        },
      ],
    },
    {
      group: "Mobility (Open + Lengthen)",
      exercises: [
        {
          name: "World’s Greatest Stretch",
          description:
            "Lunge position with elbow-to-instep, thoracic rotation, and hip opener. Breathe and move smoothly.",
          sets: 1,
          reps: "4-6 each side",
          rest: "None",
        },
        {
          name: "90/90 Hip Switches",
          description:
            "Rotate hips side-to-side under control. Stay tall through the spine and avoid rushing.",
          sets: 2,
          reps: "6-10 total",
          rest: "20-30s",
        },
        {
          name: "Hip Flexor Stretch (Couch or Half-Kneeling)",
          description:
            "Squeeze glute on the back leg and keep ribs stacked over pelvis to target hip flexor length.",
          sets: 1,
          reps: "30-45s each side",
          rest: "20s",
        },
        {
          name: "Thoracic Rotation (Open Book)",
          description:
            "Rotate through the upper back while keeping hips stacked. Smooth breathing with each rep.",
          sets: 1,
          reps: "6-8 each side",
          rest: "None",
        },
      ],
    },
    {
      group: "Activation & Stability (Prime the System)",
      exercises: [
        {
          name: "Hip Airplanes",
          description:
            "Balance on one leg, hinge slightly, and rotate the pelvis open/closed without losing alignment. Use support if needed.",
          sets: 2,
          reps: "3-5 each side",
          rest: "30-45s",
        },
        {
          name: "Glute Bridge Hold",
          description:
            "Drive through heels, squeeze glutes, and keep ribs down. Avoid low-back arching.",
          sets: 2,
          reps: "20-30s hold",
          rest: "20-30s",
        },
        {
          name: "Single-Leg Romanian Deadlift",
          description:
            "Hinge at the hips while balancing on one leg. Keep hips square, spine neutral, and tension through the hamstrings and glutes.",
          sets: 3,
          reps: "8-12 each side",
          rest: "60s",
        },
        {
          name: "Dead Bug",
          description:
            "Keep low back gently pressed into the floor. Move slow and controlled with full exhale.",
          sets: 2,
          reps: "6-10 each side",
          rest: "20-30s",
        },
      ],
    },
    {
      group: "Elastic Prep (Light Plyometrics)",
      exercises: [
        {
          name: "Pogo Hops",
          description:
            "Quick ankle rebounds with stiff, tall posture. Minimal knee bend—quiet, springy landings.",
          sets: 2,
          reps: "15-25 reps",
          rest: "30-45s",
        },
        {
          name: "Skater Hops (Low Intensity)",
          description:
            "Side-to-side hops with controlled landings. Stick each landing for a split second if needed.",
          sets: 2,
          reps: "6-10 each side",
          rest: "45-60s",
        },
        {
          name: "Snap Down to Athletic Stance",
          description:
            "Reach tall then quickly drop into an athletic stance. Train fast posture changes for pop-up readiness.",
          sets: 2,
          reps: "5-8",
          rest: "30-45s",
        },
        {
          name: "Pop-Up Burpees",
          description:
            "From a prone position, perform a fast, controlled pop-up into a surf stance. Focus on smooth hand placement, quick feet, and balanced landing.",
          sets: 2,
          reps: "5-8 reps",
          rest: "45-60s",
        },
      ],
    },
  ],
};
