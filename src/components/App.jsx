import { Container } from "./Container/Container";
import {Profile}  from "components/Profile/Profile";

import user from "../data/user.json";



export const App = () => {
  return  <Container>
    <Profile userInfo ={user}/>
  
  </Container>

};
