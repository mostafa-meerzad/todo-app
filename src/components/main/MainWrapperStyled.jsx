import styled from "styled-components";

const MainWrapperStyled = styled.div`
  padding: 2rem 0;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;

  background-image: ${({ currentTheme }) =>
    currentTheme === "dark"
      ? 'url("./bg-mobile-dark.jpg")'
      : 'url("./bg-mobile-light.jpg")'};
  background-position: center top;
  background-size: 100% 15rem;
  background-repeat: no-repeat;

  background-color: black;
`;

export default MainWrapperStyled;