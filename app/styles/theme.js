import React, { createContext, useContext, useMemo, useState } from "react";
import { useColorScheme } from "react-native";

// ==================== LIGHT THEME ====================
const lightTheme = {
  colors: {
    // Backgrounds
    background: "#F8FAFC",
    backgroundSecondary: "#F1F5F9",
    card: "#FFFFFF",
    cardSecondary: "#F8FAFC",
    modal: "#FFFFFF",
    overlay: "rgba(0, 0, 0, 0.5)",

    // Text
    text: "#0F172A",
    textSecondary: "#475569",
    textTertiary: "#94A3B8",
    textInverse: "#FFFFFF",
    textDisabled: "#CBD5E1",

    // Primary Brand Color
    primary: "#0EA5E9",
    primaryLight: "#BAE6FD",
    primaryDark: "#0369A1",
    primaryText: "#FFFFFF",

    // Secondary Brand Color
    secondary: "#6366F1",
    secondaryLight: "#E0E7FF",
    secondaryDark: "#4338CA",
    secondaryText: "#FFFFFF",

    // Accent
    accent: "#F59E0B",
    accentLight: "#FEF3C7",
    accentDark: "#D97706",
    accentText: "#FFFFFF",

    // Borders & Dividers
    border: "#E2E8F0",
    borderStrong: "#CBD5E1",
    divider: "#F1F5F9",

    // Status Colors
    success: "#10B981",
    successLight: "#D1FAE5",
    successText: "#065F46",

    warning: "#F59E0B",
    warningLight: "#FEF3C7",
    warningText: "#92400E",

    error: "#EF4444",
    errorLight: "#FEE2E2",
    errorText: "#991B1B",

    info: "#3B82F6",
    infoLight: "#DBEAFE",
    infoText: "#1E40AF",

    // Difficulty Badge Colors
    beginner: "#10B981",
    beginnerBg: "#D1FAE5",
    beginnerText: "#065F46",

    intermediate: "#F59E0B",
    intermediateBg: "#FEF3C7",
    intermediateText: "#92400E",

    advanced: "#EF4444",
    advancedBg: "#FEE2E2",
    advancedText: "#991B1B",

    // Navigation / Tab Bar
    tabBar: "#FFFFFF",
    tabBarBorder: "#E2E8F0",
    tabBarActive: "#0EA5E9",
    tabBarInactive: "#94A3B8",

    // Input Fields
    inputBackground: "#F8FAFC",
    inputBorder: "#E2E8F0",
    inputBorderFocus: "#0EA5E9",
    inputText: "#0F172A",
    inputPlaceholder: "#94A3B8",

    // Buttons
    buttonPrimary: "#0EA5E9",
    buttonPrimaryText: "#FFFFFF",
    buttonSecondary: "#F1F5F9",
    buttonSecondaryText: "#0F172A",
    buttonDisabled: "#E2E8F0",
    buttonDisabledText: "#94A3B8",

    // Icons
    icon: "#475569",
    iconActive: "#0EA5E9",
    iconInactive: "#94A3B8",

    // Shadows
    shadow: "#000000",
  },

  // ==================== FONTS ====================
  fonts: {
    // Font Families (update these to match your loaded fonts)
    regular: "System",
    medium: "System",
    semiBold: "System",
    bold: "System",
    light: "System",
    italic: "System",

    // Font Sizes
    size: {
      xs: 11,
      sm: 12,
      base: 14,
      md: 16,
      lg: 18,
      xl: 20,
      "2xl": 24,
      "3xl": 28,
      "4xl": 32,
      "5xl": 40,
    },

    // Font Weights
    weight: {
      light: "300",
      regular: "400",
      medium: "500",
      semiBold: "600",
      bold: "700",
      extraBold: "800",
    },

    // Line Heights
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },

    // Letter Spacing
    letterSpacing: {
      tight: -0.5,
      normal: 0,
      wide: 0.5,
      wider: 1,
    },
  },

  // ==================== SPACING ====================
  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    base: 16,
    lg: 20,
    xl: 24,
    "2xl": 32,
    "3xl": 40,
    "4xl": 48,
    "5xl": 64,
  },

  // ==================== BORDER RADIUS ====================
  radius: {
    none: 0,
    xs: 4,
    sm: 6,
    md: 8,
    lg: 12,
    xl: 16,
    "2xl": 20,
    "3xl": 24,
    full: 9999,
  },

  // ==================== SHADOWS ====================
  shadows: {
    none: {
      shadowColor: "transparent",
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0,
      shadowRadius: 0,
      elevation: 0,
    },
    sm: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.05,
      shadowRadius: 2,
      elevation: 1,
    },
    md: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.08,
      shadowRadius: 4,
      elevation: 3,
    },
    lg: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.1,
      shadowRadius: 8,
      elevation: 5,
    },
    xl: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.12,
      shadowRadius: 16,
      elevation: 8,
    },
  },

  // ==================== ANIMATIONS ====================
  animation: {
    fast: 150,
    normal: 250,
    slow: 400,
  },
};

