import Check from "../Check";
import CheckButtonStyled from "./CheckButtonStyled";
import { check } from "../../assets/icons/index";

const CheckButton = ({ ariaLabel, check, onClick }) => {
  const handleClick = () => onClick();
  return (
    <CheckButtonStyled
      aria-label={ariaLabel}
      onClick={handleClick}
      check={check}
    >
      {check && <Check />}
    </CheckButtonStyled>
  );
};
export default CheckButton;
