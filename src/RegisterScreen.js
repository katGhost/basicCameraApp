import { View, StyleSheet, Text } from "react-native";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "./components/CustomInput/CustomInput";
import CustomButton from "./components/CustomButton/CustomButton";
import { FontAwesome5 } from "@expo/vector-icons";
import Links from "./components/LoginLinks/Links";

export default function RegisterScreen() {
  const onRegisterPress = () => {
    console.warn("Register Pressed");
  };

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.imageContainer}>
        <FontAwesome5 name="user-plus" size={50} color="#ECF0F1" />
        <Text style={styles.intro}>Create an account</Text>
      </View>
      {/* render the input in the login screen */}
      <View style={styles.inputsContainer}>
        <CustomInput placeholder="Username" />
        {/* Password */}
        <CustomInput placeholder="Password" />
        {/* Confirm Password */}
        <CustomInput placeholder="Confirm Password" />
      </View>
      {/* Buttons container */}
      <View style={styles.buttonsContainer}>
        <CustomButton text="sign up" type="PRIMARY" onPress={onRegisterPress} />

        <Links />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    alignItems: "center",
    flex: 1,
    backgroundColor: "#ECF0F1",
  },
  imageContainer: {
    backgroundColor: "#00BFA5",
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  inputsContainer: {
    width: "100%",
    paddingTop: 60,
    paddingBottom: 10,
    paddingHorizontal: 20,
    marginBottom: 40,
  },
  buttonsContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  intro: {
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 1,
    textTransform: "capitalize",
    marginVertical: 25,
    color: "#ECF0F1",
  },
});
