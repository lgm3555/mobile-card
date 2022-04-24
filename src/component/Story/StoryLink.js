import React from "react";
import { Link } from "react-router-dom";
import './StoryLink.scss';

const StoryLink = ({profile}) => {
    return (
        <div className="StoryLink">
            <div className="imageBox">
                <Link to={profile.id}>
                    <img className="profile" src={profile.url} alt="home" />
                </Link>
            </div>
            <div className="storyName">{profile.text}</div>
        </div>
    );
};

export default StoryLink;