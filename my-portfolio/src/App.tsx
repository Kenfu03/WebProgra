import { useState } from 'react';

import GlobalStyle1 from "./Styles/lightTheme";
import GlobalStyle2 from "./Styles/darkTheme";

import {
  Container,
  Header,
  WrapperSwitch,
  Switch,
  SwitcherContainer,
  Switcher,
  Input,
  ButtonContainer,
  Button,
  IconImg,
  ImgContainer,
} from "./App.style";

function App() {
  const [value, setValue] = useState("");
  const [theme, setTheme] = useState(1);
  const [themeValue, setThemeValue] = useState("8%");

  const calc = () => {
    if (value.length >= 5 && value.slice(-1) !== " ") {
      setValue(eval(value).toString());
    }
  } 

  const deleteValue = () => {
    if (value.slice(-1) === " ") {
      setValue(value.substring(0, value.length - 3));
    } else if (value.slice(-2) === "0.") {
      setValue(value.substring(0, value.length - 2));
    } else {
      setValue(value.substring(0, value.length - 1));
    }
  };

  const addSimbol = (simbol: string) => {
    if (value.slice(-1) !== " " && value.slice(-1) !== ".") {
      setValue(value + simbol);
    }
  };

  const hadleTheme = () => {
    if (theme === 1) {
      setTheme(2);
      setThemeValue("70%");
    } else {
      setTheme(1);
      setThemeValue("8%")};
  };

  return (
    <>
      {theme === 1 && <GlobalStyle1 />}
      {theme === 2 && <GlobalStyle2 />}
      <Container>
        <Header>
          Calc
          <WrapperSwitch>
            theme
            <Switch>
              <ImgContainer>
                <IconImg source="moon">
                  <p>Hola</p>
                </IconImg>
                <IconImg>
                  <p>KK</p>
                </IconImg>
              </ImgContainer>
              <SwitcherContainer onClick={hadleTheme}>
                <Switcher theme={themeValue} />
              </SwitcherContainer>
            </Switch>
          </WrapperSwitch>
        </Header>

      </Container>
    </>
  );
}

export default App;