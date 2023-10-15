import styled from "styled-components";

export const TodoStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 3.5rem;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.text};

  /* box-shadow: 0 0 5px 20px black; */
  & > p {
    width: 80%;
    word-wrap: break-word;
  }

  & button:last-child {
    opacity: 0;
  }
  &:hover button:last-child {
    opacity: 1;
  }
`;
