import styled from "styled-components";

const ButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ $active }) => ($active ? "hsl(220, 98%, 61%)" : "currentColor")};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.buttonHover};
  }
`;

export default ButtonStyled;
