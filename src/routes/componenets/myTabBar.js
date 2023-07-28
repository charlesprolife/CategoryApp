/**
 * MyTabBar
 * Botton tab customized
 * @params
 * state: route state
 * descriptors
 * navigation
 * @Charles
 */
import * as React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import COLOR from '../../config/color';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        let iconName;
        if (route.name === 'Shop') {
          iconName = 'search-sharp';
        } else if (route.name === 'Love') {
          iconName = 'heart-outline';
        } else if (route.name === 'Take') {
          iconName = 'camera-outline';
        } else if (route.name === 'Mail') {
          iconName = 'mail-outline';
        } else if (route.name === 'Profile') {
          iconName = 'person-circle-outline';
        }
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index.toString()}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {isFocused ? (
              <View style={styles.focused}>
                <Ionicons name={iconName} size={28} color={COLOR.primary} />
                <Text style={styles.focusedLabel}>{label}</Text>
              </View>
            ) : (
              <View style={styles.unfocusedIcon}>
                <Ionicons name={iconName} size={26} color={COLOR.grey2} />
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLOR.White,
    shadowColor: COLOR.grey1,
    shadowRadius: 10,
    shadowOpacity: 0.2,
    shadowOffset: {width: 0, height: 2},
    elevation: 5,
    height: 60,
    paddingHorizontal: 5,
  },
  focused: {
    borderRadius: 100,
    padding: 5,
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginRight: 5,
  },
  focusedLabel: {
    color: COLOR.primary,
    fontSize: 12,
    fontWeight: 'bold',
    alignItems: 'center',
  },
  unfocusedIcon: {
    padding: 5,
    alignItems: 'center',
  },
});
