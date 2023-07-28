/**
 * Header
 * Header of the app
 * Author @Charles
 */

import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLOR from '../../config/color';
import InputBox from '../inputBox';

export default function Header() {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <InputBox
          InputBoxStyle={styles.searchbox}
          placeHolder={'Search for gear'}
          sufix={
            <TouchableOpacity>
              <Ionicons name={'search'} size={20} color={COLOR.grey2} />
            </TouchableOpacity>
          }
          prefix={null}
        />
      </View>

      <MaterialCommunityIcons name={'cart'} size={26} color={COLOR.black} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.White,
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 8,
    paddingHorizontal: 15,
  },

  icons: {
    marginLeft: 15,
    marginRight: 10,
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  searchbox: {
    flex: 1,
    marginRight: 15,
  },
});
