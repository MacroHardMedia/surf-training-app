import { ScrollView, StyleSheet } from "react-native";
import { React, useMemo } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import ThemedView from "../../components/ThemedView";

import HomeSectionRow from "../../components/HomeSectionRow";
import { getHomeSections } from "../../data/homeScreenData";

const Home = () => {
  const { theme } = useTheme();
  const details = getHomeSections(theme)[0];

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
        },
      }),
    [theme],
  );

  return (
    <ThemedView style={styles.container}>
      <ScrollView>
        {details.sections.map((section, index) => (
          <HomeSectionRow
            key={section.id || `section-${index}`}
            section={section}
            cardSize={160}
          />
        ))}
      </ScrollView>
    </ThemedView>
  );
};

export default Home;
