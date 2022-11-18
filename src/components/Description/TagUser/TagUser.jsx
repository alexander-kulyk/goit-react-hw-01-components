import css from "../Description.module.css";

export const TagUser = ({tag}) =>{
    return <p className={css.tag}>{tag}</p>
}