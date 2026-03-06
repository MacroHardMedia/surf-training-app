import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState, useMemo } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useTheme } from "../../contexts/ThemeContext";
import { ROUTES } from "../../constants/routes";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";

const TOTAL_STEPS = 6;
const CURRENT_STEP = 3;

const SURF_LEVELS = ["Beginner", "Intermediate", "Advanced"];

const SURF_FREQUENCY = ["Rarely", "1–2×/wk", "3–4×/wk", "5+×/wk"];

const BOARD_TYPES = ["Shortboard", "Mid-length", "Longboard", "Fish / Hybrid"];

const GOALS = [
  "Paddle endurance",
  "Catch more waves",
  "Improve pop-up",
  "Build strength",
  "Improve mobility",
  "Stay injury-free",
];

export default function SurfProfile() {
  const router = useRouter();
  const { theme } = useTheme();
  const { colors, fonts, spacing, radius } = theme;
  const insets = useSafeAreaInsets();

  const [form, setForm] = useState({
    surfLevel: "",
    surfFrequency: "",
    boardType: [],
    goal: [],
  });

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const toggleMulti = (key, value) => {
    setForm((prev) => {
      const current = prev[key];
      if (current.includes(value)) {
        return { ...prev, [key]: current.filter((v) => v !== value) };
      }
      return { ...prev, [key]: [...current, value] };
    });
  };

  const isValid =
    form.surfLevel &&
    form.surfFrequency &&
    form.boardType.length > 0 &&
    form.goal.length > 0;

  // ── Styles ────────────────────────────────────────────────────
  const containerStyle = useMemo(
    () => ({
      backgroundColor: colors.background,
      paddingTop: insets.top + spacing.base,
    }),
    [colors.background, insets.top, spacing.base],
  );

  const s = useMemo(
    () =>
      StyleSheet.create({
        scroll: { flexGrow: 1, padding: spacing.xl },
        stepRow: {
          flexDirection: "row",
          justifyContent: "center",
          gap: 8,
          paddingHorizontal: spacing.xl,
        },
        dot: {
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor: colors.border,
        },
        dotActive: { backgroundColor: colors.primary, width: 24 },
        title: {
          fontSize: fonts.size["3xl"],
          fontWeight: fonts.weight.bold,
          color: colors.text,
          marginBottom: spacing.xs,
          marginTop: spacing.xl,
        },
        subtitle: {
          fontSize: fonts.size.md,
          color: colors.textSecondary,
          marginBottom: spacing["2xl"],
        },
        label: {
          fontSize: fonts.size.sm,
          fontWeight: fonts.weight.semiBold,
          color: colors.textSecondary,
          marginBottom: spacing.xs,
          textTransform: "uppercase",
          letterSpacing: 0.8,
        },
        field: { marginBottom: spacing.lg },
        // Generic row of toggle buttons
        optionRow: {
          flexDirection: "row",
          flexWrap: "wrap",
          gap: spacing.sm,
        },
        optionBtn: {
          paddingHorizontal: spacing.md,
          paddingVertical: spacing.sm,
          borderRadius: radius.md,
          borderWidth: 1,
          borderColor: colors.border,
          backgroundColor: colors.buttonSecondary,
        },
        optionBtnActive: {
          borderColor: colors.primary,
          backgroundColor: colors.primaryLight,
        },
        optionBtnText: {
          fontSize: fonts.size.sm,
          fontWeight: fonts.weight.medium,
          color: colors.textSecondary,
        },
        optionBtnTextActive: {
          color: colors.primary,
          fontWeight: fonts.weight.semiBold,
        },
        footer: { marginTop: spacing["2xl"], marginBottom: spacing.xl },
        stepCount: {
          textAlign: "center",
          fontSize: fonts.size.sm,
          color: colors.textTertiary,
          marginBottom: spacing.sm,
        },
        btnRow: {
          flexDirection: "row",
          gap: spacing.sm,
        },
      }),
    [colors, fonts, spacing, radius],
  );

  // ── Render ───────────────────────────────────────────────────
  return (
    <KeyboardAvoidingView
      style={[styles.container, containerStyle]}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      {/* Step dots */}
      <View style={s.stepRow}>
        {Array.from({ length: TOTAL_STEPS }, (_, i) => i + 1).map((step) => (
          <View
            key={step}
            style={[s.dot, step === CURRENT_STEP && s.dotActive]}
          />
        ))}
      </View>

      <ScrollView
        contentContainerStyle={s.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={s.title}>Surf Profile</Text>
        <Text style={s.subtitle}>
          Tell us about your surfing so we can personalise your training.
        </Text>

        {/* Surf Level */}
        <View style={s.field}>
          <Text style={s.label}>Surf Level</Text>
          <View style={s.optionRow}>
            {SURF_LEVELS.map((opt) => (
              <TouchableOpacity
                key={opt}
                style={[
                  s.optionBtn,
                  form.surfLevel === opt && s.optionBtnActive,
                ]}
                onPress={() => update("surfLevel", opt)}
              >
                <Text
                  style={[
                    s.optionBtnText,
                    form.surfLevel === opt && s.optionBtnTextActive,
                  ]}
                >
                  {opt}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Surf Frequency */}
        <View style={s.field}>
          <Text style={s.label}>How Often Do You Surf?</Text>
          <View style={s.optionRow}>
            {SURF_FREQUENCY.map((opt) => (
              <TouchableOpacity
                key={opt}
                style={[
                  s.optionBtn,
                  form.surfFrequency === opt && s.optionBtnActive,
                ]}
                onPress={() => update("surfFrequency", opt)}
              >
                <Text
                  style={[
                    s.optionBtnText,
                    form.surfFrequency === opt && s.optionBtnTextActive,
                  ]}
                >
                  {opt}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Board Type */}
        <View style={s.field}>
          <Text style={s.label}>Board Type</Text>
          <View style={s.optionRow}>
            {BOARD_TYPES.map((opt) => (
              <TouchableOpacity
                key={opt}
                style={[
                  s.optionBtn,
                  form.boardType.includes(opt) && s.optionBtnActive,
                ]}
                onPress={() => toggleMulti("boardType", opt)}
              >
                <Text
                  style={[
                    s.optionBtnText,
                    form.boardType.includes(opt) && s.optionBtnTextActive,
                  ]}
                >
                  {opt}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Main Goal */}
        <View style={s.field}>
          <Text style={s.label}>Main Goals</Text>
          <View style={s.optionRow}>
            {GOALS.map((opt) => (
              <TouchableOpacity
                key={opt}
                style={[
                  s.optionBtn,
                  form.goal.includes(opt) && s.optionBtnActive,
                ]}
                onPress={() => toggleMulti("goal", opt)}
              >
                <Text
                  style={[
                    s.optionBtnText,
                    form.goal.includes(opt) && s.optionBtnTextActive,
                  ]}
                >
                  {opt}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Footer */}
        <View style={s.footer}>
          <Text style={s.stepCount}>
            Step {CURRENT_STEP} of {TOTAL_STEPS}
          </Text>
          <View style={s.btnRow}>
            <SecondaryButton
              label="← Back"
              onPress={() => router.back()}
              style={{ flex: 1 }}
            />
            <PrimaryButton
              label="Next →"
              onPress={() => router.push(ROUTES.ONBOARDING_SURF_PROFILE_2)}
              disabled={!isValid}
              style={{ flex: 2 }}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
