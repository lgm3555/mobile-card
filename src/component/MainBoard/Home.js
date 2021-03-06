import React, { useEffect, useState } from "react";
import Feed from "component/Comment/Feed";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "./Home.scss";
import Heart from "component/Comment/Heart";
import axios from 'axios';
import DeviceInfo from 'react-native-device-info';

SwiperCore.use([Navigation, Pagination]);

const Home = () => {

  const [visible, setVisible] = useState(false);
  const idValue = '';
  const textValue = '';
  const passValue = '';
  const [boardCount, setBoardCount] = useState();
  const [commentBox, setCommentBox] = useState({});
  const [likeCount, setLikeCount] = useState(0);
  const [deviceFlag, setDeviceFlag] = useState(false);

  const commentListFunc = async () => {
    try {
      const getApiResult = await axios.get('/board');
      setCommentBox(getApiResult.data);
    } catch (error) {
      console.log(error);
    }
  };

  const heartCountFunc = async () => {
    try {
      const getApiResult = await axios.get('/like/cnt');
      setLikeCount(getApiResult.data);
    } catch (error) {
      console.log(error);
    }
  };

  const boardCountFunc = async () => {
    try {
      const getApiResult = await axios.get('/board/cnt');
      setBoardCount(getApiResult.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deviceInfoFunc = async () => {
    try {
      const deviceId = DeviceInfo.getUniqueId().then(uniqueId => {
        return uniqueId;
      });
      
      const getApiResult = await axios.post('/like', {
        "deviceId": deviceId
      });

      if (getApiResult.data === null) {
        setDeviceFlag(false);
      } else {
        setDeviceFlag(true);
      }
    } catch (error) {
    }
  }

  useEffect(() => {
    commentListFunc();
    boardCountFunc();
    heartCountFunc();
    deviceInfoFunc();
  }, []);

  return (
      <>
        <div className="Home">
            <Swiper>
                <SwiperSlide><img src="./image/marryImage1.jpg" alt="main1" /></SwiperSlide>
                <SwiperSlide><img src="./image/marryImage6.jpg" alt="main2" /></SwiperSlide>
                <SwiperSlide><img src="./image/marryImage7.jpg" alt="main3" /></SwiperSlide>
                <SwiperSlide><img src="./image/marryImage8.jpg" alt="main4" /></SwiperSlide>
                <SwiperSlide><img src="./image/marryImage10.jpg" alt="main5" /></SwiperSlide>
                <SwiperSlide><img src="./image/marryImage2.jpg" alt="main6" /></SwiperSlide>
                <SwiperSlide><img src="./image/marryImage3.jpg" alt="main7" /></SwiperSlide>
                <SwiperSlide><img src="./image/marryImage4.jpg" alt="main8" /></SwiperSlide>
                <SwiperSlide><img src="./image/marryImage9.jpg" alt="main9" /></SwiperSlide>
                <SwiperSlide><img src="./image/marryImage5.jpg" alt="main10" /></SwiperSlide>
            </Swiper>
        </div>
        <div className="Feeds">
            <Heart likeCount={likeCount} deviceFlag={deviceFlag} />
            <br />
            <span>
              ?????? ????????? 356???. <br />
              ????????? ??????????????? ????????? ???????????? ???????????? ?????? ??? ???????????? ????????? ????????? ?????????. <br />
              ????????? ?????? ??????????????? ??? ??? ????????? ???????????? ?????? ???????????? ???????????? ???????????????. <br />
              ???????????????. <br />
            </span>
            <br />
            <span className="CommentBtn" onClick={() => {
              setVisible(!visible);
            }}>
              ?????? {boardCount}??? ?????? ??????
            </span>
            {
              visible && 
              <Feed
                  idValue={idValue}
                  passValue={passValue}
                  textValue={textValue}
                  commentBox={commentBox}
              />
            }
        </div>
      </>
    );
};

export default Home;