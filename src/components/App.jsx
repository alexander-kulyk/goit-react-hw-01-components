import { Container } from "./Container/Container.styled";
import {Profile}  from "components/Profile/Profile";
import { ThemeProvider } from 'styled-components';
import { theme } from "theme/theme";
import user from "../data/user.json";
import { Statistics } from "./Statistic/Statistic";
import { FriendList } from "./FriendList/FriendList";

import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import frinends from "../data/friends.json";
import transactions from "../data/transactions.json";





export const App = () => {
  return(
  <ThemeProvider theme={theme}>
      <Container
        display="flex"
        flexDirection='column'
        justifyContent='center'
        alignItems='center'

        pt={5} 

        bg=' rgb(231, 236, 248);'
      >
        <Profile userInfo ={user}/>
        <Statistics/>
        <FriendList frinendsInfo={frinends}/>
        <TransactionHistory transInfo ={transactions}/>
      </Container>
  </ThemeProvider>)
    
};
