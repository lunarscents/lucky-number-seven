import React from "react";
import { Platform } from "react-native";

import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";

import MyScreen from "../screens/My";
import HomeScreen from "../screens/Home";
import SearchScreen from "../screens/Search";
import { BG_COLOR, TINT_COLOR } from "../constants/Colors";
import TabIcon from "../components/TabIcon";

const headerStyles = {
  headerStyle: {
    backgroundColor: BG_COLOR,
    borderBottomWidth: 0
  },
  headerTitleStyle: {
    color: TINT_COLOR
  },
  headerTintColor: TINT_COLOR
};

const TabNavigation = createBottomTabNavigator(
  {
    My: {
      screen: createStackNavigator({
        Screen: {
          screen: MyScreen,
          navigationOptions: { title: "My", ...headerStyles }
        }
      }),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabIcon
            focused={focused}
            name={`${Platform.OS === "ios" ? "ios" : "md"}-person`}
          />
        )
      }
    },
    Home: {
      screen: createStackNavigator({
        Screen: {
          screen: HomeScreen,
          navigationOptions: { title: "Home", ...headerStyles }
        }
      }),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabIcon
            focused={focused}
            name={`${Platform.OS === "ios" ? "ios" : "md"}-home`}
          />
        )
      }
    },
    Search: {
      screen: createStackNavigator({
        Screen: {
          screen: SearchScreen,
          navigationOptions: { title: "Search", ...headerStyles }
        }
      }),
      navigationOptions: {
        tabBarIcon: ({ focused }) => (
          <TabIcon
            focused={focused}
            name={`${Platform.OS === "ios" ? "ios" : "md"}-search`}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: BG_COLOR
      }
    }
  }
);

export default createAppContainer(TabNavigation);
