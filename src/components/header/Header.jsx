import Moon from "../Moon";
import Sun from "../Sun";
import { StyledHeader } from "./HeaderStyled";

const Header = ({ theme, toggleTheme }) => {
  const handleTheme = () => toggleTheme();
  return (
    <StyledHeader>
      <h1>todo</h1>
      <button onClick={handleTheme} aria-label="toggle-theme">
        {theme === "dark" ? <Sun /> : <Moon />}
      </button>
    </StyledHeader>
  );
};
export default Header;
