import {List, ItemsStats, Percentage, Label} from "./List.styled";
import PropTypes from 'prop-types';
const backColorItems = percentage =>{
    return percentage >= 20 
            ? "pink" 
            : "green";
};

export const ListStat = ({statInfo}) =>{
    
    return <List >
            {statInfo.map(({id, label, percentage}) =>(
                <ItemsStats key={id} style={{backgroundColor:backColorItems(percentage)}}>
                    <Label>{label}</Label>
                    <Percentage>{percentage}%</Percentage>
                </ItemsStats>

            ))}
            
        </List>
}

ListStat.propTypes ={
    statInfo: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
          }),

    ),
}