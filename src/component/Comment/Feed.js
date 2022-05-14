import React, { useState } from "react";
import Comment from './Comment';
import './Feed.scss';
import axios from 'axios';

const Feed = (props) => {

    const {commentBox} = props;
    const {message, setMessage} = useState('');
    const [inputs, setInputs] = useState({
        idValue: "",
        passValue: "",
        textValue: ""
    });

    const handleSubmit = async (e) => {
        if (!inputs.idValue || !inputs.passValue || !inputs.textValue) {
            return setMessage('빈칸을 채워주세요.');
        }
        try {
            const getApiResult = await axios.post('/board', {
                "id": inputs.idValue,
                "pass": inputs.passValue,
                "content": inputs.textValue
            });
            console.log(inputs);
            console.log(getApiResult.data);
          } catch (error) {
            console.log(error);
          }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs({[name]: value});
    }

    return (
        <div>
            <Comment comment={commentBox} />
            <br />
            <form onSubmit={handleSubmit}>
                <div className="CommentBox">
                    <input
                        value={inputs.idValue}
                        type="text"
                        className="commentIdInput"
                        placeholder="이름"
                        onChange={handleChange}
                    />
                    <input
                        value={inputs.passValue}
                        type="text"
                        className="commentPassInput"
                        placeholder="비밀번호"
                        onChange={handleChange}
                    />
                    <br /><br />
                    <input
                        value={inputs.textValue}
                        type="text"
                        className="commentTextInput"
                        placeholder="댓글달기..."
                        onChange={handleChange}
                    />
                    <div className="submitBtn">
                        <button type="submit">
                            작성하기
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default Feed;