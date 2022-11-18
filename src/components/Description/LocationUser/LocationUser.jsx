
import css from "../Description.module.css";
import PropTypes from "prop-types";

export const LocationUser = ({location}) =>{
    return <p className={css.location}>{location}</p>
}


LocationUser.protoType = {
    location: PropTypes.string.isRequired
}