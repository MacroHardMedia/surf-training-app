import { useLocalSearchParams, Stack, useRouter } from "expo-router";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { exerciseLibrary } from "../../data/exercises/exerciseLibrary";
import { exerciseCategories } from "../../data/exercises/categories";
import { muscleGroups } from "../../data/exercises/muscleGroups";
import { useTheme } from "../../contexts/ThemeContext";

export default function ExerciseDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { theme } = useTheme();
  const exercise = exerciseLibrary[id];

  if (!exercise) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Exercise not found</Text>
      </SafeAreaView>
    );
  }

  const categories = Array.isArray(exercise.category)
    ? exercise.category
    : [exercise.category];

  return (
    <>
      <Stack.Screen
        options={{
          title: exercise.name,
          headerBackTitle: "Library",
        }}
      />
      <ScrollView
        style={[styles.container, { backgroundColor: theme.background }]}
      >
        {/* Header Section */}
        <View
          style={[styles.header, { backgroundColor: theme.cardBackground }]}
        >
          <Text style={[styles.title, { color: theme.text }]}>
            {exercise.name}
          </Text>
          <View style={styles.badges}>
            <View style={[styles.badge, styles.difficultyBadge]}>
              <Text style={styles.badgeText}>{exercise.difficulty}</Text>
            </View>
          </View>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            📖 About
          </Text>
          <Text style={[styles.description, { color: theme.textSecondary }]}>
            {exercise.description}
          </Text>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: theme.text }]}>
            🏷️ Categories
          </Text>
          <View style={styles.categoryTags}>
            {categories.map((cat, idx) => (
              <View key={idx} style={styles.categoryTag}>
                <Text style={styles.categoryTagText}>
                  {exerciseCategories[cat]?.icon}{" "}
                  {exerciseCategories[cat]?.name}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Equipment */}
        {exercise.equipment && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              🏋️ Equipment
            </Text>
            <Text style={[styles.text, { color: theme.textSecondary }]}>
              {exercise.equipment}
            </Text>
          </View>
        )}

        {/* Muscle Groups */}
        {exercise.muscleGroups && exercise.muscleGroups.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              💪 Target Muscles
            </Text>
            <View style={styles.muscleGroupsContainer}>
              {exercise.muscleGroups.map((mg, idx) => (
                <View key={idx} style={styles.muscleTag}>
                  <Text style={styles.muscleTagText}>
                    {muscleGroups[mg]?.name || mg}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Steps */}
        {exercise.steps && exercise.steps.length > 0 && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              📋 How To Perform
            </Text>
            <View style={styles.stepsList}>
              {exercise.steps.map((step, idx) => (
                <View key={idx} style={styles.stepItem}>
                  <View style={styles.stepNumberContainer}>
                    <Text style={styles.stepNumber}>{idx + 1}</Text>
                  </View>
                  <Text style={[styles.stepText, { color: theme.text }]}>
                    {step}
                  </Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Video Placeholder */}
        {exercise.videoUrl && (
          <View style={styles.section}>
            <Text style={[styles.sectionTitle, { color: theme.text }]}>
              🎥 Video Tutorial
            </Text>
            <View style={styles.videoPlaceholder}>
              <Ionicons name="play-circle" size={48} color="#007AFF" />
              <Text style={styles.videoPlaceholderText}>Video coming soon</Text>
            </View>
          </View>
        )}

        <View style={{ height: 40 }} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorText: {
    fontSize: 18,
    color: "#666",
    textAlign: "center",
    marginTop: 40,
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
  },
  badges: {
    flexDirection: "row",
    gap: 8,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  difficultyBadge: {
    backgroundColor: "#e8f4ff",
  },
  badgeText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#0066cc",
    textTransform: "capitalize",
  },
  section: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
  categoryTags: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  categoryTag: {
    backgroundColor: "#f0f0f0",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  categoryTagText: {
    fontSize: 14,
    color: "#333",
  },
  muscleGroupsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  muscleTag: {
    backgroundColor: "#e8f4ff",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#b3d9ff",
  },
  muscleTagText: {
    fontSize: 14,
    color: "#0066cc",
    fontWeight: "500",
    textTransform: "capitalize",
  },
  stepsList: {
    gap: 16,
  },
  stepItem: {
    flexDirection: "row",
    gap: 12,
  },
  stepNumberContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#007AFF",
    justifyContent: "center",
    alignItems: "center",
  },
  stepNumber: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  stepText: {
    flex: 1,
    fontSize: 16,
    lineHeight: 24,
    paddingTop: 4,
  },
  videoPlaceholder: {
    backgroundColor: "#f5f5f5",
    borderRadius: 12,
    padding: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  videoPlaceholderText: {
    marginTop: 12,
    fontSize: 14,
    color: "#666",
  },
});
