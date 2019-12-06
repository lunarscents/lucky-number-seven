import React, { useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "react-native";
import MainNavigation from "./navigation/MainNavigation";

export default function App() {
  const [loaded, setLoaded] = useState<boolean>(false);

  const loadAssets = async () => {
    await Font.loadAsync({
      ...Ionicons.font
    });
  };

  const handleLoaded = () => {
    setLoaded(true);
  };

  return loaded ? (
    <>
      <StatusBar barStyle="light-content" />
      <MainNavigation />
    </>
  ) : (
    <AppLoading
      startAsync={loadAssets}
      onFinish={handleLoaded}
      onError={error => console.log(error)}
    />
  );
}