// ==================== DARK THEME ====================
const darkTheme = {
  colors: {
    // Backgrounds
    background: "#020617",
    backgroundSecondary: "#0F172A",
    card: "#0F172A",
    cardSecondary: "#1E293B",
    modal: "#1E293B",
    overlay: "rgba(0, 0, 0, 0.7)",

    // Text
    text: "#F8FAFC",
    textSecondary: "#94A3B8",
    textTertiary: "#475569",
    textInverse: "#0F172A",
    textDisabled: "#334155",

    // Primary Brand Color
    primary: "#38BDF8",
    primaryLight: "#0C4A6E",
    primaryDark: "#7DD3FC",
    primaryText: "#020617",

    // Secondary Brand Color
    secondary: "#818CF8",
    secondaryLight: "#1E1B4B",
    secondaryDark: "#A5B4FC",
    secondaryText: "#020617",

    // Accent
    accent: "#FCD34D",
    accentLight: "#422006",
    accentDark: "#FDE68A",
    accentText: "#020617",

    // Borders & Dividers
    border: "#1E293B",
    borderStrong: "#334155",
    divider: "#0F172A",

    // Status Colors
    success: "#34D399",
    successLight: "#022C22",
    successText: "#6EE7B7",

    warning: "#FCD34D",
    warningLight: "#422006",
    warningText: "#FDE68A",

    error: "#F87171",
    errorLight: "#450A0A",
    errorText: "#FCA5A5",

    info: "#60A5FA",
    infoLight: "#172554",
    infoText: "#93C5FD",

    // Difficulty Badge Colors
    beginner: "#34D399",
    beginnerBg: "#022C22",
    beginnerText: "#6EE7B7",

    intermediate: "#FCD34D",
    intermediateBg: "#422006",
    intermediateText: "#FDE68A",

    advanced: "#F87171",
    advancedBg: "#450A0A",
    advancedText: "#FCA5A5",

    // Navigation / Tab Bar
    tabBar: "#0F172A",
    tabBarBorder: "#1E293B",
    tabBarActive: "#38BDF8",
    tabBarInactive: "#475569",

    // Input Fields
    inputBackground: "#0F172A",
    inputBorder: "#1E293B",
    inputBorderFocus: "#38BDF8",
    inputText: "#F8FAFC",
    inputPlaceholder: "#475569",

    // Buttons
    buttonPrimary: "#38BDF8",
    buttonPrimaryText: "#020617",
    buttonSecondary: "#1E293B",
    buttonSecondaryText: "#F8FAFC",
    buttonDisabled: "#1E293B",
    buttonDisabledText: "#475569",

    // Icons
    icon: "#94A3B8",
    iconActive: "#38BDF8",
    iconInactive: "#475569",

    // Shadows
    shadow: "#000000",
  },

  // ==================== FONTS ====================
  // Fonts are the same in both themes - edit once here
  fonts: lightTheme.fonts,

  // ==================== SPACING ====================
  // Spacing is the same in both themes - edit once here
  spacing: lightTheme.spacing,

  // ==================== BORDER RADIUS ====================
  // Radius is the same in both themes - edit once here
  radius: lightTheme.radius,

  // ==================== SHADOWS ====================
  shadows: {
    none: lightTheme.shadows.none,
    sm: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 1,
    },
    md: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 3,
    },
    lg: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.4,
      shadowRadius: 8,
      elevation: 5,
    },
    xl: {
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 8 },
      shadowOpacity: 0.5,
      shadowRadius: 16,
      elevation: 8,
    },
  },

  // ==================== ANIMATIONS ====================
  animation: lightTheme.animation,
};

// ==================== THEME CONTEXT ====================
const ThemeContext = createContext({
  theme: lightTheme,
  colorScheme: "light",
  toggleTheme: () => {},
});

// ==================== THEME PROVIDER ====================
export function ThemeProvider({ children }) {
  const systemScheme = useColorScheme();
  const [overrideScheme, setOverrideScheme] = useState(null);

  const colorScheme = overrideScheme || systemScheme || "light";

  const value = useMemo(
    () => ({
      theme: colorScheme === "dark" ? darkTheme : lightTheme,
      colorScheme,
      toggleTheme: () =>
        setOverrideScheme((prev) => (prev === "dark" ? "light" : "dark")),
    }),
    [colorScheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

// ==================== THEME HOOK ====================
export const useTheme = () => useContext(ThemeContext);

// ==================== EXPORTS ====================
export { lightTheme, darkTheme };
