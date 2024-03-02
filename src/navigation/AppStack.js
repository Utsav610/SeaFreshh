import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Splash from '../screen/Splash';
import Intro from '../screen/Intro';
import Login from '../screen/Login';
import Register from '../screen/Register';
import OtpView from '../screen/OtpView';
import { FontSize, Fonts } from '../constants/Fonts';
import { Colors } from '../constants/Colors';
import About from '../screen/DashboardScreen/About';
import Cart from '../screen/DashboardScreen/Cart';
import MyOrder from '../screen/DashboardScreen/MyOrder';
import Home from '../screen/DashboardScreen/Home';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Details from '../screen/Details';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function HomeTabs() {
  
  return (
    <>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: Colors.primary,
          tabBarInactiveTintColor: '#A6A6A6',
          tabBarStyle: {
            backgroundColor: Colors.white,
            height: 60,
            borderRadius: 20,
            elevation: 0,
          },
          tabBarLabelStyle: {
            fontFamily: Fonts.SEMIBOLD,
            fontSize: FontSize.FS_12,
            marginBottom: 5,
          },
          tabBarHideOnKeyboard: true,
        }}>
        <Tab.Screen
          name={'Home'}
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size, focused}) => (
              <Icon name={'view-dashboard-outline'} size={24} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name={'About'}
          component={About}
          options={{
            tabBarLabel: 'About',
            tabBarIcon: ({color, size, focused}) => (
              <Icon name={'format-list-bulleted'} size={24} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name={'Cart'}
          component={Cart}
          options={{
            tabBarLabel: 'Cart',
            tabBarIcon: ({color, size, focused}) => (
              <Icon name={'account-group-outline'} size={24} color={color} />
            ),
          }}
        />

        <Tab.Screen
          name={'MyOrder'}
          component={MyOrder}
          options={{
            tabBarLabel: 'MyOrder',
            tabBarIcon: ({color, size, focused}) => (
              <Icon name={'share-variant-outline'} size={24} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default function AppStack() {
  return (
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Intro" component={Intro} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="OtpView" component={OtpView} />
      <Stack.Screen name="Dashboard" component={HomeTabs} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
