import styled from "styled-components";

const FooterStyled = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: white;
  color: gray;
  & > span {
    font-size: 0.8rem;
  }
`;

export default FooterStyled;
