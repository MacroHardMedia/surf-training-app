import React, { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const lightTheme = {
    background: "#FFFFFF",
    text: "#000000",
    primary: "#007AFF",
    secondary: "#F2F2F7",
    card: "#FFFFFF",
    border: "#C6C6C8",
    notification: "#FF3B30",
    cardBackground: "#FFFFFF",
    exerciseCardBg: "#F9F9F9",
    textSecondary: "#666666",
    textTertiary: "#999999",
    accent: "#34C759",
    success: "#34C759",
  };

  const darkTheme = {
    background: "#000000",
    text: "#FFFFFF",
    primary: "#0A84FF",
    secondary: "#1C1C1E",
    card: "#1C1C1E",
    border: "#38383A",
    notification: "#FF453A",
    cardBackground: "#1C1C1E",
    exerciseCardBg: "#2C2C2E",
    textSecondary: "#EBEBF5",
    textTertiary: "#8E8E93",
    accent: "#32D74B",
    success: "#32D74B",
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider
      value={{ theme, isDarkMode, toggleTheme, setIsDarkMode }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
