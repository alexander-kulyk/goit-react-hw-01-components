import { Container } from "./Container/Container";
import {Profile}  from "components/Profile/Profile";

import user from "../data/user.json";
import { Statistics } from "./Statistic/Statistic";




export const App = () => {
  return  <Container>
    <Profile userInfo ={user}/>
    <Statistics/>
  
  </Container>

};
