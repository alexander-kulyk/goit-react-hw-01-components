
import { Avatar } from "./Avatar/Avatar"
import { LocationUser } from "./LocationUser/LocationUser";
import { NameUser } from "./NameUser/NameUser";
import { TagUser } from "./TagUser/TagUser";
import css from "./Description.module.css";

export const Description =({userInfo})=>{
   const {
          username, 
          tag, 
          location, 
          avatar
        } = userInfo;
    

    return <div className={css.description}>
        <Avatar img={avatar}/>
        <NameUser name ={username}/>
        <TagUser tag ={tag}/>
        <LocationUser location ={location}/>
    </div>
}