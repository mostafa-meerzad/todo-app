import { useState } from "react";
import Header from "./components/header/Header";
import Todo from "./features/todo/TodoWrapper";
import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyles } from "./globalStyles";

import styled from "styled-components";
import MainWrapper from "./components/main/MainWrapper";
import Main from "./components/main/Main";


const App = () => {
  const [currentTheme, setCurrentTheme] = useState("light");
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
