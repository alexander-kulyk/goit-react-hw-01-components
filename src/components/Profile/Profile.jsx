import PropTypes from 'prop-types'
import { Profile, Description, Avatar, Tag, Stats, ItemList, Name, Label, Quantity, Location } from 'components/Profile/Profile.styled'



export const ProfileInfo =({
    username, 
    tag, 
    location, 
    avatar, 
    stats
})=>{

    const {followers, views, likes} = stats

    return(
        <Profile>
            <Description>
                <Avatar src={avatar}  alt="User avatar"/>
                <Tag>{tag}</Tag>
                <Name>{username}</Name>
                <Location>{location}</Location>
                <Stats>
                    <ItemList>
                        <Label>Followers</Label>
                        <Quantity>{followers}</Quantity>
                    </ItemList>
                    <ItemList>
                        <Label>Views</Label>
                        <Quantity>{views}</Quantity>
                    </ItemList>
                    <ItemList>
                        <Label>Likes</Label>
                        <Quantity>{likes}</Quantity>
                    </ItemList>
                </Stats>

            </Description>

        </Profile>
    )  

}


ProfileInfo.propTypes ={
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired
}