import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BottomInfo from "./Utils/BottomInfo";
import { useNavigation } from "@react-navigation/native";
import styles from "./styles";

export default function DashContainer() {
  // const navigation = useNavigation();

  const onImagePressed = () => {
    console.warn('image pressed');
    /** Navigate to bottom carousel
     * Not necessarily a bottom carousel
     *  */
    // navigation.navigate('ItemDetailsOutline');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.imageContainer} onPress={onImagePressed}>
        <Image
        source={require("../../images/whey4.jpg")}
        resizeMode="cover"
        style={{
          width: '100%',
          height: 380,
          borderRadius: 15, 
        }}
        />
        <View style={styles.icon}>
          <MaterialCommunityIcons
            name="heart-multiple-outline"
            size={30}
            color="#FFFFFF"
          />
        </View>

        {/* Bottom Item Information */}
        <BottomInfo />
      </TouchableOpacity>
    </View>
  );
}

