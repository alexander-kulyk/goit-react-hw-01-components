import css from "./Avatar.module.css";
import PropTypes from "prop-types";

export const Avatar = ({img}) =>{
    return <img className={css.avatar} src={img} alt="User avatar" />
}


Avatar.protoType = {
    img: PropTypes.string.isRequired
}