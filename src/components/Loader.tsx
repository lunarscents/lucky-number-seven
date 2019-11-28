import React from "react";
import { ActivityIndicator } from "react-native";
import { TINT_COLOR, BG_COLOR } from "../constants/Colors";
import styled from "styled-components/native";

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
`;

export default () => (
  <Container>
    <ActivityIndicator color={TINT_COLOR} />
  </Container>
);
