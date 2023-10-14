import MainWrapperStyled from "./MainWrapperStyled";

const MainWrapper = ({ currentTheme, children }) => {
  return (
    <MainWrapperStyled currentTheme={currentTheme}>
      {children}
    </MainWrapperStyled>
  );
};
export default MainWrapper;
