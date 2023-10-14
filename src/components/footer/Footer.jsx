import Button from "../button/Button";
import FooterStyled from "./FooterStyled";

const Footer = ({
  todosLeft,
  onShowAll,
  onShowCompleted,
  onShowActives,
  onRemoveAll,
}) => {
  return (
    <FooterStyled>
      <span>{todosLeft} items left</span>
      <div>
        <Button onClick={onShowAll}>all</Button>
        <Button onClick={onShowActives}>active</Button>
        <Button onClick={onShowCompleted}>completed</Button>
      </div>
      <Button onClick={onRemoveAll} aria-labelledby="remove all">
        remove all
      </Button>
    </FooterStyled>
  );
};
export default Footer;
