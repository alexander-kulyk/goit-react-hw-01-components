import { Container } from "./Container/Container";
import {Profile}  from "components/Profile/Profile";
import { ThemeProvider } from 'styled-components';
import { theme } from "theme/theme";
import user from "../data/user.json";
import { Statistics } from "./Statistic/Statistic";



export const App = () => {
  return(
  <ThemeProvider theme={theme}>
      <Container>
        <Profile userInfo ={user}/>
        <Statistics/>
      </Container>
  </ThemeProvider>)
    
};
