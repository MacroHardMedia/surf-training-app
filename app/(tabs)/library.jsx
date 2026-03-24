import React, { useState, useMemo, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import { router } from "expo-router";
import { ROUTES } from "../../constants/routes";
import { exerciseLibrary } from "../../data/exercises/exerciseLibrary";
import { exerciseCategories } from "../../data/exercises/categories";
import { muscleGroups } from "../../data/exercises/muscleGroups";
import { useTheme } from "../../contexts/ThemeContext";

// Move static data outside component - computed once, not on every render
const ALL_EXERCISES = Object.values(exerciseLibrary);

// Helper function to normalize category data structure
const normalizeCategories = (category) =>
  Array.isArray(category) ? category : [category];

export default function LibraryTab() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const { theme } = useTheme();

  // Memoize filtered results - only recompute when dependencies change
  const filteredExercises = useMemo(() => {
    return ALL_EXERCISES.filter((exercise) => {
      const searchLower = searchQuery.toLowerCase();
      const matchesSearch =
        !searchQuery ||
        exercise.name.toLowerCase().includes(searchLower) ||
        exercise.description.toLowerCase().includes(searchLower);

      const matchesCategory =
        selectedCategory === "all" ||
        normalizeCategories(exercise.category).includes(selectedCategory);

      return matchesSearch && matchesCategory;
    }).sort((a, b) => a.name.localeCompare(b.name));
  }, [searchQuery, selectedCategory]);

  // Memoize dynamic styles to prevent recreation on every render
  const dynamicStyles = useMemo(
    () => ({
      container: { backgroundColor: theme.colors.background },
      searchInput: {
        backgroundColor: theme.colors.card,
        color: theme.colors.text,
      },
      card: { backgroundColor: theme.colors.card },
      primaryText: { color: theme.colors.text },
      secondaryText: { color: theme.colors.textSecondary },
      filterChipActive: { backgroundColor: theme.colors.primary },
      primaryColor: { color: theme.colors.primary },
      muscleTag: {
        backgroundColor: theme.colors.infoLight,
        borderColor: theme.colors.info,
      },
      muscleTagText: { color: theme.colors.infoText },
    }),
    [theme],
  );

  // Memoize category data (includes "All" option)
  const categoryData = useMemo(
    () => [
      { id: "all", name: "All", icon: "" },
      ...Object.values(exerciseCategories),
    ],
    [],
  );

  // Memoized render function for exercise cards
  const renderExerciseCard = useCallback(
    ({ item: exercise }) => (
      <TouchableOpacity
        style={[styles.exerciseCard, dynamicStyles.card]}
        onPress={() => router.push(ROUTES.exercise(exercise.id))}
        accessibilityRole="button"
        accessibilityLabel={`${exercise.name}, ${exercise.difficulty} difficulty`}
        accessibilityHint="Tap to view exercise details"
      >
        <View style={styles.exerciseHeader}>
          <Text style={[styles.exerciseName, dynamicStyles.primaryText]}>
            {exercise.name}
          </Text>
          <Text
            style={[styles.exerciseDifficulty, dynamicStyles.secondaryText]}
          >
            {exercise.difficulty}
          </Text>
        </View>
        <Text
          style={[styles.exerciseDescription, dynamicStyles.secondaryText]}
          numberOfLines={2}
        >
          {exercise.description}
        </Text>

        <View style={styles.categoryContainer}>
          {normalizeCategories(exercise.category).map((cat, idx, arr) => (
            <Text
              key={cat}
              style={[styles.exerciseCategory, dynamicStyles.primaryColor]}
            >
              {exerciseCategories[cat]?.icon} {exerciseCategories[cat]?.name}
              {idx < arr.length - 1 ? " • " : ""}
            </Text>
          ))}
        </View>
        {exercise.equipment && (
          <Text style={[styles.exerciseEquipment, dynamicStyles.secondaryText]}>
            Equipment:{" "}
            {Array.isArray(exercise.equipment)
              ? exercise.equipment.join(", ")
              : exercise.equipment}
          </Text>
        )}
        {exercise.muscleGroups?.length > 0 && (
          <View style={styles.muscleGroupsContainer}>
            {exercise.muscleGroups.map((mg) => (
              <View
                key={mg}
                style={[styles.muscleTag, dynamicStyles.muscleTag]}
              >
                <Text
                  style={[styles.muscleTagText, dynamicStyles.muscleTagText]}
                >
                  {muscleGroups[mg]?.name || mg}
                </Text>
              </View>
            ))}
          </View>
        )}
      </TouchableOpacity>
    ),
    [dynamicStyles],
  );

  // Memoized render function for category filter chips
  const renderCategoryChip = useCallback(
    ({ item: category }) => {
      const isSelected = selectedCategory === category.id;
      return (
        <TouchableOpacity
          style={[
            styles.filterChip,
            dynamicStyles.card,
            isSelected && dynamicStyles.filterChipActive,
          ]}
          onPress={() => setSelectedCategory(category.id)}
          accessibilityRole="button"
          accessibilityState={{ selected: isSelected }}
          accessibilityLabel={`Filter by ${category.name}`}
        >
          <Text
            style={[
              styles.filterChipText,
              dynamicStyles.primaryText,
              isSelected && styles.filterChipTextActive,
            ]}
          >
            {category.icon} {category.name}
          </Text>
        </TouchableOpacity>
      );
    },
    [selectedCategory, dynamicStyles],
  );

  // Header component for the list - only shows results count
  const ListHeaderComponent = useCallback(
    () => (
      <Text style={[styles.resultsCount, dynamicStyles.secondaryText]}>
        {filteredExercises.length} exercise
        {filteredExercises.length !== 1 ? "s" : ""}
      </Text>
    ),
    [filteredExercises.length, dynamicStyles.secondaryText],
  );

  return (
    <View style={[styles.container, dynamicStyles.container]}>
      {/* Search Bar - outside FlatList to prevent keyboard dismissal */}
      <View style={styles.searchContainer}>
        <TextInput
          style={[styles.searchInput, dynamicStyles.searchInput]}
          placeholder="Search exercises..."
          placeholderTextColor={theme.colors.inputPlaceholder}
          value={searchQuery}
          onChangeText={setSearchQuery}
          accessibilityLabel="Search exercises"
          accessibilityHint="Type to filter exercises by name or description"
        />
      </View>

      {/* Category Filter - outside FlatList */}
      <View style={styles.filterSection}>
        <Text style={[styles.filterTitle, dynamicStyles.secondaryText]}>
          Category
        </Text>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={categoryData}
          renderItem={renderCategoryChip}
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.filterList}
        />
      </View>

      {/* Virtualized FlatList for optimal performance with large lists */}
      <FlatList
        data={filteredExercises}
        renderItem={renderExerciseCard}
        keyExtractor={(item) => item.id}
        ListHeaderComponent={ListHeaderComponent}
        contentContainerStyle={styles.exerciseList}
        // Performance optimizations
        removeClippedSubviews={true}
        maxToRenderPerBatch={10}
        updateCellsBatchingPeriod={50}
        initialNumToRender={10}
        windowSize={10}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    padding: 16,
    paddingBottom: 8,
  },
  searchInput: {
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
  filterSection: {
    marginBottom: 2,
    paddingLeft: 16,
  },
  filterTitle: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
  },
  filterList: {
    paddingRight: 16,
  },
  filterChip: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 8,
  },
  filterChipText: {
    fontSize: 14,
  },
  filterChipTextActive: {
    color: "#fff",
    fontWeight: "600",
  },
  resultsCount: {
    paddingHorizontal: 16,
    marginBottom: 12,
    fontSize: 14,
  },
  exerciseList: {
    paddingHorizontal: 16,
    paddingBottom: 16,
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
  tapHintText: {
    fontSize: 12,
    marginTop: -6,
    marginBottom: 10,
    fontStyle: "italic",
  },
  categoryContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginBottom: 8,
  },
  exerciseCategory: {},
  exerciseEquipment: {
    fontSize: 13,
    marginTop: 3,
    marginBottom: 8,
    fontWeight: 600,
  },
  muscleGroupsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
    marginTop: 12,
  },
  muscleTag: {
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
  },
  muscleTagText: {
    fontSize: 11,
    fontWeight: "500",
    textTransform: "capitalize",
  },
});
