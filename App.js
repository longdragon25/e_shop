import { LogBox } from "react-native";
import Main from "./Navigators/Main";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

LogBox.ignoreAllLogs(true);
export default function App() {
  return (
    <NavigationContainer>
      <Main />
    </NavigationContainer>
  );
}
