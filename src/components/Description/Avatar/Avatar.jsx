import css from "./Avatar.module.css";

export const Avatar = ({img}) =>{
    return <img className={css.avatar} src={img} alt="User avatar" />
}