import Button from "../button/Button";
import FooterStyled from "./FooterStyled";

const Footer = ({
  todosLeft,
  onShowAll,
  onShowCompleted,
  onShowActives,
  onRemoveAll,
  filter,
}) => {
  return (
    <FooterStyled>
      <span>{todosLeft} items left</span>
      <div>
        <Button onClick={onShowAll} data-active={filter === "all"}>
          all
        </Button>
        <Button onClick={onShowActives} data-active={filter === "active"}>
          active
        </Button>
        <Button onClick={onShowCompleted} data-active={filter === "completed"}>
          completed
        </Button>
      </div>
      <Button onClick={onRemoveAll} aria-labelledby="remove all">
        remove all
      </Button>
    </FooterStyled>
  );
};
export default Footer;
