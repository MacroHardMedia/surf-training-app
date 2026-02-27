import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState, useMemo, useCallback } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { programsData } from "../../data/index";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../contexts/ThemeContext";
import Spacer from "../../components/Spacer";

// Move helper function outside component for better performance
const toArray = (v) =>
  Array.isArray(v)
    ? v
    : v
      ? String(v)
          .split(/\n/)
          .map((s) => s.trim())
          .filter(Boolean)
      : [];

export default function ProgramDetail() {
  // Gets program name from URL
  const { program } = useLocalSearchParams();
  const { theme } = useTheme();
  const router = useRouter();

  // Look up the program data - memoize to prevent unnecessary lookups
  const currentProgram = useMemo(() => programsData[program], [program]);

  // State for section expansions
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedSubsections, setExpandedSubsections] = useState({});
  const [expandedSteps, setExpandedSteps] = useState({});

  // Memoize styles to prevent recreation on every render
  const styles = useMemo(() => getStyles(theme), [theme]);

  // Memoize toggle functions to maintain referential equality
  const toggleSection = useCallback((index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: prev[index] === undefined ? false : !prev[index],
    }));
  }, []);

  const toggleSubsection = useCallback((sectionIndex, subIndex) => {
    const key = `${sectionIndex}-${subIndex}`;
    setExpandedSubsections((prev) => ({
      ...prev,
      [key]: prev[key] === undefined ? false : !prev[key],
    }));
  }, []);

  const toggleSteps = useCallback((key) => {
    setExpandedSteps((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  }, []);

  if (!currentProgram || currentProgram.isCustomPage) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
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
          accessibilityRole="button"
          accessibilityLabel="Go back"
          accessibilityHint="Returns to previous screen"
        >
          <Ionicons name="arrow-back" size={24} color={theme.colors.text} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{currentProgram.title}</Text>
      </View>

      <FlatList
        style={styles.content}
        data={currentProgram.sections || []}
        keyExtractor={(item, index) => `section-${index}`}
        ListHeaderComponent={() => (
          <View style={[styles.programInfo, { paddingBottom: 10 }]}>
            <Text style={[styles.programDescription, { paddingBottom: 10 }]}>
              {currentProgram.description}
            </Text>

            {currentProgram.instructions && (
              <View style={[styles.instructionList, { paddingBottom: 10 }]}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    marginBottom: 10,
                    color: theme.colors.text,
                  }}
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
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    marginBottom: 10,
                    color: theme.colors.text,
                  }}
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
        )}
        renderItem={({ item: section, index: sectionIndex }) => {
          const isExpanded = expandedSections[sectionIndex] === true; // Default to collapsed

          // Skip sections without a group property
          if (!section || !section.group) {
            return null;
          }

          return (
            <View key={sectionIndex} style={styles.exerciseSection}>
              {/* Collapsible Section Header */}
              <TouchableOpacity
                style={styles.sectionHeaderButton}
                onPress={() => toggleSection(sectionIndex)}
                activeOpacity={0.7}
                accessibilityRole="button"
                accessibilityLabel={`${section.group} section`}
                accessibilityState={{ expanded: isExpanded }}
                accessibilityHint={`Tap to ${isExpanded ? "collapse" : "expand"} section`}
              >
                <Text style={styles.sectionTitle}>{section.group}</Text>
                <Ionicons
                  name={isExpanded ? "chevron-up" : "chevron-down"}
                  size={24}
                  color={theme.colors.primary}
                />
              </TouchableOpacity>

              {/* Collapsible Content */}
              {isExpanded && (
                <>
                  {/* Check if section has subsections */}
                  {section.subsections
                    ? // Render subsections
                      section.subsections.map((subsection, subIndex) => {
                        const subKey = `${sectionIndex}-${subIndex}`;
                        const isSubExpanded =
                          expandedSubsections[subKey] === true;

                        return (
                          <View
                            key={`sub-${subIndex}`}
                            style={styles.subsectionContainer}
                          >
                            {/* Collapsible Subsection Header */}
                            <TouchableOpacity
                              style={styles.subsectionHeader}
                              onPress={() =>
                                toggleSubsection(sectionIndex, subIndex)
                              }
                              activeOpacity={0.7}
                              accessibilityRole="button"
                              accessibilityLabel={`${subsection.group} subsection`}
                              accessibilityState={{ expanded: isSubExpanded }}
                              accessibilityHint={`Tap to ${isSubExpanded ? "collapse" : "expand"} subsection`}
                            >
                              <Text style={styles.subsectionTitle}>
                                {subsection.group}
                              </Text>
                              <Ionicons
                                name={
                                  isSubExpanded ? "chevron-up" : "chevron-down"
                                }
                                size={20}
                                color={theme.colors.textSecondary}
                              />
                            </TouchableOpacity>

                            {/* Collapsible Subsection Content */}
                            {isSubExpanded && (
                              <>
                                {subsection.exercises &&
                                  subsection.exercises.map(
                                    (exercise, exerciseIndex) => (
                                      <View
                                        key={exerciseIndex}
                                        style={styles.exerciseCard}
                                      >
                                        <Text style={styles.exerciseName}>
                                          {exercise.name}
                                        </Text>
                                        {exercise.description && (
                                          <Text
                                            style={styles.exerciseDescription}
                                          >
                                            {exercise.description}
                                          </Text>
                                        )}

                                        {/* Equipment */}

                                        {exercise.equipment && (
                                          <Text style={styles.exerciseDetail}>
                                            🏋️{" "}
                                            <Text
                                              style={{ fontWeight: "bold" }}
                                            >
                                              Equipment:
                                            </Text>{" "}
                                            {exercise.equipment}
                                          </Text>
                                        )}

                                        {/* Steps */}
                                        {Array.isArray(exercise.steps) &&
                                          exercise.steps.length > 0 &&
                                          (() => {
                                            const stepsKey = `steps-${sectionIndex}-${subIndex}-${exerciseIndex}`;
                                            const isStepsExpanded =
                                              expandedSteps[stepsKey];

                                            return (
                                              <View style={styles.stepList}>
                                                <TouchableOpacity
                                                  onPress={() =>
                                                    toggleSteps(stepsKey)
                                                  }
                                                  style={{
                                                    flexDirection: "row",
                                                    alignItems: "center",
                                                    marginBottom: 8,
                                                  }}
                                                  accessibilityRole="button"
                                                  accessibilityLabel="Exercise steps"
                                                  accessibilityState={{
                                                    expanded: isStepsExpanded,
                                                  }}
                                                  accessibilityHint={`Tap to ${isStepsExpanded ? "hide" : "show"} steps`}
                                                >
                                                  <Text
                                                    style={
                                                      styles.exerciseDetail
                                                    }
                                                  >
                                                    📋{" "}
                                                    <Text
                                                      style={{
                                                        fontWeight: "bold",
                                                      }}
                                                    >
                                                      Steps:
                                                    </Text>
                                                  </Text>
                                                  <Ionicons
                                                    name={
                                                      isStepsExpanded
                                                        ? "chevron-up"
                                                        : "chevron-down"
                                                    }
                                                    size={16}
                                                    color={theme.textSecondary}
                                                    style={{ marginLeft: 8 }}
                                                  />
                                                </TouchableOpacity>
                                                {isStepsExpanded &&
                                                  exercise.steps.map(
                                                    (step, sIdx) => (
                                                      <View
                                                        key={`step-${exerciseIndex}-${sIdx}`}
                                                        style={styles.stepItem}
                                                      >
                                                        <Text
                                                          style={
                                                            styles.stepIndex
                                                          }
                                                        >
                                                          {sIdx + 1}.
                                                        </Text>
                                                        <Text
                                                          style={
                                                            styles.stepText
                                                          }
                                                        >
                                                          {String(step).trim()}
                                                        </Text>
                                                      </View>
                                                    ),
                                                  )}
                                              </View>
                                            );
                                          })()}
                                        {exercise.reps && (
                                          <Text style={styles.exerciseReps}>
                                            Reps: {exercise.reps}
                                          </Text>
                                        )}
                                        {exercise.sets && (
                                          <Text style={styles.exerciseSets}>
                                            Sets: {exercise.sets}
                                          </Text>
                                        )}
                                        {exercise.tempo && (
                                          <Text style={styles.exerciseDetail}>
                                            ⏱️ Tempo: {exercise.tempo}
                                          </Text>
                                        )}
                                        {exercise.rest && (
                                          <Text style={styles.exerciseDetail}>
                                            Rest: {exercise.rest}
                                          </Text>
                                        )}
                                        {exercise.progression && (
                                          <Text
                                            style={styles.exerciseProgression}
                                          >
                                            📈 Progression:{" "}
                                            {exercise.progression}
                                          </Text>
                                        )}
                                        {exercise.tips && (
                                          <Text style={styles.exerciseTips}>
                                            💡 {exercise.tips}
                                          </Text>
                                        )}
                                      </View>
                                    ),
                                  )}
                              </>
                            )}
                          </View>
                        );
                      })
                    : // Render regular exercises (no subsections)
                      section.exercises &&
                      section.exercises.map((exercise, exerciseIndex) => {
                        // Check if this is part of a pair
                        const isPaired = exercise.pairId;
                        const isFirstInPair =
                          isPaired &&
                          (exerciseIndex === 0 ||
                            section.exercises[exerciseIndex - 1]?.pairId !==
                              exercise.pairId);
                        const isLastInPair =
                          isPaired &&
                          (exerciseIndex === section.exercises.length - 1 ||
                            section.exercises[exerciseIndex + 1]?.pairId !==
                              exercise.pairId);
                        const isOnlyInPair =
                          isPaired && !isFirstInPair && !isLastInPair;

                        return (
                          <View key={exerciseIndex}>
                            {/* Pair Label */}
                            {isFirstInPair && (
                              <View style={styles.pairLabel}>
                                <Ionicons
                                  name="link"
                                  size={16}
                                  color={theme.colors.primary}
                                />
                                <Text style={styles.pairLabelText}>
                                  Superset Pair
                                </Text>
                              </View>
                            )}

                            <View
                              style={[
                                styles.exerciseCard,
                                isPaired && styles.pairedExerciseCard,
                                isFirstInPair && styles.firstInPair,
                                isLastInPair && styles.lastInPair,
                                isOnlyInPair && styles.middleInPair,
                              ]}
                            >
                              <Text style={styles.exerciseName}>
                                {exercise.name}
                              </Text>
                              {exercise.description && (
                                <Text style={styles.exerciseDescription}>
                                  {exercise.description}
                                </Text>
                              )}

                              {exercise.equipment && (
                                <Text style={styles.exerciseDetail}>
                                  🏋️{" "}
                                  <Text style={{ fontWeight: "bold" }}>
                                    Equipment:
                                  </Text>{" "}
                                  {exercise.equipment}
                                </Text>
                              )}

                              {/* Steps */}

                              {Array.isArray(exercise.steps) &&
                                exercise.steps.length > 0 &&
                                (() => {
                                  const stepsKey = `steps-${sectionIndex}-${exerciseIndex}`;
                                  const isStepsExpanded =
                                    expandedSteps[stepsKey];

                                  return (
                                    <View style={styles.stepList}>
                                      <TouchableOpacity
                                        onPress={() => toggleSteps(stepsKey)}
                                        style={{
                                          flexDirection: "row",
                                          alignItems: "center",
                                          marginBottom: 8,
                                        }}
                                        accessibilityRole="button"
                                        accessibilityLabel="Exercise steps"
                                        accessibilityState={{
                                          expanded: isStepsExpanded,
                                        }}
                                        accessibilityHint={`Tap to ${isStepsExpanded ? "hide" : "show"} steps`}
                                      >
                                        <Text style={styles.exerciseDetail}>
                                          📋{" "}
                                          <Text style={{ fontWeight: "bold" }}>
                                            Steps:
                                          </Text>
                                        </Text>
                                        <Ionicons
                                          name={
                                            isStepsExpanded
                                              ? "chevron-up"
                                              : "chevron-down"
                                          }
                                          size={16}
                                          color={theme.colors.textSecondary}
                                          style={{ marginLeft: 8 }}
                                        />
                                      </TouchableOpacity>
                                      {isStepsExpanded &&
                                        exercise.steps.map((step, sIdx) => (
                                          <View
                                            key={`step-${exerciseIndex}-${sIdx}`}
                                            style={styles.stepItem}
                                          >
                                            <Text style={styles.stepIndex}>
                                              {sIdx + 1}.
                                            </Text>
                                            <Text style={styles.stepText}>
                                              {String(step).trim()}
                                            </Text>
                                          </View>
                                        ))}
                                    </View>
                                  );
                                })()}
                              {exercise.reps && (
                                <Text style={styles.exerciseReps}>
                                  Reps: {exercise.reps}
                                </Text>
                              )}
                              {exercise.sets && (
                                <Text style={styles.exerciseSets}>
                                  Sets: {exercise.sets}
                                </Text>
                              )}
                              {exercise.tempo && (
                                <Text style={styles.exerciseDetail}>
                                  ⏱️ Tempo: {exercise.tempo}
                                </Text>
                              )}
                              {exercise.rest && (
                                <Text style={styles.exerciseDetail}>
                                  Rest: {exercise.rest}
                                </Text>
                              )}
                              {exercise.progression && (
                                <Text style={styles.exerciseProgression}>
                                  📈 Progression: {exercise.progression}
                                </Text>
                              )}
                              {exercise.tips && (
                                <Text style={styles.exerciseTips}>
                                  💡 {exercise.tips}
                                </Text>
                              )}
                            </View>
                          </View>
                        );
                      })}
                </>
              )}
            </View>
          );
        }}
        ListFooterComponent={() =>
          currentProgram.tips && (
            <View style={styles.tipsSection}>
              <Text style={styles.sectionTitle}>General Tips</Text>
              {currentProgram.tips.map((tip, index) => (
                <View key={index} style={styles.tipItem}>
                  <Ionicons name="bulb" size={16} color={theme.colors.gold} />
                  <Text style={styles.tipText}>{tip}</Text>
                </View>
              ))}
            </View>
          )
        }
        removeClippedSubviews={true}
        maxToRenderPerBatch={5}
        updateCellsBatchingPeriod={50}
        initialNumToRender={5}
        windowSize={5}
      />
    </SafeAreaView>
  );
}

