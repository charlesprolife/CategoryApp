/**
 * InputBox
 * InputBox in header section
 * Author @Charles
 */
import React from 'react';
import {StyleSheet, View, TextInput, Platform} from 'react-native';
import COLOR from '../../config/color';

export default function InputBox(props) {
  return (
    <View style={props.InputBoxStyle}>
      <View style={styles.container}>
        {props.sufix ? props.sufix : null}
        <TextInput
          value={props.value}
          placeholderTextColor={COLOR.grey2}
          placeholder={props.placeHolder}
          style={{
            ...styles.Input,
            height: props.numberOfLines > 1 ? 100 : null,
            marginTop: props.numberOfLines > 1 ? 10 : null,
            textAlignVertical: props.numberOfLines > 1 ? 'top' : 'center',
          }}
          keyboardType={props ? props.keyboardType : 'default'}
          //   onChangeText={val => props.onChange(val)}
          numberOfLines={props ? props.numberOfLines : 1}
          multiline={props && props.numberOfLines > 1 ? true : false}
          maxLength={props ? props.maxLength : 10000}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: COLOR.grey5,
    borderRadius: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 10,
    paddingLeft: 10,
  },

  Input: {
    flex: 1,
    marginHorizontal: 5,
    fontSize: 15,
    padding: Platform.OS === 'ios' ? 12 : 7,
    paddingLeft: 0,
    color: COLOR.black,
    maxHeight: 200,
  },
});
