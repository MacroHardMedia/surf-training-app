import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";
import { exerciseLibrary } from "../../data/exercises/exerciseLibrary";
import { exerciseCategories } from "../../data/exercises/categories";
import { muscleGroups } from "../../data/exercises/muscleGroups";
import { useTheme } from "../../contexts/ThemeContext";

export default function LibraryTab() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { theme } = useTheme();

  const allExercises = Object.values(exerciseLibrary);

  const filteredExercises = allExercises.filter((exercise) => {
    const matchesSearch =
      searchQuery === "" ||
      exercise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exercise.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" ||
      (Array.isArray(exercise.category)
        ? exercise.category.includes(selectedCategory)
        : exercise.category === selectedCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <ScrollView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <TextInput
          style={[
            styles.searchInput,
            { backgroundColor: theme.cardBackground, color: theme.text },
          ]}
          placeholder="Search exercises..."
          placeholderTextColor={theme.textSecondary}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Category Filter */}
      <View style={styles.filterSection}>
        <Text style={[styles.filterTitle, { color: theme.textSecondary }]}>
          Category
        </Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            style={[
              styles.filterChip,
              { backgroundColor: theme.cardBackground },
              selectedCategory === "all" && styles.filterChipActive,
            ]}
            onPress={() => setSelectedCategory("all")}
          >
            <Text
              style={[
                styles.filterChipText,
                { color: theme.text },
                selectedCategory === "all" && styles.filterChipTextActive,
              ]}
            >
              All
            </Text>
          </TouchableOpacity>
          {Object.values(exerciseCategories).map((category) => (
            <TouchableOpacity
              key={category.id}
              style={[
                styles.filterChip,
                { backgroundColor: theme.cardBackground },
                selectedCategory === category.id && styles.filterChipActive,
              ]}
              onPress={() => setSelectedCategory(category.id)}
            >
              <Text
                style={[
                  styles.filterChipText,
                  { color: theme.text },
                  selectedCategory === category.id &&
                    styles.filterChipTextActive,
                ]}
              >
                {category.icon} {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* Results Count */}
      <Text style={[styles.resultsCount, { color: theme.textSecondary }]}>
        {filteredExercises.length} exercise
        {filteredExercises.length !== 1 ? "s" : ""}
      </Text>

      {/* Exercise List */}
      <View style={styles.exerciseList}>
        {filteredExercises.map((exercise) => (
          <TouchableOpacity
            key={exercise.id}
            style={[
              styles.exerciseCard,
              { backgroundColor: theme.cardBackground },
            ]}
            onPress={() => router.push(`/exercises/${exercise.id}`)}
          >
            <View style={styles.exerciseHeader}>
              <Text style={[styles.exerciseName, { color: theme.text }]}>
                {exercise.name}
              </Text>
              <Text
                style={[
                  styles.exerciseDifficulty,
                  { color: theme.textSecondary },
                ]}
              >
                {exercise.difficulty}
              </Text>
            </View>
            <Text
              style={[
                styles.exerciseDescription,
                { color: theme.textSecondary },
              ]}
              numberOfLines={2}
            >
              {exercise.description}
            </Text>
            <View style={styles.exerciseMeta}>
              <View style={styles.categoryContainer}>
                {(Array.isArray(exercise.category)
                  ? exercise.category
                  : [exercise.category]
                ).map((cat, idx, arr) => (
                  <Text key={idx} style={styles.exerciseCategory}>
                    {exerciseCategories[cat]?.icon}{" "}
                    {exerciseCategories[cat]?.name}
                    {idx < arr.length - 1 ? " • " : ""}
                  </Text>
                ))}
              </View>
              {exercise.equipment && (
                <Text
                  style={[
                    styles.exerciseEquipment,
                    { color: theme.textSecondary },
                  ]}
                >
                  🏋️ Equipment
                </Text>
              )}
            </View>
            {exercise.muscleGroups && exercise.muscleGroups.length > 0 && (
              <View style={styles.muscleGroupsContainer}>
                {exercise.muscleGroups.map((mg, idx) => (
                  <View key={idx} style={styles.muscleTag}>
                    <Text style={styles.muscleTagText}>
                      {muscleGroups[mg]?.name || mg}
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    padding: 16,
    paddingTop: 8,
  },
  searchInput: {
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
  filterSection: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  filterTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  filterChipActive: {
    backgroundColor: "#007AFF",
  },
  filterChipText: {
    fontSize: 14,
  },
  filterChipTextActive: {
    color: "#fff",
  },
  resultsCount: {
    paddingHorizontal: 16,
    marginBottom: 12,
    fontSize: 14,
  },
  exerciseList: {
    padding: 16,
  },
  exerciseCard: {
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  exerciseHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: "600",
    flex: 1,
  },
  exerciseDifficulty: {
    fontSize: 12,
    textTransform: "capitalize",
  },
  exerciseDescription: {
    fontSize: 14,
    marginBottom: 12,
  },
  exerciseMeta: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
  },
  exerciseCategory: {
    fontSize: 12,
    color: "#007AFF",
  },
  exerciseEquipment: {
    fontSize: 12,
  },
  muscleGroupsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 12,
  },
  muscleTag: {
    backgroundColor: "#e8f4ff",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#b3d9ff",
  },
  muscleTagText: {
    fontSize: 11,
    color: "#0066cc",
    fontWeight: "500",
    textTransform: "capitalize",
  },
});
