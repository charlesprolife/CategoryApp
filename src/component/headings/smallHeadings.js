/**
 * SmallHeadings
 * Small heading
 * Author: @Charles
 */
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import COLOR from '../../config/color';

export default function SmallHeadings({title}) {
  return <Text style={styles.text}>{title}</Text>;
}
const styles = StyleSheet.create({
  text: {
    color: COLOR.black,
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 15,
    marginTop: 5,
  },
});
