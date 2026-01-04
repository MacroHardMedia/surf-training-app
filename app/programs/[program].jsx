import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { programsData } from "../../data/index";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import Spacer from "../../components/Spacer";

export default function ProgramDetail() {
  // Gets program name from URL
  const { program } = useLocalSearchParams();
  const router = useRouter();

  // Look up the program data
  const currentProgram = programsData[program];

  // Helper function for arrays

  const toArray = (v) =>
    Array.isArray(v)
      ? v
      : v
      ? String(v)
          .split(/\n/)
          .map((s) => s.trim())
          .filter(Boolean)
      : [];

  if (!currentProgram || currentProgram.isCustomPage) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={[styles.headerTitle]}>Program Not Found</Text>
        </View>
        <Text style={styles.errorText}>
          Hang tight! This section is under construction 🤙
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with back button */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.back()}
          style={styles.backButton}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{currentProgram.title}</Text>
      </View>

      <ScrollView style={styles.content}>
        {/* Program Info */}
        <View style={[styles.programInfo, { paddingBottom: 10 }]}>
          <Text style={[styles.programDescription, { paddingBottom: 10 }]}>
            {currentProgram.description}
          </Text>

          {currentProgram.instructions && (
            <View style={[styles.instructionList, { paddingBottom: 10 }]}>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", marginBottom: 10 }}
              >
                What to know:
              </Text>
              {(Array.isArray(currentProgram.instructions)
                ? currentProgram.instructions
                : currentProgram.instructions.split(/\n+/)
              ).map((item, i) => (
                <View key={`instr-${i}`} style={[styles.bulletItem]}>
                  <Text style={styles.bullet}>•</Text>
                  <Text style={styles.bulletText}>{String(item).trim()}</Text>
                </View>
              ))}
            </View>
          )}

          {/* Weekly Split */}
          {currentProgram.structure?.split && (
            <Text style={[styles.structureText, { paddingBottom: 10 }]}>
              {currentProgram.structure.split}
            </Text>
          )}

          {/* Weekly Program */}
          {currentProgram.structure?.weekExample && (
            <View style={styles.structureList}>
              <Text
                style={{ fontSize: 15, fontWeight: "bold", marginBottom: 10 }}
              >
                Week Example:
              </Text>
              {(Array.isArray(currentProgram.structure.weekExample)
                ? currentProgram.structure.weekExample
                : currentProgram.structure.split(/\n+/)
              ).map((item, i) => (
                <View key={`instr-${i}`} style={[styles.bulletItem]}>
                  <Text style={styles.structureText}>
                    {String(item).trim()}
                  </Text>
                </View>
              ))}
            </View>
          )}

          {currentProgram.duration && (
            <Text style={styles.programDuration}>
              {currentProgram.duration}
            </Text>
          )}

          {currentProgram.difficulty && (
            <Text style={styles.programDifficulty}>
              Difficulty: {currentProgram.difficulty}
            </Text>
          )}
        </View>

        {/* Exercise Sections */}
        {currentProgram.sections &&
          currentProgram.sections.map((section, sectionIndex) => (
            <View key={sectionIndex} style={styles.exerciseSection}>
              <Text style={styles.sectionTitle}>{section.group}</Text>

              {section.exercises.map((exercise, exerciseIndex) => (
                <View key={exerciseIndex} style={styles.exerciseCard}>
                  <Text style={styles.exerciseName}>{exercise.name}</Text>
                  <Text style={styles.exerciseDescription}>
                    {exercise.description}
                  </Text>

                  {/* Steps */}
                  {Array.isArray(exercise.steps) && (
                    <View style={styles.stepList}>
                      {exercise.steps.map((step, sIdx) => (
                        <View
                          key={`step-${exerciseIndex}-${sIdx}`}
                          style={styles.stepItem}
                        >
                          <Text style={styles.stepIndex}>{sIdx + 1}.</Text>
                          <Text style={styles.stepText}>
                            {String(step).trim()}
                          </Text>
                        </View>
                      ))}
                    </View>
                  )}

                  <Text style={styles.exerciseReps}>Reps: {exercise.reps}</Text>
                  <Text style={styles.exerciseSets}>Sets: {exercise.sets}</Text>
                  {exercise.progression && (
                    <Text style={styles.exerciseProgression}>
                      📈 Progression: {exercise.progression}
                    </Text>
                  )}
                  {exercise.tips && (
                    <Text style={styles.exerciseTips}>💡 {exercise.tips}</Text>
                  )}
                </View>
              ))}
            </View>
          ))}

        {/* General Tips Section */}
        {currentProgram.tips && (
          <View style={styles.tipsSection}>
            <Text style={styles.sectionTitle}>General Tips</Text>
            {currentProgram.tips.map((tip, index) => (
              <View key={index} style={styles.tipItem}>
                <Ionicons name="bulb" size={16} color="#FFD700" />
                <Text style={styles.tipText}>{tip}</Text>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  backButton: { marginRight: 16 },
  headerTitle: {
    fontSize: 23,
    fontWeight: "bold",
    flex: 1,
    color: "#2a2a2aff",
    textAlign: "center",
  },
  programInfo: {
    padding: 16,
  },
  programDescription: {
    fontSize: 16,
    fontWeight: "bold",
  },
  programDuration: {
    fontSize: 14,
    marginTop: 10,
    fontWeight: "bold",
  },
  programDifficulty: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#6a6a6aff",
  },
  programInstructions: {
    marginTop: 8,
    fontSize: 14,
    color: "#444",
  },
  stepList: { marginTop: 8 },
  stepItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 6,
  },
  stepIndex: {
    width: 22,
    fontSize: 15,
    fontWeight: "700",
    color: "#444",
    marginRight: 6,
    textAlign: "right",
    lineHeight: 20,
  },
  stepText: {
    flex: 1,
    fontSize: 14,
    color: "#444",
    lineHeight: 20,
  },
  bulletItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingRight: 5,
  },
  bullet: {
    width: 18,
    fontSize: 16,
    lineHeight: 20,
    color: "#333",
  },
  bulletText: {
    flex: 1,
    fontSize: 14,
    lineHeight: 20,
    color: "#444",
  },
  content: { flex: 1 },
  errorText: {
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
    color: "#666",
    padding: 15,
  },
  exerciseSection: {
    padding: 16,
    backgroundColor: "#f9f9f9",
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
    color: "#007AFF",
  },
  exerciseCard: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#007AFF",
  },
  exerciseName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 4,
  },
  exerciseDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 6,
  },
  exerciseReps: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#007AFF",
    marginBottom: 6,
  },
  exerciseSets: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#007bffff",
    marginBottom: 6,
  },
  exerciseProgression: {
    fontSize: 13,
    color: "#28a745",
    fontWeight: "600",
    marginTop: 4,
    marginBottom: 6,
    lineHeight: 18,
  },
  exerciseTips: {
    fontSize: 12,
    color: "#888",
    fontStyle: "italic",
  },
  tipsSection: {
    padding: 16,
    backgroundColor: "#fff",
  },
  tipItem: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginBottom: 8,
    gap: 8,
  },
  tipText: {
    flex: 1,
    fontSize: 14,
    color: "#666",
  },
});
