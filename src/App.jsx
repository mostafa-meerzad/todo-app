import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Todo from "./features/todo/TodoWrapper";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";

import MainWrapper from "./components/main/MainWrapper";
import Main from "./components/main/Main";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState("light");
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
      setCurrentTheme("dark");
    }
  }, []);
  return (
    <ThemeProvider
      theme={currentTheme === "light" ? theme.lightTheme : theme.darkTheme}
    >
      <MainWrapper currentTheme={currentTheme}>
        <Main>
          <Header
            theme={currentTheme}
            toggleTheme={() =>
              currentTheme === "light"
                ? setCurrentTheme("dark")
                : setCurrentTheme("light")
            }
          />
          <Todo />
        </Main>
      </MainWrapper>
    </ThemeProvider>
  );
};
export default App;
