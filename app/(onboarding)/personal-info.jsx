import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState, useMemo } from "react";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTheme } from "../../contexts/ThemeContext";
import { ROUTES } from "../../constants/routes";
import { useOnboarding } from "../../contexts/onBoardingContext";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";

// ── BMI Calculation ──────────────────────────────────────────────
function calcBMI(weight, weightUnit, height, heightUnit) {
  let weightKg = parseFloat(weight);
  let heightM;

  if (!weightKg || !height) return null;

  if (weightUnit === "lbs") weightKg = weightKg * 0.453592;

  if (heightUnit === "cm") {
    heightM = parseFloat(height) / 100;
  } else {
    // height stored as total inches when unit is ft
    heightM = parseFloat(height) * 0.0254;
  }

  if (!heightM || heightM <= 0) return null;
  return (weightKg / (heightM * heightM)).toFixed(1);
}

function bmiCategory(bmi) {
  if (!bmi) return null;
  const b = parseFloat(bmi);
  if (b < 18.5) return { label: "Underweight", color: "#3B82F6" };
  if (b < 25) return { label: "Healthy", color: "#10B981" };
  if (b < 30) return { label: "Overweight", color: "#F59E0B" };
  return { label: "Obese", color: "#EF4444" };
}

// ── Component ────────────────────────────────────────────────────
const TOTAL_STEPS = 6;
const CURRENT_STEP = 2;

