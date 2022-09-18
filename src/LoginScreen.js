import { View, StyleSheet, Text } from "react-native";
import * as React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "./components/CustomInput/CustomInput";
import CustomButton from "./components/CustomButton/CustomButton";
import { FontAwesome5 } from "@expo/vector-icons";
import Links from "./components/LoginLinks/Links";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();

  const onLoginPress= () => {
    navigation.navigate('HomeScreen');
  }
  const onRegisterPress= () => {
    navigation.navigate('RegisterScreen');
  } 


  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.imageContainer}>
        <FontAwesome5 name="user-alt" size={50} color="#00BFA5" />
        <Text style={styles.intro}>sign in to continue</Text>
      </View>
      {/* render the input in the login screen */}
      <View style={styles.inputsContainer}>
        <CustomInput placeholder="Username" />
        {/* Password */}
        <CustomInput placeholder="Password" />
      </View>
      {/* Buttons container */}
      <View style={styles.buttonsContainer}>
        {/* Login button navigates to home page on on pressed */}
        <CustomButton text="login" type="PRIMARY" onPress={onLoginPress} />
        {/* Register button navigaets to register page/screen  */}
        <CustomButton text="register" type="SECONDARY" onPress={onRegisterPress} />
        <Links />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#ECF0F1'
  },
  imageContainer: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 40,
  },
  inputsContainer: {
    width: "100%",
    paddingHorizontal: 15,
    paddingVertical: 20,
    margin: 5,
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
    color: "#000000",
  },
});
