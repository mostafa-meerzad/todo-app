import Cross from "../Cross";
import CrossButtonStyled from "./CrossButtonStyled";
const CrossButton = ({ ariaLabel, onClick, hover}) => {
  const handleClick = () => onClick();
  return (
    <CrossButtonStyled aria-label={ariaLabel} onClick={handleClick} initial={{opacity:0}} animate={hover ? {opacity:1} : {opacity:0}}>
      <Cross />
    </CrossButtonStyled>
  );
};
export default CrossButton;
