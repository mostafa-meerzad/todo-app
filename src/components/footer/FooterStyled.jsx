import styled from "styled-components";

const FooterStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  min-height: 3rem;
  background-color: ${({ theme }) => theme.background};
  color: hsl(234, 11%, 52%);
  & span {
    font-size: 0.8rem;
  }
`;

export default FooterStyled;
