import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { programsData } from "../../data/index";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "../../contexts/ThemeContext";
import Spacer from "../../components/Spacer";

export default function ProgramDetail() {
  // Gets program name from URL
  const { program } = useLocalSearchParams();
  const { theme } = useTheme();

  // Look up the program data
  const currentProgram = programsData[program];

  // State for section expansions - default all to true (expanded)
  const [expandedSections, setExpandedSections] = useState({});
  const [expandedSubsections, setExpandedSubsections] = useState({});
  const [expandedSteps, setExpandedSteps] = useState({});

  const styles = getStyles(theme);

  const toggleSection = (index) => {
    setExpandedSections((prev) => ({
      ...prev,
      [index]: prev[index] === undefined ? false : !prev[index],
    }));
  };

  const toggleSubsection = (sectionIndex, subIndex) => {
    const key = `${sectionIndex}-${subIndex}`;
    setExpandedSubsections((prev) => ({
      ...prev,
      [key]: prev[key] === undefined ? false : !prev[key],
    }));
  };

  const toggleSteps = (key) => {
    setExpandedSteps((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const router = useRouter();

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
            <Ionicons name="arrow-back" size={24} color={theme.text} />
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
          <Ionicons name="arrow-back" size={24} color={theme.text} />
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
                style={{
                  fontSize: 15,
                  fontWeight: "bold",
                  marginBottom: 10,
                  color: theme.text,
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
                  color: theme.text,
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

        {/* Exercise Sections - NOW COLLAPSIBLE */}
        {currentProgram.sections &&
          currentProgram.sections.map((section, sectionIndex) => {
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
                >
                  <Text style={styles.sectionTitle}>{section.group}</Text>
                  <Ionicons
                    name={isExpanded ? "chevron-up" : "chevron-down"}
                    size={24}
                    color={theme.primary}
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
                              >
                                <Text style={styles.subsectionTitle}>
                                  {subsection.group}
                                </Text>
                                <Ionicons
                                  name={
                                    isSubExpanded
                                      ? "chevron-up"
                                      : "chevron-down"
                                  }
                                  size={20}
                                  color={theme.textSecondary}
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
                                                      color={
                                                        theme.textSecondary
                                                      }
                                                      style={{ marginLeft: 8 }}
                                                    />
                                                  </TouchableOpacity>
                                                  {isStepsExpanded &&
                                                    exercise.steps.map(
                                                      (step, sIdx) => (
                                                        <View
                                                          key={`step-${exerciseIndex}-${sIdx}`}
                                                          style={
                                                            styles.stepItem
                                                          }
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
                                                            {String(
                                                              step,
                                                            ).trim()}
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
                                    color={theme.primary}
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
                                        >
                                          <Text style={styles.exerciseDetail}>
                                            📋{" "}
                                            <Text
                                              style={{ fontWeight: "bold" }}
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
          })}

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

const getStyles = (theme) =>
  StyleSheet.create({
    container: { flex: 1, backgroundColor: theme.background },
    header: {
      flexDirection: "row",
      alignItems: "center",
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: theme.border,
      backgroundColor: theme.background,
    },
    backButton: { marginRight: 16 },
    headerTitle: {
      fontSize: 23,
      fontWeight: "bold",
      flex: 1,
      color: theme.text,
      textAlign: "center",
    },
    programInfo: {
      padding: 16,
      backgroundColor: theme.background,
    },
    programDescription: {
      fontSize: 16,
      fontWeight: "bold",
      color: theme.text,
    },
    programDuration: {
      fontSize: 14,
      marginTop: 10,
      fontWeight: "bold",
      color: theme.text,
    },
    programDifficulty: {
      fontSize: 14,
      fontWeight: "bold",
      color: theme.textSecondary,
    },
    programInstructions: {
      marginTop: 8,
      fontSize: 14,
      color: theme.textSecondary,
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
      color: theme.textSecondary,
      marginRight: 6,
      textAlign: "right",
      lineHeight: 20,
    },
    stepText: {
      flex: 1,
      fontSize: 14,
      color: theme.textSecondary,
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
      color: theme.text,
    },
    bulletText: {
      flex: 1,
      fontSize: 14,
      lineHeight: 20,
      color: theme.textSecondary,
    },
    structureText: {
      fontSize: 14,
      lineHeight: 20,
      color: theme.text,
    },
    structureList: {
      marginTop: 8,
    },
    content: { flex: 1 },
    errorText: {
      fontSize: 18,
      textAlign: "center",
      marginTop: 50,
      color: theme.textTertiary,
      padding: 15,
    },
    exerciseSection: {
      padding: 16,
      backgroundColor: theme.cardBackground,
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
      color: theme.primary,
      flex: 1,
    },
    exerciseCard: {
      backgroundColor: theme.exerciseCardBg,
      padding: 12,
      borderRadius: 8,
      marginBottom: 12,
      borderLeftWidth: 4,
      borderLeftColor: theme.primary,
    },
    pairLabel: {
      flexDirection: "row",
      alignItems: "center",
      marginTop: 8,
      marginBottom: 4,
      paddingHorizontal: 8,
      paddingVertical: 4,
      backgroundColor: theme.primary + "15",
      borderRadius: 4,
      alignSelf: "flex-start",
    },
    pairLabelText: {
      fontSize: 12,
      fontWeight: "600",
      color: theme.primary,
      marginLeft: 4,
      textTransform: "uppercase",
      letterSpacing: 0.5,
    },
    pairedExerciseCard: {
      backgroundColor: theme.primary + "08",
      borderLeftWidth: 3,
      borderLeftColor: theme.primary,
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
      color: theme.text,
      marginBottom: 4,
    },
    exerciseDescription: {
      fontSize: 14,
      color: theme.textSecondary,
      marginBottom: 6,
    },
    exerciseReps: {
      fontSize: 14,
      fontWeight: "bold",
      color: theme.primary,
      marginBottom: 6,
    },
    exerciseSets: {
      fontSize: 14,
      fontWeight: "bold",
      color: theme.primary,
      marginBottom: 6,
    },
    exerciseProgression: {
      fontSize: 13,
      color: theme.success,
      fontWeight: "600",
      marginTop: 4,
      marginBottom: 6,
      lineHeight: 18,
    },
    exerciseTips: {
      fontSize: 12,
      color: theme.textTertiary,
      fontStyle: "italic",
    },
    exerciseDetail: {
      fontSize: 14,
      color: theme.textSecondary,
      marginBottom: 4,
    },
    subsectionContainer: {
      marginLeft: 12,
      marginBottom: 16,
      paddingLeft: 12,
      borderLeftWidth: 3,
      borderLeftColor: theme.accent,
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
      color: theme.textSecondary,
      flex: 1,
    },
    tipsSection: {
      padding: 16,
      backgroundColor: theme.cardBackground,
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
      color: theme.textSecondary,
    },
  });
