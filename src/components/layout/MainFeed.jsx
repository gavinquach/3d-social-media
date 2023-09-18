import styled from "styled-components";

export const FeedContainer = styled.div`
  background-color: #0b0b0b;
  padding: 1rem;
  height: 100vh;
  min-width: 45rem; /* Limit the maximum width of the main feed */
  margin: 0 0.25rem; /* Add some space on the left and right of the main feed */
`;

export const FeedContentContainer = styled.div`
  background-color: none;
  border-bottom: 2px solid #646464;
  padding: 2rem 0;
  margin-bottom: 1rem; /* Add a small gap between each content */
  display: flex;
  justify-content: center;
  align-items: center;
`;
