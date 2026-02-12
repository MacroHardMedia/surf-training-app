import { View } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

const ThemedView = ({ style, ...props }) => {
  const { theme } = useTheme();
  return (
    <View style={[{ backgroundColor: theme.background }, style]} {...props} />
  );
};

export default ThemedView;
