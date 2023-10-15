import styled from "styled-components";

export const TodoWrapperStyled = styled.div`

  & > ul {

    box-shadow: 0px 7px 60px -51px black;
    li:first-child {
      border-top-left-radius: 0.3rem;
      border-top-right-radius: 0.3rem;
    }
    li:last-child {
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }
  }

  
`;
