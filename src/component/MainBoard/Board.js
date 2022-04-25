import React, {useState} from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Profile from "../Story/Profile";
import Home from "./Home";
import Man from "./Man";
import Girl from "./Girl";
import Location from "./Location";
import ProfileDataList from "../../globals/ProfileDataList";

const Board = () => {
  const {profileName} = useParams();
  const [profile, setProfile] = useState();
console.log(profileName);
  ProfileDataList.map(profile => {
    if (profile.url == profileName) {
      const profile = <Profile profileUrl={profile.url} />
    }
  });

  return (
    <div className="Board">
      <div>
        {profile}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/man" element={<Man />} />
        <Route path="/girl" element={<Girl />} />
        <Route path="/location" element={<Location />} />
      </Routes>
    </div>
  )
};

export default Board;