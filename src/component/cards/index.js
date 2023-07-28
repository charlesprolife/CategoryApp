/**
 * Card
 * Card for listing
 * Author @Charles
 */
import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import COLOR from '../../config/color';
import Octicons from 'react-native-vector-icons/Octicons';

export default function Card({data}) {
  return (
    <View style={styles.container}>
      <View>
        <Image style={styles.image} source={{uri: data.imageUrl}} />
        <View style={styles.likeSection}>
          <Octicons name={'heart'} size={20} color={COLOR.White} />
          <Text style={styles.textLike}>{data.like}</Text>
        </View>
        <View style={styles.usernameSection}>
          <Text style={styles.textUserName}>{data.userName}</Text>
        </View>
      </View>
      <View style={styles.discription}>
        <Text style={styles.textHead}>{data.name}</Text>

        <View style={styles.footer}>
          <Text style={styles.price}>${data.price}</Text>
          <Text style={styles.RedPrice}>Retail: ${data.price}</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 5,
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    borderColor: COLOR.grey3,
    elevation: 4,
    backgroundColor: COLOR.White,
  },
  text: {fontSize: 12, color: COLOR.grey1},
  textHead: {
    fontSize: 14,
    color: COLOR.black,
    textTransform: 'capitalize',
  },
  textLike: {
    fontSize: 13,
    color: COLOR.White,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  textUserName: {
    fontSize: 13,
    color: COLOR.White,
  },
  image: {
    width: '100%',
    height: 200,
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },

  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 25,
  },
  price: {
    color: COLOR.black,
    fontSize: 16,
  },
  discription: {
    margin: 7,
  },
  RedPrice: {
    color: COLOR.grey2,
    fontSize: 12,
  },
  likeSection: {
    position: 'absolute',
    right: 10,
    top: 10,
    flexDirection: 'row',
  },
  usernameSection: {
    position: 'absolute',
    left: 10,
    bottom: 10,
  },
});
