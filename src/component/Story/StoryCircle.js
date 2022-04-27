import React, { useEffect, useState } from "react";
import StoryLink from './StoryLink';
import './StoryCircle';
import ProfileDataList from "../../globals/ProfileDataList";

const StoryCircle = () => {

    const profileList = ProfileDataList.map(profile => <StoryLink key={profile.id} profile={profile} />)

    return (
        <div className="StoryCircle">
            {profileList}
        </div>
    );
};

export default StoryCircle;