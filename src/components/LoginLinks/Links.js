import * as React from "react";
import { View, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

export default function Links() {
   const color = "#90A4AE";

  return (
    <View style={styles.container}>
      <FontAwesome5 name="facebook-messenger" size={24} color={color} />
      <FontAwesome5 name="twitter" size={24} color={color} />
      <FontAwesome5 name="linkedin" size={24} color={color} />
      <FontAwesome5 name="github" size={24} color={color} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",

    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 80,
  },
});
