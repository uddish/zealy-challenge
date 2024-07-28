import styled, { css } from "styled-components";

export const App = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 1;
  ${({ customCursor }) =>
    css`
      cursor: url(${customCursor}), auto;
    `};
`;
