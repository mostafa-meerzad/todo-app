import Check from "../Check";
import CheckButtonStyled from "./CheckButtonStyled";


const CheckButton = ({ ariaLabel, check, onClick }) => {
  // const handleClick = () => onClick();
  return (
    <CheckButtonStyled
      aria-label={ariaLabel}
      onClick={onClick}
      $check={check}
    >
      {check && <Check />}
    </CheckButtonStyled>
  );
};
export default CheckButton;
