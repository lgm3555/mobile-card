import React, { useState } from "react";
import "./Heart.scss";

const flag = localStorage.getItem("like_flag");

const Heart = (props) => {

    const [like, setLike] = useState(Boolean(flag));
    const { likes } = props;

    const handleClick = () => {
        if (like && flag) {
            return;
        }
        setLike(true);
      };

      return (
        <div className="Heart">
          <div onClick={handleClick}>
            <img src={like ? "./image/heart.png" : "./image/emptyHeart.png"} alt="heart img" /> <span> 좋아요 32{likes}개 </span>
          </div>
        </div>
      );

}

export default Heart;