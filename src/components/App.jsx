import { Container } from "./Container/Container";
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
      <Container>
        <Profile userInfo ={user}/>
        <Statistics/>
        <FriendList frinendsInfo={frinends}/>
        <TransactionHistory transInfo ={transactions}/>
      </Container>
  </ThemeProvider>)
    
};
