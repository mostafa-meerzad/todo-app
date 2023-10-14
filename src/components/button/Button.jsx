import ButtonStyled from "./ButtonStyled";

const Button = ({ active, children, onClick}) => {
  return (
    <ButtonStyled $active={active} onClick={onClick}>
      {children}
    </ButtonStyled>
  );
};
export default Button;
