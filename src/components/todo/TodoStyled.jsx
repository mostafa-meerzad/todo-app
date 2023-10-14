import styled from "styled-components";

export const TodoStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  background-color: #fff;
  border-bottom: 1px solid gray;

  & > p {
    width: 80%;
    line-height: 1.7rem;
    word-wrap: break-word;
  }
`;
