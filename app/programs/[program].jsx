import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { programsData } from "../../data/index";
import { Ionicons } from "@expo/vector-icons";
import Spacer from "../../components/Spacer";

export default function ProgramDetail() {
  // Gets program name from URL
  const { program } = useLocalSearchParams();
  const router = useRouter();

  // Look up the program data
  const currentProgram = programsData[program];

  if (!currentProgram) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={[styles.headerTitle]}>Program Not Found</Text>
        </View>
        <Text style={styles.errorText}>
          Hang tight! We're still working on this section 🤙
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
        <View style={styles.programInfo}>
          <Text style={styles.programDescription}>
            {currentProgram.description}
          </Text>
          <Spacer />
          <Text style={styles.programDifficulty}>
            {currentProgram.instructions}
          </Text>
          <Spacer />
          <Text style={styles.programDuration}>
            Duration: {currentProgram.duration}
          </Text>
          <Text style={styles.programDifficulty}>
            Difficulty: {currentProgram.difficulty}
          </Text>
        </View>

        {/* Exercise Sections */}
        {currentProgram.sections &&
          currentProgram.sections.map((section, sectionIndex) => (
            <View key={sectionIndex} style={styles.exerciseSection}>
              <Text style={styles.sectionTitle}>{section.bodyPart}</Text>

              {section.exercises.map((exercise, exerciseIndex) => (
                <View key={exerciseIndex} style={styles.exerciseCard}>
                  <Text style={styles.exerciseName}>{exercise.name}</Text>
                  <Text style={styles.exerciseDescription}>
                    {exercise.description}
                  </Text>
                  <Text style={styles.exerciseReps}>{exercise.reps}</Text>
                  <Text style={styles.exerciseTips}>💡 {exercise.tips}</Text>
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
  },
  programInstructions: {
    marginTop: 8,
    fontSize: 14,
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
