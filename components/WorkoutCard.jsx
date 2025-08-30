import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const WorkoutCard = () => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.cardShadow}>
      <ImageBackground
        source={image}
        style={styles.card}
        imageStyle={styles.image}
      >
        <Text style={styles.title}>{title}</Text>
        <View style={styles.button}>
          <Text style={styles.buttonText}>WORKOUT</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default WorkoutCard;

const styles = StyleSheet.create({
  cardShadow: {
    borderRadius: 12,
    overflow: "hidden",
    margin: 8,
    elevation: 3, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  card: {
    width: 170,
    height: 140,
    justifyContent: "flex-end",
    padding: 16,
  },
  image: {
    borderRadius: 12,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    textShadowColor: "rgba(0,0,0,0.6)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 4,
  },
  button: {
    alignSelf: "flex-start",
    backgroundColor: "#fff",
    borderRadius: 6,
    paddingVertical: 4,
    paddingHorizontal: 12,
  },
  buttonText: {
    color: "#222",
    fontWeight: "bold",
    fontSize: 14,
  },
});
