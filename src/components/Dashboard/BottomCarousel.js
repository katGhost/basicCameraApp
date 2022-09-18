import * as React from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import CarouselItem from './Utils/ItemDetailsOutline';
import data from '../Data/data';


export default function BottomCarousel() {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
      data={data}
      renderItem={({item}) => <ItemDetailsOutline data={item} />}
      scrollEnabled={true}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
       />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
   container: {
      margin: 10,
      marginBottom: 20,
      padding: 5,
      widith: '100%',
   },
})