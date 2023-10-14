import styled from "styled-components";

const CheckButtonStyled = styled.button`
  width: 1.4rem;
  height: 1.4rem;
  padding: 0;
  border: 1px solid gray;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-image: ${(props) =>
    props.check ? "linear-gradient(red, blue)" : "none"};
  background-color: transparent;
  /* background-image: linear-gradient(red, blue); */
`;

export default CheckButtonStyled;
