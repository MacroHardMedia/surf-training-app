/**
 * EXERCISE LIBRARY - Index File
 *
 * Each sub-library lives in its own file for easier maintenance:
 *
 * - mobilityLibrary.js:        Shoulder, hip, and spinal mobility exercises
 * - pushLibrary.js:            Push-up variations and pressing movements
 * - pullLibrary.js:            Pull-up variations and pulling movements
 * - legsLibrary.js:            Squat variations and leg exercises
 * - posteriorChainLibrary.js:  Glutes, hamstrings, and posterior chain exercises
 * - coreLibrary.js:            Plank variations and core stability exercises
 * - shoulderLibrary.js:        Shoulder strength and stability exercises
 * - surfSpecificLibrary.js:    Surf-specific movements and drills
 * - naturalMovementLibrary.js: Natural movement patterns
 *
 * The main 'exerciseLibrary' export combines all sub-libraries for backward compatibility.
 *
 * Usage:
 * - Import specific library: import { mobilityLibrary } from './mobilityLibrary'
 * - Import all exercises:    import { exerciseLibrary } from './exerciseLibrary'
 * - Import multiple:         import { pushLibrary, pullLibrary } from './exerciseLibrary'
 */

export { mobilityLibrary } from "./mobilityLibrary";
export { pushLibrary } from "./pushLibrary";
export { pullLibrary } from "./pullLibrary";
export { legsLibrary } from "./legsLibrary";
export { posteriorChainLibrary } from "./posteriorChainLibrary";
export { coreLibrary } from "./coreLibrary";
export { shoulderLibrary } from "./shoulderLibrary";
export { surfSpecificLibrary } from "./surfSpecificLibrary";
export { naturalMovementLibrary } from "./naturalMovementLibrary";

import { mobilityLibrary } from "./mobilityLibrary";
import { pushLibrary } from "./pushLibrary";
import { pullLibrary } from "./pullLibrary";
import { legsLibrary } from "./legsLibrary";
import { posteriorChainLibrary } from "./posteriorChainLibrary";
import { coreLibrary } from "./coreLibrary";
import { shoulderLibrary } from "./shoulderLibrary";
import { surfSpecificLibrary } from "./surfSpecificLibrary";
import { naturalMovementLibrary } from "./naturalMovementLibrary";

// ==================== COMBINED LIBRARY ====================
// Merges all sub-libraries into one object for backward compatibility
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
