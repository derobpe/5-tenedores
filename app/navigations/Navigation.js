import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import RestaurantsStack from "./RestaurantsStack";
import FavoriteStack from "./FavoritesStack";
// import TopRestaurantsStack from "./TopRestaurantsStack";
import SearchsStack from "./SearchsStack";
import AccountsStack from "./AccountsStack";

import CircularActionMenu from "../screens/CircularActionMenu";

// import { Icon } from "react-native-elements";
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function Navigation(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="restaurants"
        tabBarOptions={{
          inactiveTintColor: "#646464",
          activeTintColor: "#00a680",
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
        })}
      >
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
          component={CircularActionMenu}
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

function screenOptions(route, color) {
  let iconName;
  switch (route.name) {
    case "restaurants":
      iconName = "compass";
      break;
    case "favorites":
      iconName = "heart-outline";
      break;
    case "top-restaurants":
      iconName = "star-outline";
      break;
    case "search":
      iconName = "md-search-outline";
      break;
    case "account":
      iconName = "md-skull-outline";
      break;

    default:
      break;
  }
  return (
    <Icon type="material-commutity" name={iconName} size={22} color={color} />
  );
}