export default function PersonalInfo() {
  const router = useRouter();
  const { theme } = useTheme();
  const { colors, fonts, spacing, radius } = theme;
  const insets = useSafeAreaInsets();
  const { updateSelection } = useOnboarding();

  const [form, setForm] = useState({
    age: "",
    sex: "",
    weight: "",
    weightUnit: "lbs",
    height: "",
    heightFt: "",
    heightIn: "",
    heightUnit: "ft",
  });

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  // Convert ft/in inputs to total inches for BMI
  const heightForBMI =
    form.heightUnit === "ft"
      ? String(
          (parseFloat(form.heightFt) || 0) * 12 +
            (parseFloat(form.heightIn) || 0),
        )
      : form.height;

  const bmi = useMemo(
    () => calcBMI(form.weight, form.weightUnit, heightForBMI, form.heightUnit),
    [
      form.weight,
      form.weightUnit,
      form.heightFt,
      form.heightIn,
      form.height,
      form.heightUnit,
    ],
  );
  const category = bmiCategory(bmi);

  const heightValid = form.heightUnit === "ft" ? form.heightFt : form.height;
  const isValid = form.age && form.sex && form.weight && heightValid;

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
        scroll: { flexGrow: 1, padding: spacing.xl, justifyContent: "center" },
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
        input: {
          backgroundColor: colors.inputBackground,
          borderWidth: 1,
          borderColor: colors.inputBorder,
          borderRadius: radius.md,
          paddingHorizontal: spacing.base,
          paddingVertical: spacing.md,
          fontSize: fonts.size.md,
          color: colors.inputText,
        },
        row: { flexDirection: "row", gap: spacing.sm },
        inputRow: { flex: 1 },
        unitToggle: { flexDirection: "row", gap: spacing.xs },
        unitBtn: {
          paddingHorizontal: spacing.md,
          paddingVertical: spacing.md,
          borderRadius: radius.md,
          borderWidth: 1,
          borderColor: colors.border,
          backgroundColor: colors.buttonSecondary,
        },
        unitBtnActive: {
          borderColor: colors.primary,
          backgroundColor: colors.primaryLight,
        },
        unitBtnText: {
          fontSize: fonts.size.sm,
          fontWeight: fonts.weight.semiBold,
          color: colors.textSecondary,
        },
        unitBtnTextActive: { color: colors.primary },
        sexRow: { flexDirection: "row", gap: spacing.sm },
        sexBtn: {
          flex: 1,
          paddingVertical: spacing.md,
          borderRadius: radius.md,
          borderWidth: 1,
          borderColor: colors.border,
          backgroundColor: colors.buttonSecondary,
          alignItems: "center",
        },
        sexBtnActive: {
          borderColor: colors.primary,
          backgroundColor: colors.primaryLight,
        },
        sexBtnText: {
          fontSize: fonts.size.base,
          fontWeight: fonts.weight.medium,
          color: colors.textSecondary,
        },
        sexBtnTextActive: {
          color: colors.primary,
          fontWeight: fonts.weight.bold,
        },
        bmiCard: {
          backgroundColor: colors.card,
          borderRadius: radius.lg,
          padding: spacing.base,
          marginTop: spacing.sm,
          borderWidth: 1,
          borderColor: colors.border,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        },
        bmiLabel: {
          fontSize: fonts.size.sm,
          color: colors.textSecondary,
          fontWeight: fonts.weight.medium,
        },
        bmiValue: {
          fontSize: fonts.size["4xl"],
          fontWeight: fonts.weight.extraBold,
        },
        bmiCategory: {
          fontSize: fonts.size.base,
          fontWeight: fonts.weight.semiBold,
        },
        footer: { marginTop: spacing["2xl"] },
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
        hint: {
          fontSize: fonts.size.xs,
          color: colors.textTertiary,
          marginTop: spacing.xs,
        },
        inputWithSuffix: {
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: colors.inputBackground,
          borderWidth: 1,
          borderColor: colors.inputBorder,
          borderRadius: radius.md,
          paddingHorizontal: spacing.base,
          paddingVertical: spacing.md,
        },
        inputInner: {
          flex: 1,
          fontSize: fonts.size.md,
          color: colors.inputText,
          padding: 0,
        },
        inputSuffix: {
          fontSize: fonts.size.md,
          color: colors.textSecondary,
          marginLeft: spacing.xs,
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
        <Text style={s.title}>About You</Text>
        <Text style={s.subtitle}>
          We'll use this to personalise your training.
        </Text>

        {/* Age */}
        <View style={s.field}>
          <Text style={s.label}>Age</Text>
          <TextInput
            style={s.input}
            placeholder="e.g. 28"
            placeholderTextColor={colors.inputPlaceholder}
            keyboardType="number-pad"
            value={form.age}
            onChangeText={(v) => update("age", v)}
            maxLength={3}
          />
        </View>

        {/* Sex */}
        <View style={s.field}>
          <Text style={s.label}>Sex</Text>
          <View style={s.sexRow}>
            {["Male", "Female", "Other"].map((opt) => (
              <TouchableOpacity
                key={opt}
                style={[s.sexBtn, form.sex === opt && s.sexBtnActive]}
                onPress={() => update("sex", opt)}
              >
                <Text
                  style={[s.sexBtnText, form.sex === opt && s.sexBtnTextActive]}
                >
                  {opt}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Weight */}
        <View style={s.field}>
          <Text style={s.label}>Weight</Text>
          <View style={s.row}>
            <View style={s.inputRow}>
              <TextInput
                style={s.input}
                placeholder={form.weightUnit === "kg" ? "e.g. 75" : "e.g. 165"}
                placeholderTextColor={colors.inputPlaceholder}
                keyboardType="decimal-pad"
                value={form.weight}
                onChangeText={(v) => update("weight", v)}
              />
            </View>
            <View style={s.unitToggle}>
              {["lbs", "kg"].map((u) => (
                <TouchableOpacity
                  key={u}
                  style={[s.unitBtn, form.weightUnit === u && s.unitBtnActive]}
                  onPress={() => update("weightUnit", u)}
                >
                  <Text
                    style={[
                      s.unitBtnText,
                      form.weightUnit === u && s.unitBtnTextActive,
                    ]}
                  >
                    {u}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* Height */}
        <View style={s.field}>
          <Text style={s.label}>Height</Text>
          <View style={s.row}>
            {form.heightUnit === "ft" ? (
              <>
                <View style={s.inputWithSuffix}>
                  <TextInput
                    style={s.inputInner}
                    placeholder="5"
                    placeholderTextColor={colors.inputPlaceholder}
                    keyboardType="number-pad"
                    value={form.heightFt}
                    onChangeText={(v) => update("heightFt", v)}
                    maxLength={1}
                  />
                  <Text style={s.inputSuffix}>'</Text>
                </View>
                <View style={s.inputWithSuffix}>
                  <TextInput
                    style={s.inputInner}
                    placeholder="6"
                    placeholderTextColor={colors.inputPlaceholder}
                    keyboardType="number-pad"
                    value={form.heightIn}
                    onChangeText={(v) => update("heightIn", v)}
                    maxLength={2}
                  />
                  <Text style={s.inputSuffix}>"</Text>
                </View>
              </>
            ) : (
              <View style={s.inputRow}>
                <TextInput
                  style={s.input}
                  placeholder="e.g. 178"
                  placeholderTextColor={colors.inputPlaceholder}
                  keyboardType="decimal-pad"
                  value={form.height}
                  onChangeText={(v) => update("height", v)}
                />
              </View>
            )}
            <View style={s.unitToggle}>
              {["ft", "cm"].map((u) => (
                <TouchableOpacity
                  key={u}
                  style={[s.unitBtn, form.heightUnit === u && s.unitBtnActive]}
                  onPress={() => update("heightUnit", u)}
                >
                  <Text
                    style={[
                      s.unitBtnText,
                      form.heightUnit === u && s.unitBtnTextActive,
                    ]}
                  >
                    {u}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
        {bmi && category && (
          <View style={s.bmiCard}>
            <View>
              <Text style={s.bmiLabel}>Your BMI</Text>
              <Text style={[s.bmiCategory, { color: category.color }]}>
                {category.label}
              </Text>
            </View>
            <Text style={[s.bmiValue, { color: category.color }]}>{bmi}</Text>
          </View>
        )}

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
              onPress={() => {
                updateSelection("personalInfo", {
                  age: form.age,
                  sex: form.sex,
                  weight: `${form.weight} ${form.weightUnit}`,
                  height:
                    form.heightUnit === "ft"
                      ? `${form.heightFt}'${form.heightIn}"`
                      : `${form.height} cm`,
                });
                router.push(ROUTES.ONBOARDING_SURF_PROFILE);
              }}
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
