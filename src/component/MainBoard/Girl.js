import React, { useState } from "react";
import AccountBox from "component/Account/AccountBox";
import './BoardProfile.scss';

const Girl = () => {

    const [visible, setVisible] = useState(false);
    const accountName = "예금자명 : 신나라";
    const accountNumber = "국민은행 : 000-000000-0000";

    return (
        <div className="BoardPro">
            <img src="./image/circleGirlImage.jpg" alt="main6" />
            <br />
            <span>
                안녕하세요. <br />
                드디어 신부가 되는 신나라 입니다. <br />
                믿음으로 함께하고 사랑으로 하나되는 <br />
                저희 약속의 자리에 소중한 분들을 모시고자 합니다. <br />
                서로를 아끼고 감사하며 아름답게 살아가겠습니다. <br />
            </span>
            <br />
            <button onClick={() => {
                setVisible(!visible);
            }}>
                신부측 계좌번호 확인하기
            </button>
            <br />
            {visible && <AccountBox name={accountName} number={accountNumber} />}
        </div>
    );
};

export default Girl;