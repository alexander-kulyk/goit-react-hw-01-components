
import { Profile } from "components/Profile/Profile";
import css from "./Container.module.css";
import user from "../../data/user.json";



export const Container = () =>{
    return(
        <div className={css.container}>
            <Profile userInfo ={user}/>
        </div>
        
    ) 
};