import React from "react";
import './Profile.scss';

const Profile = ({profileUrl}) => {
    return (
        <img className="Profile" src={profileUrl} alt={profileUrl} />
    );
}
export default Profile;