import React from "react";
import styled from "styled-components";

const NavigationContainer = styled.div`
  position: fixed;
  background-color: #e0e0e0;
  left: 5%;
  padding: 1rem;
`;

const Navigation = () => {
  return <NavigationContainer>Navigation Buttons</NavigationContainer>;
};

export default Navigation;
