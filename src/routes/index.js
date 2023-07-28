/**
 * Routes
 * Declare the routes of the app
 * @Charles
 */

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './bottomTabs';
const Stack = createNativeStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'left',
      }}>
      <Stack.Screen
        name="Home"
        component={BottomTabs}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
