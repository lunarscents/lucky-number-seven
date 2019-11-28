import React from "react";
import { Text, StatusBar } from "react-native";
import styled from "styled-components/native";
import { BG_COLOR } from "./constants/Colors";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
export default function App() {
  return (
    <Container>
      <StatusBar barStyle="light-content" />
      <Text>Hello, Lunarscents!</Text>
    </Container>
  );
}
