import React from "react";
import { Link } from "react-router-dom";
import Profile from '../Profile/Profile';
import './StoryLink.scss';

const StoryLink = ({profile}) => {
    return (
        <div className="StoryLink">
            <div className="imageBox" onClick={() => window.location.reload()}>
                <Link to={profile.id}>
                    <Profile profileUrl={profile.url} />
                </Link>
            </div>
            <div className="storyName">{profile.text}</div>
        </div>
    );
};

export default StoryLink;