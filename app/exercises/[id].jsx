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
import { useMemo } from "react";

export default function ExerciseDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const { theme } = useTheme();
  const exercise = exerciseLibrary[id];
  const styles = useMemo(() => getStyles(theme), [theme]);

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
      <ScrollView style={styles.container}>
        {/* Header Section */}
        <View style={styles.header}>
          <Text style={styles.title}>{exercise.name}</Text>
          <View style={styles.badges}>
            <View style={[styles.badge, styles.difficultyBadge]}>
              <Text style={styles.badgeText}>{exercise.difficulty}</Text>
            </View>
          </View>
        </View>

        {/* Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>📖 About</Text>
          <Text style={styles.description}>{exercise.description}</Text>
        </View>

        {/* Categories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🏷️ Categories</Text>
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
            <Text style={styles.sectionTitle}>🏋️ Equipment</Text>
            <Text style={styles.text}>
              {Array.isArray(exercise.equipment)
                ? exercise.equipment.join(", ")
                : exercise.equipment}
            </Text>
          </View>
        )}

        {/* Muscle Groups */}
        {exercise.muscleGroups && exercise.muscleGroups.length > 0 && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>💪 Target Muscles</Text>
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
            <Text style={styles.sectionTitle}>📋 How To Perform</Text>
            <View style={styles.stepsList}>
              {exercise.steps.map((step, idx) => (
                <View key={idx} style={styles.stepItem}>
                  <View style={styles.stepNumberContainer}>
                    <Text style={styles.stepNumber}>{idx + 1}</Text>
                  </View>
                  <Text style={styles.stepText}>{step}</Text>
                </View>
              ))}
            </View>
          </View>
        )}

        {/* Video Placeholder */}
        {exercise.videoUrl && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>🎥 Video Tutorial</Text>
            <View style={styles.videoPlaceholder}>
              <Ionicons
                name="play-circle"
                size={48}
                color={theme.colors.primary}
              />
              <Text style={styles.videoPlaceholderText}>Video coming soon</Text>
            </View>
          </View>
        )}

        <View style={{ height: 40 }} />
      </ScrollView>
    </>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
    errorText: {
      fontSize: 18,
      color: theme.colors.textSecondary,
      textAlign: "center",
      marginTop: 40,
    },
    header: {
      padding: 20,
      backgroundColor: theme.colors.card,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    title: {
      fontSize: 28,
      fontWeight: "bold",
      marginBottom: 12,
      color: theme.colors.text,
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
      backgroundColor: theme.colors.primaryLight,
    },
    badgeText: {
      fontSize: 12,
      fontWeight: "600",
      color: theme.colors.primaryDark,
      textTransform: "capitalize",
    },
    section: {
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: "600",
      marginBottom: 12,
      color: theme.colors.text,
    },
    description: {
      fontSize: 16,
      lineHeight: 24,
      color: theme.colors.textSecondary,
    },
    text: {
      fontSize: 16,
      lineHeight: 24,
      color: theme.colors.textSecondary,
    },
    categoryTags: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 8,
    },
    categoryTag: {
      backgroundColor: theme.colors.backgroundSecondary,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 16,
    },
    categoryTagText: {
      fontSize: 14,
      color: theme.colors.text,
    },
    muscleGroupsContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 8,
    },
    muscleTag: {
      backgroundColor: theme.colors.primaryLight,
      paddingHorizontal: 12,
      paddingVertical: 6,
      borderRadius: 16,
      borderWidth: 1,
      borderColor: theme.colors.primary + "40",
    },
    muscleTagText: {
      fontSize: 14,
      color: theme.colors.primaryDark,
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
      backgroundColor: theme.colors.primary,
      justifyContent: "center",
      alignItems: "center",
    },
    stepNumber: {
      fontSize: 16,
      fontWeight: "600",
      color: theme.colors.primaryText,
    },
    stepText: {
      flex: 1,
      fontSize: 16,
      lineHeight: 24,
      paddingTop: 4,
      color: theme.colors.text,
    },
    videoPlaceholder: {
      backgroundColor: theme.colors.backgroundSecondary,
      borderRadius: 12,
      padding: 40,
      alignItems: "center",
      justifyContent: "center",
    },
    videoPlaceholderText: {
      marginTop: 12,
      fontSize: 14,
      color: theme.colors.textSecondary,
    },
  });
