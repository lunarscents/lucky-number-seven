import React, { useState, useEffect } from "react";
import { AppLoading } from "expo";
import { StatusBar } from "react-native";
import MainNavigation from "./navigation/MainNavigation";
// import { LottoResponse } from "./interfaces/lotto";
// import { PageContainer } from "./containers";

// import { requestAPI } from "./utils/api";

export default function App() {
  const [loaded, setLoaded] = useState(false);

  const handleLoaded = () => setLoaded(true);

  // const handleError = error => console.log(error);

  // useEffect(() => {
  //   const fetchLotto = async function() {
  //     try {
  //       const { data } = await requestAPI(800 as number);

  //       console.log(data);
  //       //{"totSellamnt":76994062000,"returnValue":"success","drwNoDate":"2018-03-31","firstWinamnt":1632246205,"drwtNo6":45,"drwtNo4":12,"firstPrzwnerCo":11,"drwtNo5":28,"bnusNo":26,"firstAccumamnt":17954708255,"drwNo":800,"drwtNo2":4,"drwtNo3":10,"drwtNo1":1}
  //       // setData(data);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchLotto();
  // }, [!data]);

  return loaded ? (
    <>
      <StatusBar barStyle="light-content" />
      <MainNavigation />
    </>
  ) : (
    <AppLoading onFinish={handleLoaded} />
  );
}
