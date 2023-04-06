import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ScreenSettings from './screen/settings';
import HomeSettings from './screen/home';
import ScreenHistory from './screen/history';

const Tab = createMaterialBottomTabNavigator();
function Dummy() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello, insiede!</Text>
      </View>
    );
  }

  
export default function RouteTabs() {
    return (
      <Tab.Navigator screenOptions={{
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {
            fontWeight: "700",
            fontSize: 15
        },
        tabBarIconStyle: { display: "none" }
      }}>
        <Tab.Screen options={{tabBarButton: () => null, tabBarVisible: false, tabBarLabel: "Home" }} name="TabHome" component={HomeSettings} />
        <Tab.Screen options={{tabBarButton: () => null, tabBarVisible: false, tabBarLabel: "History" }} name="TabHistory" component={ScreenHistory} />
        <Tab.Screen options={{tabBarButton: () => null, tabBarVisible: false, tabBarLabel: "Settings" }} name="TabSettings" component={ScreenSettings} />
      </Tab.Navigator>
    );
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'rgb(59,108,212)',
      fontSize: 42,
      fontWeight: '100',
      textAlign: 'center',
    },
  })