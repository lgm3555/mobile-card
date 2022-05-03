import React from "react";
import './Profile.scss';

const Profile = ({profileUrl}) => {
    return (
        <div className="Profile">
            <div className="BackImg">
                <div className="BackImgDiv">
                    <img src="./image/storyround.png" alt=""></img>
                </div>
            </div>
            <div className="MainImg">
                <div className="MainImgDiv">
                    <img className="Profile" src={profileUrl} alt={profileUrl} />  
                </div>
            </div>
        </div>
    );
}
export default Profile;