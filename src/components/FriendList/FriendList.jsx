import PropTypes from 'prop-types';
import { FriendsListUl, Item, Img, Status, Name } from "./FriendList.styled";




export const FriendList = ({frinendsInfo}) =>{
   
    return <FriendsListUl>
        {frinendsInfo.map(({avatar, name, isOnline, id}) =>(
            <Item key={id}>
                <Status>{isOnline}</Status>
                <Img src={avatar} alt="User avatar" width="48"/>
                <Name>{name}</Name>
            </Item>
        ))}
    </FriendsListUl>
};

FriendList.propTypes ={
    frinendsInfo: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired
        })
    )
}