import { Text, View } from "react-native";

import ProductContainer from "../Screens/Products/ProductContainer";
import React from "react";
import SingleProduct from "../Screens/Products/SingleProduct";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={ProductContainer}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="singleProduct"
        component={SingleProduct}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const HomeNavigator = () => {
  return <MyStack />;
};

export default HomeNavigator;
