import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";
import { StatusBar } from "react-native";
import MainNavigation from "./navigation/MainNavigation";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoaded = () => setLoaded(true);

  return loaded ? (
    <>
      <StatusBar barStyle="light-content" />
      <MainNavigation />
    </>
  ) : (
    <AppLoading onFinish={handleLoaded} />
  );
}
