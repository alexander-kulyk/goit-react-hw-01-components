import { FrendsListItem } from 'components/FriendList/FrendsListItem/FrendsListItem';
import PropTypes from 'prop-types';
import { FriendsListUl } from "./FriendList.styled";




export const FriendList = ({frinendsInfo}) =>{
   
    return <FriendsListUl>
        {frinendsInfo.map(({avatar, name, isOnline, id}) =>(
            <FrendsListItem 
                key={id}
                avatar={avatar}
                name={name}
                isOnline={isOnline}
                />    
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