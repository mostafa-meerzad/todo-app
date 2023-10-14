import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-block-end: 0.5rem;

  & > h1 {
    text-transform: uppercase;
    letter-spacing: 10px;
    font-weight: 700;
    color: white;
  }
  & > button{
    background-color: transparent;
    border: none;
  }


`;

export { StyledHeader };
