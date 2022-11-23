import PropTypes from 'prop-types';
import { ItemsStats, Label, List, Percentage, StatisticsBox, Title } from "components/Statistic/Statistics.styled";


const backColorItems = percentage =>{
        return percentage >= 20 
                ? "pink" 
                : "green";
    };


export const Statistics = ({title, stats}) =>{

    return (
        <StatisticsBox >
         {title && <Title>{title}</Title>}
        <List>
            {stats.map(({id, label, percentage}) =>(
                <ItemsStats key={id} style={{backgroundColor:backColorItems(percentage)}}>
                    <Label>{label}</Label>
                    <Percentage>{percentage}%</Percentage>
                </ItemsStats>

            ))}
        </List>
    </StatisticsBox>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
      }),
    ),
  };