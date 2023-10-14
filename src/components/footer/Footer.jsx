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
        <Button onClick={onShowAll} active={filter === "all"}>
          all
        </Button>
        <Button onClick={onShowActives} active={filter === "active"}>
          active
        </Button>
        <Button onClick={onShowCompleted} active={filter === "completed"}>
          completed
        </Button>
      </div>
      <Button onClick={onRemoveAll}>remove all</Button>
    </FooterStyled>
  );
};
export default Footer;
