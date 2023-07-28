/**
 * HomeScreen
 * Main page
 * Author @Charles
 */

import React, {useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import Header from '../../component/header';
import Card from '../../component/cards';
import API from '../../config/API';
import {APICall} from '../../config/APICall';
import HorizontalCategory from './components/horizontalCategory';

export default function HomeScreen() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getItem();
  }, []);

  const getItem = async () => {
    let params = {
      url: API.BASE_URL + API.CategoryList,
    };
    let result = await APICall(params);
    if (result) {
      setData(result);
    }
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={data}
        renderItem={({item, index}) => <Card data={item} />}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={() => <HorizontalCategory />}
        onEndReachedThreshold={1}
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        contentContainerStyle={styles.content}
        numColumns={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {backgroundColor: 'white', flex: 1},
  content: {margin: 10},
});
