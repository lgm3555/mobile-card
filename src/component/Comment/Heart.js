import React, { useState } from "react";
import "./Heart.scss";
import axios from 'axios';
import DeviceInfo from 'react-native-device-info';

const Heart = (props) => {

  const flag = props.deviceId;
  const [like, setLike] = useState(Boolean(flag));

  const handleClick = async () => {
      if (like && flag) {
          return;
      }
      try {
        const deviceId = DeviceInfo.getUniqueId().then(uniqueId => {
          return uniqueId;
        });

        const getApiResult = await axios.post('/like', {
          "deviceId": deviceId
        });
      } catch (error) {
        console.log(error);
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