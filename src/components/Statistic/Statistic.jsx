
import { StatisticsBox } from "components/Statistic/Statistics.styled";
import { ListStat } from "./ListStat/ListStat";
import { TitleStat } from "./TitleStat/TitleStat";
import statData from "../../data/data.json";



export const Statistics = () =>{
    return <StatisticsBox >
        <TitleStat title ={"Upload stats"}/>
        <ListStat statInfo = {statData}/>
    </StatisticsBox>
}