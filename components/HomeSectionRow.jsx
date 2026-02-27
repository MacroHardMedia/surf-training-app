import React, { useMemo } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import ProgramCard from "./ProgramCard";
import ThemedText from "./ThemedText";
import Spacer from "./Spacer";
import { useTheme } from "../contexts/ThemeContext";

const HomeSectionRow = ({ section, cardSize = 160 }) => {
  const { theme } = useTheme();

  const styles = useMemo(
    () =>
      StyleSheet.create({
        content: {
          paddingTop: theme.spacing.sm,
        },
        title: {
          fontSize: theme.fonts.size["2xl"],
          fontWeight: theme.fonts.weight.bold,
          fontFamily: theme.fonts.bold,
          paddingTop: theme.spacing["2xl"],
          marginLeft: theme.spacing.xl,
          paddingBottom: theme.spacing.xs,
          color: theme.colors.text,
        },
        text: {
          marginLeft: theme.spacing.xl,
          color: theme.colors.textSecondary,
        },
        horizontalScrollContent: {
          paddingLeft: theme.spacing.lg,
          paddingRight: theme.spacing.sm,
        },
      }),
    [theme],
  );

  return (
    <View
      style={[styles.content, { backgroundColor: section.backgroundColor }]}
    >
      <ThemedText style={styles.title} title={true}>
        {section.title}
      </ThemedText>
      <Text style={styles.text}>{section.description}</Text>

      <Spacer />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.horizontalScrollContent}
      >
        {section.programs?.map((program, idx) => (
          <ProgramCard
            key={program.id || idx}
            id={program.id}
            title={program.title}
            color={program.color}
            size={cardSize}
            backgroundImage={program.backgroundImage}
          />
        ))}
      </ScrollView>

      <Spacer />
    </View>
  );
};

export default HomeSectionRow;
