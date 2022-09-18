import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  Image,
  View,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import DashContainer from "../../components/Dashboard/DashContainer";
import HomeHeaderItem from "../../components/Dashboard/HomeHeaderItem";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('CameraItem');
  }

  return (
    <SafeAreaView>
      {/* Header */}
      <HomeHeaderItem />

      {/* DashBoard, main image in container */}
      <DashContainer />

      {/* Camera toggler*/}
      <View style={styles.container}>
        <Text style={{ fontSize: 20, color: '#FFFFFF', textTransform: 'capitalize' }}>
          Camera options below
        </Text>
        <Text style={{ fontSize: 14, color: '#FFFFFF' }}>
          use the camera to take photos and share with others.
        </Text>

        <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.toggle} onPress={onPress}>
          <Text style={{ fontSize: 14, color: '#000', textTransform: 'capitalize'  }}>
            open camera{" "}
            <Entypo name="camera" size={24} color="#000" />
          </Text>
        </TouchableOpacity>
      </View>
      </View>      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00BFA5",
    textAlign: "center",
    alignItems: "center",
    padding: 20,
    marginHorizontal: 15,
    borderRadius: 15,
  },
  buttonContainer: {
    alignSelf: "center",
    padding: 20,
  },
  toggle: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 15,
    alignItems: 'center',
  },
  text: {
    marginVertical: 5,
  }
});
