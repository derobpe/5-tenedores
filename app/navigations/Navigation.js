import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";

import RestaurantsStack from "./RestaurantsStack";
import FavoriteStack from "./FavoritesStack";
import TopRestaurantsStack from "./TopRestaurantsStack";
import SearchsStack from "./SearchsStack";
import AccountsStack from "./AccountsStack";

const Tab = createBottomTabNavigator();

export default function Navigation(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="restaurants"
          component={RestaurantsStack}
          options={{ title: "Restaurantes" }}
        />
        <Tab.Screen
          name="favorites"
          component={FavoriteStack}
          options={{ title: "Favoritos" }}
        />
        <Tab.Screen
          name="top-restaurants"
          component={TopRestaurantsStack}
          options={{ title: "Top 5" }}
        />
        <Tab.Screen
          name="search"
          component={SearchsStack}
          options={{ title: "Buscar" }}
        />
        <Tab.Screen
          name="account"
          component={AccountsStack}
          options={{ title: "Cuenta" }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
