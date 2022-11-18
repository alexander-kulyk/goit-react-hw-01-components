import {List, ItemsStats, Percentage, Label} from "./List.styled";

const backColorItems = percentage =>{
    return percentage >= 20 
            ? "pink" 
            : "green";
};

export const ListStat = ({statInfo}) =>{
    
    return <List >
            {statInfo.map(item =>(
                <ItemsStats key={item.id} style={{backgroundColor:backColorItems(item.percentage)}}>
                    <Label>{item.label}</Label>
                    <Percentage>{item.percentage}%</Percentage>
                </ItemsStats>

            ))}
            
        </List>
}//{statInfo.map(item => console.log(item))}
//<ItemsStats/>