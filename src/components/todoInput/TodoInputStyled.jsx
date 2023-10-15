import styled from "styled-components";

const TodoInputStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  background-color: ${({ theme }) => theme.background};
  border: none;
  border-radius: 0.3rem;
  padding: 1rem;
  margin-block-end: 1.5rem;
  box-shadow: 0px 3px 16px -5px black;

  & > input {
    flex: 1;
    padding: 0.2rem;
    border: none;
    outline: none;
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.background};
    font-size: 1rem;
    font-weight: 400;
    font-family: "Josefin Sans", sans-serif;
  }
 
  box-shadow: ${({ $empty }) => ($empty ? "inset 0 0 8px red" : "none")};
`;

export default TodoInputStyled;
