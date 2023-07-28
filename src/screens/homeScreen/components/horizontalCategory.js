/**
 * HorizontalCategory
 * Horizontal category, chip  items
 * @Charles
 */
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import Chip from '../../../component/chip';
import SmallHeadings from '../../../component/headings/smallHeadings';
import BigHeadings from '../../../component/headings/bigHeadings';
//data for chip item
const data = [
  {id: 1, title: 'Apparel', icon: 'shirt-outline'},
  {id: 2, title: 'Baseball', icon: 'baseball-outline'},
  {id: 3, title: 'Sports', icon: 'barbell-outline'},
  {id: 4, title: 'Travel', icon: 'airplane-outline'},
  {id: 5, title: 'Baseball', icon: 'baseball-outline'},
];

export default function HorizontalCategory() {
  return (
    <View style={styles.container}>
      <SmallHeadings title={'Featured Category'} />
      <ScrollView horizontal={true}>
        {data.map((itm, index) => {
          return <Chip data={itm} key={index.toString()} />;
        })}
      </ScrollView>
      <BigHeadings title={'Trending on SlidelineSwap'} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 15,
  },
});
