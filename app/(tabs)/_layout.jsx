import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { Colors } from "../../constants/Colors";

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === "index") {
            iconName = "home";
          } else if (route.name === "progress") {
            iconName = "calendar";
          } else if (route.name === "timer") {
            iconName = "timer";
          } else if (route.name === "techniques") {
            iconName = "book";
          } else if (route.name === "more") {
            iconName = "ellipsis-horizontal";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: theme.tint,
        tabBarInactiveTintColor: "#666",
        tabBarStyle: {
          backgroundColor: theme.navBackground,
        },
        headerShown: false, // Hide header since we have it in root layout
      })}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarLabel: "Home",
        }}
      />
      <Tabs.Screen
        name="progress"
        options={{
          title: "Progress",
          tabBarLabel: "Progress",
        }}
      />
      <Tabs.Screen
        name="timer"
        options={{
          title: "Timer",
          tabBarLabel: "Timer",
        }}
      />
      <Tabs.Screen
        name="techniques"
        options={{
          title: "Techniques",
          tabBarLabel: "Techniques",
        }}
      />
      <Tabs.Screen
        name="more"
        options={{
          title: "More",
          tabBarLabel: "More",
        }}
      />
    </Tabs>
  );
}
