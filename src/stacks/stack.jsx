import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//pages
import Home from "./pages/home/home";
import Details from "./pages/details/details";

const Stack = createStackNavigator();

const HomeStack = (props) => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "PokeApi",
          headerStyle: {
            backgroundColor: "#22C95A",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
          },
        }}
      />
      <Stack.Screen
        name="Details"
        component={Details}
        options={{
          title: "Details",
          headerStyle: {
            backgroundColor: "#22C95A",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
            alignSelf: "center",
            marginLeft: -50,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;
