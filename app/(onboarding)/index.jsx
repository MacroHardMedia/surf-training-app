import { View, StyleSheet } from "react-native";
import { useMemo } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useTheme } from "../../contexts/ThemeContext";
import { ROUTES } from "../../constants/routes";
import OnboardingDots from "../../components/onboarding/OnboardingDots";
import OnboardingHeader from "../../components/onboarding/OnboardingHeader";
import OnboardingFooter from "../../components/onboarding/OnboardingFooter";

const TOTAL_STEPS = 5;

export default function OnboardingWelcome() {
  const router = useRouter();
  const { theme } = useTheme();
  const { colors, spacing } = theme;
  const insets = useSafeAreaInsets();

  const CURRENT_STEP = 1;

  const containerStyle = useMemo(
    () => ({
      backgroundColor: colors.background,
      paddingTop: insets.top + spacing.base,
      paddingHorizontal: spacing.screenPadding,
      paddingBottom: insets.bottom + spacing.base,
    }),
    [
      colors.background,
      insets.top,
      insets.bottom,
      spacing.base,
      spacing.screenPadding,
    ],
  );

  return (
    <View style={[styles.container, containerStyle]}>
      <OnboardingDots total={TOTAL_STEPS} current={CURRENT_STEP} />

      <OnboardingHeader
        emoji="🏄"
        title="Welcome to the Total Surf App"
        subtitle="Thanks for downloading the app! Let's build your personal surf training profile so we can tailor your experience."
      />

      <OnboardingFooter
        step={`${CURRENT_STEP} of ${TOTAL_STEPS}`}
        cta="Next →"
        onPress={() => router.push(ROUTES.ONBOARDING_PERSONAL_INFO)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
  },
});
