import { Description } from "components/Description/Description"
import { Stats } from "components/Stats/Stats";
import user from "../../data/user.json";
import css from "./Profile.module.css";


export const Profile =()=>{
    return <div className={css.profile}>
        <Description userInfo={user}/>
        <Stats userInfo={user}/>
    </div>

}






// const {
//   username, 
//   tag, 
//   location, 
//   avatar,
//   stats:{
//     followers,
//     views,
//     likes
//   }
// } = user;