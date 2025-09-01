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
              fontSize: 25,
              fontWeight: "bold",
              color: theme.title,
            }}
          >
            Tropa Surf
          </Text>
        ),
      }}
    >
      <Stack.Screen name="index" options={{ headerShown: true }} />
    </Stack>
  );
}
