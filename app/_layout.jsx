import { Stack } from "expo-router";
import { Text } from "react-native";
import { ThemeProvider, useTheme } from "../contexts/ThemeContext";

function RootNavigator() {
  const { theme } = useTheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.background },
        headerTintColor: theme.text,
        headerTitle: () => (
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: theme.text,
            }}
          >
            Total Surf App
          </Text>
        ),
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: true }} />
      <Stack.Screen
        name="programs/[program]"
        options={{
          headerShown: false,
          headerTitle: "",
          headerBackTitleVisible: false,
        }}
      />
    </Stack>
  );
}

export default function RootLayout() {
  return (
    <ThemeProvider>
      <RootNavigator />
    </ThemeProvider>
  );
}
