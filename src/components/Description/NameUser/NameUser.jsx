import PropTypes from "prop-types";
import css from "../Description.module.css";


export const NameUser = ({name})=>{
    return<p className={css.nameuser}>{name}</p>
    
}

NameUser.propType = {
    username: PropTypes.string.isRequired
}