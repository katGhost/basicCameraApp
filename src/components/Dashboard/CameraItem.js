import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet, Button, Text } from "react-native";
import { Camera, CameraType, CameraMountError } from "expo-camera";
import { MaterialIcons } from "@expo/vector-icons";

export default function CameraItem() {

  const [type, setType]= useState(CameraType.back);
  // set camera persmissions
  const {permission, requestPermission} = Camera.getCameraPermissionsAsync();

  // ask for permissions
  if (!permission) {
    // Camera permissions are still loading
    return <View></View>;
  };
  
  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center', color: 'white' }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  // call on the camera type for usage
  function toggleCameraType() {
    setType((current) => {
      // if camera type is on front, change to back : vice-versa
      current === CameraType.back ? CameraType.front : CameraType.back;
    });
  };

  return (
    <View style={styles.cameraContainer}>
      <Camera style={styles.camera} type={type} >
        {/* touchable button, camera flip */}
        <TouchableOpacity style={styles.button} onPress={toggleCameraType}>
          <MaterialIcons name="flip-camera-ios" size={45} color="#FFFFFF" />
        </TouchableOpacity>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    bottom: 40,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
});
