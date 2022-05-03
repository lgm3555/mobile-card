import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Man from "./Man";
import Girl from "./Girl";
import Location from "./Location";
import "./Board.scss";
import ProfileDataList from "../../globals/ProfileDataList";

const Board = () => {
  const pathName = window.location.pathname;
  const profileBox = ProfileDataList.map(profile => {
    if (profile.id == pathName) {
      return (
        <>
          <img src={profile.url} alt="profile" />
          <span>{profile.text}</span>
        </>
      );
    }
  });

  return (
    <div className="Board">
      <div className="BoardProfileBox">
        {profileBox}
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