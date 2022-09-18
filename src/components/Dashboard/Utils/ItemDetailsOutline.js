import * as React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import data from "../../Data/data";

export default function ItemDetailsOutline({ data }) {
  // Use ES6 destructuring, render data
  const { title, description, image, price } = data;

  return (

   // carousel container
    <View style={styles.cardContainer}>
      {/* left aligned content */}
      <View style={styles.leftContent}>
        <Text style={styles.listHeader}>{title}</Text>
        <Text style={[styles.listText]}>{description}</Text>
        <Text style={styles.price}>R{" "}{price}</Text>
      </View>
      {/* right laigned, button */}
      <Image
      source={require("../../../images/whey.jpg")}
      resizeMode={"cover"}
      style={{
         width: 100,
         height: 100,
         borderRadius: 10,
      }}
      />
    </View>
  );
};


const styles = StyleSheet.create({
   cardContainer: {
      backgroundColor: '#00BFA5',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginVertical: 15,
      marginHorizontal: 15,
      borderRadius: 25,
      width: 'auto',
      height: 140,
      flex: 1
   },
   leftContent: {
      padding: 5,
   },
   listHeader: {
      fontSize: 18,
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 0.5,
      marginBottom: 5,
      color: '#FFFFFF'
   },
   listText: {
      letterSpacing: 0.2,
      marginBottom: 5,
      color: '#FFFFFF',
      textAlignVertical: 'auto',
   },
   viewButton: {
      backgroundColor: '#FFFFFF',
      paddingHorizontal: 25,
      paddingVertical: 15,
      textAlign: 'center',
      borderRadius: 25,
   },
   buttonText: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 0.5,
      color: '#00796B'
   },
   price: {
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: 0.5,
      color: '#FFFFFF',
   }
})