import Moon from "../Moon";
import Sun from "../Sun";
import { HeaderStyled } from "./HeaderStyled";

const Header = ({ theme, toggleTheme }) => {
  // const handleClick = ()=> toggleTheme()
  return (
    <HeaderStyled>
      <h1>todo</h1>
      <button onClick={toggleTheme} aria-label="toggle-theme">
        {theme === "dark" ? <Sun /> : <Moon />}
      </button>
    </HeaderStyled>
  );
};
export default Header;
