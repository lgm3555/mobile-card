import React from "react";
import './Comment.scss';

const Comment = (props) => {
    const {comment} = props;

    const updateClick = (seq) => {
        console.log(seq);
    }

    const deleteClick = (seq) => {
        console.log(seq);
    }

    const box = comment.map(comment => {
        return (
            <div className="Cards" key={comment.seq}>
                <h4>{comment.id}</h4>
                <span>{comment.regdate}</span>
                <div className="Card">
                    {comment.content}
                </div>
                <div className="CardBtn">
                    <span onClick={() => {
                        updateClick(comment.seq);
                    }} >
                        수정
                    </span>
                    <span onClick={() => {
                        deleteClick(comment.seq);
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