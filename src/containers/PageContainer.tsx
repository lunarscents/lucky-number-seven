import React from "react";

import styled from "styled-components/native";

const Container = styled.ScrollView`
  background-color: #eee;
`;

const PageContainer: React.FC = ({ children }) => {
  // TODO - add navigation or head

  return <Container>{children}</Container>;
};

export default PageContainer;
