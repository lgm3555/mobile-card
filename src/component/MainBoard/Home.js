import React, { useState } from "react";
import Feed from "component/Comment/Feed";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss";
import "./Home.scss";
import Heart from "component/Comment/Heart";

SwiperCore.use([Navigation, Pagination]);

const Home = () => {

  const [visible, setVisible] = useState(false);
    const idValue = '';
    const textValue = '';
    const commentBox = [
        {
            id: "임광민",
            content: "두분의 결혼을 진심으로 축하드립니다. 항상 예쁜가정 꾸려나가길 축복합니다.",
            date: "2022-03-02"
        },
        {
            id: "수진",
            content: "상수야~ 결혼 너무 축하해!! 행복하고 예쁜가정 만들어~",
            date: "2022-02-22"
        },
        {
            id: "채윤",
            content: "나라신 너무너무 축하해 내 오랜친구인 나라의 결혼식이 나랑 일주일 차이라니 너무 신기해 ㅋㅋㅋ언제 만나도 어제 만난것처럼 즐거운 우리나라 결혼 진심으로 축하해",
            date: "2022-03-02"
        },
        {
            id: "백종민",
            content: "상수 선배님 축하드립니다! 항상 행복이 가득하길 바라겠습니다!!!",
            date: "2022-03-02"
        }
    ];

    const onInputChange = e => {
        this.setState({
          input: e.target.value,
        });
      };
    
      const commentUpdate = event => {
        const { commentBox, input, id } = this.state;
        if (event.key === 'Enter' && input.length > 0) {
          const newCommentBox = commentBox.concat({ id: id, content: input });
          this.updateComment(newCommentBox, id);
        }
      };
    
      const clickUpdate = () => {
        const { commentBox, input, id } = this.state;
        if (input.length > 0) {
          const newCommentBox = commentBox.concat({ id: id, content: input });
          this.updateComment(newCommentBox, id);
        }
      };
    
      const updateComment = (newCommentBox, id) => {
        this.setState({
          id: id + 1,
          commentBox: newCommentBox,
          input: '',
        });
      };

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
                <Heart props={3} />
                <br />
                <span>
                  처음 만난지 356일. <br />
                  오래전 작은인연이 저희를 연인으로 만들었고 지금 그 인연으로 저희가 하나가 됩니다. <br />
                  아직은 많이 부족하지만 늘 그 순간을 생각하며 서로 아껴주고 사랑하며 살겠습니다. <br />
                  감사합니다. <br />
                </span>
                <br />
                <span className="CommentBtn" onClick={() => {
                  setVisible(!visible);
                }}>
                  댓글 99개 모두 보기
                </span>
                {
                  visible && 
                  <Feed
                      idValue={idValue}
                      textValue={textValue}
                      commentBox={commentBox}
                      commentUpdate={commentUpdate}
                      onInputChange={onInputChange}
                      clickUpdate={clickUpdate}
                  />
                }
            </div>
        </>
    );
};

export default Home;