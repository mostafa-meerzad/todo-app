import styled from "styled-components";

const TodoInputStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  background-color: #fff;
  border: none;
  border-radius: 0.3rem;
  padding: 1rem;
  margin-block-end:1.5rem;

  & > input {
    flex: 1;
    font-size: 1rem;
    font-weight: 400;
    padding: .2rem;
    border: none;
    outline: none;
    font-family: 'Josefin Sans', sans-serif;
  }
`;

export default TodoInputStyled;
