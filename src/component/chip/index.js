/**
 * Chip
 * Chip for horizontal scrolling
 * Author @Charles
 */
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import COLOR from '../../config/color';
import Ionicons from 'react-native-vector-icons/Ionicons';
export default function Chip({data}) {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.roundIcon}>
        <Ionicons name={data.icon} size={30} color={COLOR.green} />
      </View>
      <Text style={styles.text}>{data.title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  roundIcon: {
    margin: 5,
    borderColor: COLOR.grey4,
    elevation: 8,
    backgroundColor: COLOR.White,
    borderRadius: 65,
    width: 65,
    height: 65,
    justifyContent: 'center',

    alignItems: 'center',
  },
  text: {
    color: COLOR.black,
    fontSize: 15,
  },
  container: {
    alignItems: 'center',
    marginHorizontal: 18,
  },
});
