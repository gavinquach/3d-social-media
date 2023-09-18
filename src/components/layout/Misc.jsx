import { styled } from "styled-components";

const ThirdColumnContainer = styled.div`
  background-color: #f0f0f0;
  padding: 16px;
  max-width: 300px; /* Limit the maximum width of the third column */
  margin: 0 8px; /* Add some space on the left and right of the third column */
`;

const Misc  = () => {
    return <ThirdColumnContainer>Third Column</ThirdColumnContainer>;
};

export default Misc;
