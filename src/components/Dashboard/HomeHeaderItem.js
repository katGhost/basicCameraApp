import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import StyledInput from '../../components/HomeItem/StyledItems/StyledInput';

export default function HomeHeaderItem() {
  return (
   <View style={styles.container}>
   <View style={styles.header}>
   <View style={styles.icon}>
   <Ionicons name="md-home" size={24} color="#00BFA5" />
     </View>
     <Text style={styles.title}>home</Text>
     <View style={styles.icon}>
     <Ionicons name="md-notifications" size={24} color="#00BFA5" />
     </View>
   </View>
   {/* search context */}
   <StyledInput />
 </View>
  );
};

const styles = StyleSheet.create({
   container: {
     width: '100%',
     backgroundColor: '#00BFA5',
     padding: 20,
     paddingTop: 40,
     borderBottomLeftRadius: 20,
     borderBottomRightRadius: 20,
   },
   header: {
     flexDirection: 'row',
     justifyContent: "space-between",
     alignItems: 'center',
     marginVertical: 10,
   },
   icon: {
     backgroundColor: 'white',
     borderRadius: 10,
     padding: 5,
   },
   title: {
     fontSize: 18,
     fontWeight: '700',
     textTransform: 'capitalize',
     color: '#FFFFFF'
   },

 })
 