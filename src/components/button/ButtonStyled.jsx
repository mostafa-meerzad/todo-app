import styled from "styled-components";

const ButtonStyled = styled.button`
  border: none;
  background-color: transparent;
  color: ${({ $active }) =>
    $active ? "hsl(220, 98%, 61%)" : "hsl(234, 11%, 52%)"};
`;

export default ButtonStyled;
