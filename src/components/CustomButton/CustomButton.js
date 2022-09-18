import * as React from 'react'
import { Text, TouchableOpacity, StyleSheet } from 'react-native'


export default function CustomButton({ onPress, text, type ="PRIMARY" }) {

   const buttonBgColor = type === "PRIMARY" ? "#00BFA5" : "transparent";
   const textColor = type === "PRIMARY" ? "#FFFFFF" : "#90A4AE";

  return (
   <TouchableOpacity onPress={onPress} style={[styles.container, {backgroundColor: buttonBgColor}]} type={type}>
   <Text style={[styles.text, { color: textColor }]}>{text}</Text>
 </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
   container: {
      width: '100%',
      padding: 15,
      marginVertical: 5,
      alignItems: 'center',
      borderRadius: 5,
      backgroundColor: '#00BFA5',
   },
   text: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 1.0,
   }
})