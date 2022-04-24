import React, {useState} from "react";
import StoryLink from './StoryLink';
import './StoryCircle';

const StoryCircle = () => {
    
    const [profile, setProfile] = useState([
        {
            text: 'Home',
            id: '/',
            url: './image/profileHomeImage.jpeg'
        },
        {
            text: 'Man',
            id: '/man',
            url: './image/profileManImage.jpeg'
        },
        {
            text: 'Girl',
            id: '/girl',
            url: './image/profileGirlImage.jpeg'
        },
        {
            text: 'Location',
            id: '/location',
            url: './image/locationImage.png'
        }
    ]);

    const profileList = profile.map(profile => <StoryLink profile={profile} />)

    return (
        <div className="StoryCircle">
            {profileList}
        </div>
    );
};

export default StoryCircle;