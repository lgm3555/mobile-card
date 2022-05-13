import React from "react";
import './Comment.scss';
import axios from 'axios';

const Comment = (props) => {
    
    const propDataClick = async (seq, mode) => {
        try {
            const getApiResult = await axios.get('/board/' + seq);

            props.setInputs({
                idValue: getApiResult.data.id,
                textValue: getApiResult.data.content
            });
            props.setSeq(seq);
            props.setMode(mode);
        } catch (error) {
        }
    }

    const box = props.comment.map(comment => {
        return (
            <div className="Cards" key={comment.seq}>
                <h4>{comment.id}</h4>
                <span>{comment.regdate}</span>
                <div className="Card">
                    {comment.content}
                </div>
                <div className="CardBtn">
                    <span onClick={() => {
                        propDataClick(comment.seq, "edit");
                    }} >
                        수정
                    </span>
                    <span onClick={() => {
                        propDataClick(comment.seq, "delete");
                    }} >
                        삭제
                    </span>
                </div>
            </div>
        );
    });

    return (
        <div className="Comment">
            {box}
        </div>
    );
}

export default Comment;