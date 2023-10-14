import styled from "styled-components";

const CheckButtonStyled = styled.button`
  width: 1.3rem;
  height: 1.3rem;
  padding: 0;
  border: 1px solid hsl(233, 14%, 35%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: ${({ $check }) =>
    $check
      ? "linear-gradient(120deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))"
      : "none"};
  background-color: transparent;

  border: ${({ $check }) => ($check ? "none" : "")};

`;

export default CheckButtonStyled;
