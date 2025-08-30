import { View, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import { Spacer } from "./Spacer";

const ThemedView = ({ style, ...props }) => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <>
      <View style={[{ backgroundColor: theme.background }, style]} {...props} />
    </>
  );
};

export default ThemedView;
