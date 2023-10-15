import styled from "styled-components";

export const TodoWrapperStyled = styled.div`

/* box-shadow: 0 0 20px -5px black; */
  & > ul {

    box-shadow: 0px 7px 60px -51px black;
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