const getStyles = (theme) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.colors.background },
    header: {
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
      backgroundColor: theme.colors.background,
    },
    backButton: { marginRight: 16 },
    headerTitle: {
      fontSize: 23,
      fontWeight: "bold",
      flex: 1,
      color: theme.colors.text,
      textAlign: "center",
    },
    programInfo: {
      padding: 16,
      backgroundColor: theme.colors.background,
    },
    programDescription: {
      fontSize: 16,
      fontWeight: "bold",
      color: theme.colors.text,
    },
    programDuration: {
      fontSize: 14,
      marginTop: 10,
      fontWeight: "bold",
      color: theme.colors.text,
    },
    programDifficulty: {
      fontSize: 14,
      fontWeight: "bold",
      color: theme.colors.textSecondary,
    },
    programInstructions: {
      marginTop: 8,
      fontSize: 14,
      color: theme.colors.textSecondary,
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
      color: theme.colors.textSecondary,
      marginRight: 6,
      textAlign: "right",
      lineHeight: 20,
    },
    stepText: {
      flex: 1,
      fontSize: 14,
      color: theme.colors.textSecondary,
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
      color: theme.colors.text,
    },
    bulletText: {
      flex: 1,
      fontSize: 14,
      lineHeight: 20,
      color: theme.colors.textSecondary,
    },
    structureText: {
      fontSize: 14,
      lineHeight: 20,
      color: theme.colors.text,
    },
    structureList: {
      marginTop: 8,
    },
    content: { flex: 1 },
    errorText: {
      fontSize: 18,
      textAlign: "center",
      marginTop: 50,
      color: theme.colors.textTertiary,
      padding: 15,
    },
    exerciseSection: {
      padding: 16,
      backgroundColor: theme.colors.card,
      marginBottom: 8,
    },
    sectionHeaderButton: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 4,
      paddingHorizontal: 0,
      marginBottom: 12,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: "bold",
      color: theme.colors.primary,
      flex: 1,
    },
    exerciseCard: {
      backgroundColor: theme.colors.cardSecondary,
      padding: 12,
      borderRadius: 8,
      marginBottom: 12,
      borderLeftWidth: 4,
      borderLeftColor: theme.colors.primary,
    },
    pairLabel: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 8,
      marginBottom: 4,
      paddingHorizontal: 8,
      paddingVertical: 4,
      backgroundColor: theme.colors.primary + "15",
      borderRadius: 4,
      alignSelf: "flex-start",
    },
    pairLabelText: {
      fontSize: 12,
      fontWeight: "600",
      color: theme.colors.primary,
      marginLeft: 4,
      textTransform: "uppercase",
      letterSpacing: 0.5,
    },
    pairedExerciseCard: {
      backgroundColor: theme.colors.primary + "08",
      borderLeftWidth: 3,
      borderLeftColor: theme.colors.primary,
      marginLeft: 8,
    },
    firstInPair: {
      borderTopLeftRadius: 8,
      borderTopRightRadius: 8,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      marginBottom: 2,
    },
    middleInPair: {
      borderRadius: 0,
      marginBottom: 2,
      marginTop: 0,
    },
    lastInPair: {
      borderTopLeftRadius: 0,
      borderTopRightRadius: 0,
      borderBottomLeftRadius: 8,
      borderBottomRightRadius: 8,
      marginTop: 0,
      marginBottom: 12,
    },
    exerciseName: {
      fontSize: 16,
      fontWeight: "bold",
      color: theme.colors.text,
      marginBottom: 4,
    },
    exerciseDescription: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      marginBottom: 6,
    },
    exerciseReps: {
      fontSize: 14,
      fontWeight: "bold",
      color: theme.colors.primary,
      marginBottom: 6,
    },
    exerciseSets: {
      fontSize: 14,
      fontWeight: "bold",
      color: theme.colors.primary,
      marginBottom: 6,
    },
    exerciseProgression: {
      fontSize: 13,
      color: theme.colors.success,
      fontWeight: "600",
      marginTop: 4,
      marginBottom: 6,
      lineHeight: 18,
    },
    exerciseTips: {
      fontSize: 12,
      color: theme.colors.textTertiary,
      fontStyle: "italic",
    },
    exerciseDetail: {
      fontSize: 14,
      color: theme.colors.textSecondary,
      marginBottom: 4,
    },
    subsectionContainer: {
      marginLeft: 12,
      marginBottom: 16,
      paddingLeft: 12,
      borderLeftWidth: 3,
      borderLeftColor: theme.colors.accent,
    },
    subsectionHeader: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      paddingVertical: 8,
      marginBottom: 8,
    },
    subsectionTitle: {
      fontSize: 16,
      fontWeight: "600",
      color: theme.colors.textSecondary,
      flex: 1,
    },
    tipsSection: {
      padding: 16,
      backgroundColor: theme.colors.card,
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
      color: theme.colors.textSecondary,
    },
  });
