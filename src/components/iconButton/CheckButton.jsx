import Check from "../Check";
import CheckButtonStyled from "./CheckButtonStyled";


const CheckButton = ({ ariaLabel, check, onClick, ...args }) => {
  // const handleClick = () => onClick();
  return (
    <CheckButtonStyled
      aria-label={ariaLabel}
      onClick={onClick}
      $check={check}
      {...args}
    >
      {check && <Check />}
    </CheckButtonStyled>
  );
};
export default CheckButton;
