import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Searchs from "../screens/Searchs";

const Stack = createStackNavigator();

export default function SearchsStack(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="search"
        component={Searchs}
        options={{ title: "Buscador" }}
      />
    </Stack.Navigator>
  );
}
