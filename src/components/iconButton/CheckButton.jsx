import Check from "../Check";
import CheckButtonStyled from "./CheckButtonStyled";


const CheckButton = ({ ariaLabel, showTick, onClick, ...args }) => {

  return (
    <CheckButtonStyled
      aria-label={ariaLabel}
      onClick={onClick}
      $showTick={showTick}
      {...args}
    >
      {showTick && <Check />}
    </CheckButtonStyled>
  );
};
export default CheckButton;
