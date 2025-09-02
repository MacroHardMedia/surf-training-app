import { Stack } from "expo-router";
import { Text, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";

// Themed

export default function RootLayout() {
  const colorScheme = useColorScheme();
  console.log(colorScheme);
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.title,
        headerTitle: () => (
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: theme.title,
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
