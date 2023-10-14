import Cross from "../Cross";
import CrossButtonStyled from "./CrossButtonStyled";
const CrossButton = ({ ariaLabel, onClick }) => {
  const handleClick = () => onClick();
  return (
    <CrossButtonStyled aria-label={ariaLabel} onClick={handleClick}>
      <Cross />
    </CrossButtonStyled>
  );
};
export default CrossButton;
