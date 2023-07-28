/**
 * BottomTabs
 * Bottom tabs of the app
 * @Charles
 */
import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homeScreen';
import MyTabBar from './componenets/myTabBar';

const Tabs = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tabs.Navigator
      initialRouteName="HomeTabs"
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={({route}) => ({
        headerShown: false,
      })}>
      <Tabs.Screen name="Shop" component={HomeScreen} />
      <Tabs.Screen name="Love" component={HomeScreen} />
      <Tabs.Screen name="Take" component={HomeScreen} />
      <Tabs.Screen name="Mail" component={HomeScreen} />
      <Tabs.Screen name="Profile" component={HomeScreen} />
    </Tabs.Navigator>
  );
}
