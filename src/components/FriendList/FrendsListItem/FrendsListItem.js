import { Img, Status, Name, Item } from "./FrendsListItem.styled"


export const FrendsListItem = ({avatar,name,isOnline}) =>{

    return(
        <>
            <Item>
                <Status>{isOnline}</Status>
                <Img src={avatar} alt="User avatar" width="48"/>
                <Name>{name}</Name>
            </Item>
           
        </>

    )
}