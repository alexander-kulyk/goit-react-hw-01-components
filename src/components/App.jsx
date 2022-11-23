import { Container } from "./Container/Container.styled";
import { ProfileInfo}  from "components/Profile/Profile";
import { ThemeProvider } from 'styled-components';
import { theme } from "theme/theme";

import { Statistics } from "./Statistic/Statistic";
import { FriendList } from "./FriendList/FriendList";
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

import user from "../data/user.json";
import data from "../data/data.json";
import frinends from "../data/friends.json";
import transactions from "../data/transactions.json";

console.log(user);

const {
  avatar, 
  location,
  tag,
  username,
  stats:{
    followers,
    views,
    likes
  }
} = user


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
        < ProfileInfo 
          username={username}
          tag={tag}
          location={location}
          avatar={avatar}
          followers={followers}
          views={views}
          likes={likes}

        />
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data}/>
        <FriendList frinendsInfo={frinends}/>
        <TransactionHistory transInfo ={transactions}/>
      </Container>
  </ThemeProvider>)
    
};
