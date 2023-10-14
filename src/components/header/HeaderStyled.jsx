import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > h1{
    text-transform: uppercase;
    letter-spacing: 10px;
    font-weight: 700;
  }

  & > button{
    border: none;
    /* background-color: transparent; */
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;

  }
`;

export {StyledHeader} ;