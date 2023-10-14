import styled from "styled-components";

export const TodoWrapperStyled = styled.div`
  & > ul {
    /* border: 2px solid red; */
    li:first-child {
      border-top-left-radius: 0.3rem;
      border-top-right-radius: 0.3rem;
    }
    li:last-child {
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    /* border: 2px solid red !important; */
  }
  }

  
`;
