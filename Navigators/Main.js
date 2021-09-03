import { Text, View } from "react-native";

import AdminNavigator from "./AdminNavigator";
import CartNavigator from "./CartNavigator";
import HomeNavigator from "./HomeNavigator";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";
import UserNavigator from "./UserNavigator";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// import CartIcon from "../Shared/CartIcon";

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: "#e91e63",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Icon name="shopping-cart" color={color} size={30} />
              {/* <CartIcon /> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Admin"
        component={AdminNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="cog" color={color} size={30} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={UserNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user" color={color} size={30} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
