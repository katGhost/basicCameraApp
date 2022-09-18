import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { } from "react-native";

export default function CustomInput({ placeholder }) {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   backgroundColor: "#FFFFFF",
    width: "100%",
    borderColor: "lightgrey",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
  input: {
    textAlign: 'left',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});