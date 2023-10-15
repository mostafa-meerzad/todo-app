import styled from "styled-components";

const CheckButtonStyled = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  padding: 0;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: transparent;
  z-index: 0;
  background-color: ${({ theme }) => theme.buttonBorder};
  background-image: ${({ $check }) =>
    $check
      ? "linear-gradient(120deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))"
      : "none"};

  &:hover {
    background-image: linear-gradient(
      120deg,
      hsl(192, 100%, 67%),
      hsl(280, 87%, 65%)
    );
  }

  &::before {
    content: "";
    position: absolute;
    inset: 6%;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.background};
    background-image: ${({ $check }) =>
      $check
        ? "linear-gradient(120deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))"
        : "none"};
    z-index: -1;
  }
`;

export default CheckButtonStyled;
