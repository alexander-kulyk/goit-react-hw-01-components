
import PropTypes from 'prop-types';
import { Title } from "components/Statistic/Statistics.styled";

export const TitleStat = ({title}) =>{
    return <Title>{title}</Title>
}



Title.propTypes ={
    title: PropTypes.string
}