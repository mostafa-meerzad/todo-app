import Moon from "../Moon";
import Sun from "../Sun";
import { StyledHeader } from "./HeaderStyled";

const Header = ({ theme, toggleTheme }) => {
  const handleTheme = () => toggleTheme();
  return (
    <StyledHeader>
      <h1>todo</h1>
      <button onClick={handleTheme}>
        {theme === "dark" ? <Moon /> : <Sun />}
      </button>
    </StyledHeader>
  );
};
export default Header;
