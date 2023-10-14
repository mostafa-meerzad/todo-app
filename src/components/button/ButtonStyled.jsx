import styled from 'styled-components';

const ButtonStyled = styled.button`
  border:none;
  background-color: transparent;
  color: ${({active})=> active ? "green": "gray"};
`;

export default ButtonStyled;