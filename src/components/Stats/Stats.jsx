import css from "./Stats.module.css";

export const Stats = ({userInfo}) =>{
    const { 
        stats:{
           followers,
           views,
           likes
        }
      } = userInfo;
    return <ul className={css.stats}>
        <li className={css.item}>
            <span className={css.label}> Followers:</span>
            <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.item}>
            <span className={css.label}> Views:</span>
            <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.item}>
            <span className={css.label}> Likes:</span>
            <span className={css.quantity}>{likes}</span>
        </li>
        
        
    </ul>
}