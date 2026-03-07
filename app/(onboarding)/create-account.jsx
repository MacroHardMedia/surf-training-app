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
import PrimaryButton from "../../components/PrimaryButton";

export default function CreateAccount() {
  const router = useRouter();
  const { theme } = useTheme();
  const { colors, fonts, spacing, radius } = theme;
  const insets = useSafeAreaInsets();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const update = (key, value) => setForm((prev) => ({ ...prev, [key]: value }));

  const passwordsMatch =
    form.password.length > 0 && form.password === form.confirmPassword;

  const passwordTooShort = form.password.length > 0 && form.password.length < 8;

  const hasNumber = /[0-9]/.test(form.password);

  const passwordValid = form.password.length >= 8 && hasNumber;

  const isValid =
    form.username.trim().length > 0 &&
    form.email.trim().length > 0 &&
    passwordValid &&
    passwordsMatch;

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
        scroll: {
          flexGrow: 1,
          padding: spacing.xl,
          justifyContent: "center",
        },
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
        inputWrapper: {
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: colors.inputBackground,
          borderWidth: 1,
          borderColor: colors.inputBorder,
          borderRadius: radius.md,
          paddingHorizontal: spacing.base,
        },
        inputWrapperError: {
          borderColor: "#EF4444",
        },
        input: {
          flex: 1,
          paddingVertical: spacing.md,
          fontSize: fonts.size.md,
          color: colors.inputText,
        },
        eyeBtn: {
          paddingLeft: spacing.sm,
          paddingVertical: spacing.md,
        },
        eyeText: {
          fontSize: fonts.size.sm,
          color: colors.textSecondary,
        },
        hint: {
          fontSize: fonts.size.xs,
          color: colors.textTertiary,
          marginTop: spacing.xs,
        },
        errorText: {
          fontSize: fonts.size.xs,
          color: "#EF4444",
          marginTop: spacing.xs,
        },
        footer: { marginTop: spacing["2xl"] },
        dividerRow: {
          flexDirection: "row",
          alignItems: "center",
          marginVertical: spacing.lg,
          gap: spacing.sm,
        },
        divider: {
          flex: 1,
          height: 1,
          backgroundColor: colors.border,
        },
        dividerText: {
          fontSize: fonts.size.sm,
          color: colors.textTertiary,
        },
        signInRow: {
          flexDirection: "row",
          justifyContent: "center",
          gap: spacing.xs,
        },
        signInText: {
          fontSize: fonts.size.sm,
          color: colors.textSecondary,
        },
        signInLink: {
          fontSize: fonts.size.sm,
          color: colors.primary,
          fontWeight: fonts.weight.semiBold,
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
      <ScrollView
        contentContainerStyle={s.scroll}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={s.title}>Create Account</Text>
        <Text style={s.subtitle}>
          Set up your login details to save your profile.
        </Text>

        {/* Username */}
        <View style={s.field}>
          <Text style={s.label}>Username</Text>
          <View style={s.inputWrapper}>
            <TextInput
              style={s.input}
              placeholder="e.g. surfer_joe"
              placeholderTextColor={colors.inputPlaceholder}
              autoCapitalize="none"
              autoCorrect={false}
              value={form.username}
              onChangeText={(v) => update("username", v)}
            />
          </View>
        </View>

        {/* Email */}
        <View style={s.field}>
          <Text style={s.label}>Email</Text>
          <View style={s.inputWrapper}>
            <TextInput
              style={s.input}
              placeholder="you@example.com"
              placeholderTextColor={colors.inputPlaceholder}
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              value={form.email}
              onChangeText={(v) => update("email", v)}
            />
          </View>
        </View>

        {/* Password */}
        <View style={s.field}>
          <Text style={s.label}>Password</Text>
          <View style={s.inputWrapper}>
            <TextInput
              style={s.input}
              placeholder="Min. 8 characters"
              placeholderTextColor={colors.inputPlaceholder}
              secureTextEntry={!showPassword}
              autoCapitalize="none"
              autoCorrect={false}
              value={form.password}
              onChangeText={(v) => update("password", v)}
            />
            <TouchableOpacity
              style={s.eyeBtn}
              onPress={() => setShowPassword((p) => !p)}
            >
              <Text style={s.eyeText}>{showPassword ? "Hide" : "Show"}</Text>
            </TouchableOpacity>
          </View>
          <Text style={s.hint}>Must be at least 8 characters.</Text>
        </View>

        {/* Confirm Password */}
        <View style={s.field}>
          <Text style={s.label}>Confirm Password</Text>
          <View
            style={[
              s.inputWrapper,
              form.confirmPassword.length > 0 &&
                !passwordsMatch &&
                s.inputWrapperError,
            ]}
          >
            <TextInput
              style={s.input}
              placeholder="Re-enter your password"
              placeholderTextColor={colors.inputPlaceholder}
              secureTextEntry={!showConfirm}
              autoCapitalize="none"
              autoCorrect={false}
              value={form.confirmPassword}
              onChangeText={(v) => update("confirmPassword", v)}
            />
            <TouchableOpacity
              style={s.eyeBtn}
              onPress={() => setShowConfirm((p) => !p)}
            >
              <Text style={s.eyeText}>{showConfirm ? "Hide" : "Show"}</Text>
            </TouchableOpacity>
          </View>
          {form.confirmPassword.length > 0 && !passwordsMatch && (
            <Text style={s.errorText}>Passwords do not match.</Text>
          )}
          {passwordTooShort && (
            <Text style={s.errorText}>
              Password must be more than 8 characters
            </Text>
          )}
          {form.password.length > 0 && !hasNumber && (
            <Text style={s.errorText}>
              Password must contain at least one number.
            </Text>
          )}
        </View>

        {/* CTA */}
        <View style={s.footer}>
          <PrimaryButton
            label="Create Account"
            onPress={() => router.replace(ROUTES.HOME)}
            disabled={!isValid}
          />

          {/* Divider */}
          <View style={s.dividerRow}>
            <View style={s.divider} />
            <Text style={s.dividerText}>or</Text>
            <View style={s.divider} />
          </View>

          {/* Sign in link */}
          <View style={s.signInRow}>
            <Text style={s.signInText}>Already have an account?</Text>
            <TouchableOpacity onPress={() => router.push(ROUTES.SIGN_IN)}>
              <Text style={s.signInLink}>Sign in</Text>
            </TouchableOpacity>
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
