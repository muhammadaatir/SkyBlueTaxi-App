import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Auction from '../../screens/home/Auction/Auction';
import Rides from '../../screens/home/Rides/Rides';
import Setting from '../../screens/home/Setting/Setting';
import colors from '../../constant/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {responsiveScreenFontSize} from 'react-native-responsive-dimensions';

const Mytab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          height: 60,
        },
        tabBarInActiveTintColor: '#0000004D',
        tabBarActiveTintColor: colors.fontcolor,
        tabBarLabelStyle: {
          fontSize: responsiveScreenFontSize(1.6),
          fontWeight: '400',
          top: -10,
        },
        tabBarIcon: ({color, size}) => {
          return (
            <>
              {route.name === 'Setting' ? (
                <AntDesign name="setting" size={size} color={color} />
              ) : (
                <FontAwesome5
                  name={
                    route.name === 'Auction'
                      ? 'hammer'
                      : route.name === 'Rides'
                      ? 'car'
                      : null
                  }
                  size={size}
                  color={color}
                />
              )}
            </>
          );
        },
      })}>
      <Tab.Screen name="Auction" component={Auction} />
      <Tab.Screen name="Rides" component={Rides} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

export default Mytab;
