import * as React from "react";
import { StyleSheet, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import { Feather, MaterialIcons } from "@expo/vector-icons";

export default function SearchInput({ placeholder }) {
  return (
    <View style={styles.container}>
      <Feather name="search" size={24} color="#90A4AE" />
      <TextInput placeholder={placeholder} style={styles.input} />
      <View style={styles.icon}>
        <MaterialIcons name="dashboard" size={24} color="#FFFFFF" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    // flex: 1,
  },
  input: {
    paddingHorizontal: 5,
    paddingVertical: 7,
    fontSize: 16,
    textAlign: "left",
  },
  icon: {
    backgroundColor: "#90A4AE",
    borderRadius: 5,
  },
});
