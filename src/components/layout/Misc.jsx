import { styled } from "styled-components";

const ThirdColumnContainer = styled.div`
  position: fixed;
  right: 5%;
  background-color: #f0f0f0;
  padding: 1rem;
`;

const Misc = () => {
  return <ThirdColumnContainer>Third Column</ThirdColumnContainer>;
};

export default Misc;
