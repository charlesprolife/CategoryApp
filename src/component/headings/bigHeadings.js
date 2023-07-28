/**
 * BigHeadings
 * big heading
 * Author: @Charles
 */
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import COLOR from '../../config/color';

export default function BigHeadings({title}) {
  return <Text style={styles.text}>{title}</Text>;
}
const styles = StyleSheet.create({
  text: {
    color: COLOR.black,
    fontSize: 19,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 33,
  },
});
