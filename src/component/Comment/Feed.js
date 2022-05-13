import React, { useState } from "react";
import Comment from './Comment';
import './Feed.scss';
import axios from 'axios';

const Feed = (props) => {

    const {commentBox} = props;
    const [seq, setSeq] = useState(0);
    const [mode, setMode] = useState("");
    const [inputs, setInputs] = useState({
        idValue: "",
        passValue: "",
        textValue: ""
    });

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (!inputs.idValue || !inputs.passValue || !inputs.textValue) {
            return alert('빈칸을 채워주세요.');
        }

        try {

            if (mode == "new") {
                const getApiResult = await axios.post('/board', {
                    "id": inputs.idValue,
                    "pass": inputs.passValue,
                    "content": inputs.textValue
                });
            } else if (mode == "edit") {
                const getApiResult = await axios.put('/board/' + seq, {
                    "id": inputs.idValue,
                    "pass": inputs.passValue,
                    "content": inputs.textValue
                });
            } else if (mode == "delete") {
                const getApiResult = await axios.delete('/board/' + seq);
                console.log(getApiResult);
            }
        } catch (error) {
        }
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }

    return (
        <div>
            <Comment comment={commentBox} setInputs={setInputs} setMode={setMode} setSeq={setSeq} />
            <br />
            <form onSubmit={handleSubmit}>
                <div className="CommentBox">
                    <input
                        type="hidden"
                        value={seq || ""}
                        name="seq"
                    />
                    <input
                        type="hidden"
                        value={mode || ""}
                        name="mode"
                    />
                    <input
                        value={inputs.idValue || ""}
                        type="text"
                        name="idValue"
                        className="commentIdInput"
                        placeholder="이름"
                        onChange={handleChange}
                    />
                    <input
                        value={inputs.passValue || ""}
                        type="text"
                        name="passValue"
                        className="commentPassInput"
                        placeholder="비밀번호"
                        onChange={handleChange}
                    />
                    <br /><br />
                    <input
                        value={inputs.textValue || ""}
                        type="text"
                        name="textValue"
                        className="commentTextInput"
                        placeholder="댓글달기..."
                        onChange={handleChange}
                    />
                    <div>
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