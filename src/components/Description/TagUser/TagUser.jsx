import css from "../Description.module.css";
import PropTypes from "prop-types";

export const TagUser = ({tag}) =>{
    return <p className={css.tag}>{tag}</p>
}


TagUser.protoType = {
    tag: PropTypes.string.isRequired
}