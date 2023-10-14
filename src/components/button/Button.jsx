import ButtonStyled from "./ButtonStyled";

const Button = ({ children, ...args }) => {
  return <ButtonStyled {...args}>{children}</ButtonStyled>;
};
export default Button;
