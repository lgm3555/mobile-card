import React, { useState } from "react";
import "./Heart.scss";

const Heart = (props) => {

  const flag = props.deviceId;
  const [like, setLike] = useState(Boolean(flag));

  const handleClick = () => {
      if (like && flag) {
          return;
      }
      setLike(true);
    };

    return (
      <div className="Heart">
        <div onClick={handleClick}>
          <img src={like ? "./image/heart.png" : "./image/emptyHeart.png"} alt="heart img" /> <span> 좋아요 {props.likeCount}개 </span>
        </div>
      </div>
    );

}

export default Heart;