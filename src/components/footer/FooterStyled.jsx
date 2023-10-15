import styled from "styled-components";

const FooterStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  min-height: 3rem;
  background-color: ${({ theme }) => theme.background};
  color: hsl(234, 11%, 52%);
  /* color: hsl(233, 14%, 35%); */

  & span {
    font-size: 0.8rem;
    /* color: currentColor; */
  }
`;

export default FooterStyled;
